import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';
import { formatUserResponse, UserWithBirds } from '../lib/formatUser';
import { computeAndUpdateEggs } from '../lib/eggs';

const router = Router();

async function getUser(req: AuthRequest): Promise<UserWithBirds> {
  const user = await prisma.user.findUnique({
    where: { tgId: req.tgUser!.id },
    include: { birds: { include: { birdType: true } } },
  });
  if (!user) throw new Error('User not found');
  return user;
}

function recalcProductivity(user: UserWithBirds) {
  return user.birds.reduce((sum, ub) => sum + ub.qty * ub.birdType.productivityPerHour, 0);
}

async function updateProductivity(user: UserWithBirds) {
  const totalProductivity = recalcProductivity(user);
  await prisma.user.update({
    where: { id: user.id },
    data: { totalProductivity },
  });
  user.totalProductivity = totalProductivity;
  return user;
}

router.get('/', async (req: AuthRequest, res, next) => {
  try {
    const level = parseInt(req.query.level as string) || 1;
    const levels = await prisma.warehouseLevel.findMany({
      where: { level: { gte: level } },
      orderBy: { level: 'asc' },
    });
    res.json(levels);
  } catch (err) {
    next(err);
  }
});

router.post('/buy_birds', async (req: AuthRequest, res, next) => {
  try {
    const birds = (req.body.birds || req.body) as Record<string, number>;
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    let totalCost = 0;
    const updates: { birdTypeId: string; qty: number }[] = [];

    for (const [birdTypeId, qty] of Object.entries(birds)) {
      if (birdTypeId === 'birds') continue;
      const amount = Number(qty);
      if (!amount || amount <= 0) continue;
      const birdType = await prisma.birdType.findUnique({ where: { id: birdTypeId } });
      if (!birdType) continue;
      totalCost += birdType.cost * amount;
      updates.push({ birdTypeId, qty: amount });
    }

    if (user.amountSilver < totalCost) {
      res.status(400).json({ error: 'Insufficient silver' });
      return;
    }

    for (const update of updates) {
      await prisma.userBird.upsert({
        where: { userId_birdTypeId: { userId: user.id, birdTypeId: update.birdTypeId } },
        update: { qty: { increment: update.qty } },
        create: { userId: user.id, birdTypeId: update.birdTypeId, qty: update.qty },
      });
    }

    let updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { amountSilver: { decrement: totalCost } },
      include: { birds: { include: { birdType: true } } },
    });

    updatedUser = await updateProductivity(updatedUser);
    res.json(formatUserResponse(updatedUser));
  } catch (err) {
    next(err);
  }
});

router.post('/sell_birds', async (req: AuthRequest, res, next) => {
  try {
    const birds = (req.body.birds || req.body) as Record<string, number>;
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    let totalSilver = 0;
    const updates: { birdTypeId: string; qty: number }[] = [];

    for (const [birdTypeId, qty] of Object.entries(birds)) {
      if (birdTypeId === 'birds') continue;
      const amount = Number(qty);
      if (!amount || amount <= 0) continue;
      const userBird = user.birds.find((b) => b.birdTypeId === birdTypeId);
      if (!userBird || userBird.qty < amount) continue;
      totalSilver += userBird.birdType.sellCost * amount;
      updates.push({ birdTypeId, qty: amount });
    }

    for (const update of updates) {
      await prisma.userBird.update({
        where: { userId_birdTypeId: { userId: user.id, birdTypeId: update.birdTypeId } },
        data: { qty: { decrement: update.qty } },
      });
    }

    let updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { amountSilver: { increment: totalSilver } },
      include: { birds: { include: { birdType: true } } },
    });

    updatedUser = await updateProductivity(updatedUser);
    res.json(formatUserResponse(updatedUser));
  } catch (err) {
    next(err);
  }
});

router.post('/upgrade', async (req: AuthRequest, res, next) => {
  try {
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    const nextLevel = await prisma.warehouseLevel.findUnique({
      where: { level: user.warehouseLevel + 1 },
    });
    if (!nextLevel) {
      res.status(400).json({ error: 'Max level reached' });
      return;
    }
    if (user.amountSilver < nextLevel.cost) {
      res.status(400).json({ error: 'Insufficient silver' });
      return;
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { warehouseLevel: { increment: 1 }, amountSilver: { decrement: nextLevel.cost }, amountEggs: user.amountEggs, lastCollectDate: user.lastCollectDate },
      include: { birds: { include: { birdType: true } } },
    });

    res.json(formatUserResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.post('/sell_eggs', async (req: AuthRequest, res, next) => {
  try {
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    const eggsToSell = user.amountEggs;
    const gold = Math.floor(eggsToSell * user.sellEggsGoldRate);

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        amountEggs: 0,
        amountGold: { increment: gold },
        lastCollectDate: new Date(),
      },
      include: { birds: { include: { birdType: true } } },
    });

    await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'sell_eggs',
        amountEggs: eggsToSell,
        amountGold: gold,
      },
    });

    res.json(formatUserResponse(updated));
  } catch (err) {
    next(err);
  }
});

export default router;
