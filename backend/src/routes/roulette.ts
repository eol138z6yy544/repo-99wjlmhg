import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';
import { UserWithBirds } from '../lib/formatUser';
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

// Silver roulette
router.post('/silver_roulette', async (req: AuthRequest, res, next) => {
  try {
    const { amount_silver } = req.body;
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    if (user.amountSilver < amount_silver) {
      res.status(400).json({ error: 'Insufficient silver' });
      return;
    }

    const prizes = [
      { value: 0.1, weight: 30 },
      { value: 0.5, weight: 20 },
      { value: 1, weight: 15 },
      { value: 1.5, weight: 10 },
      { value: 2, weight: 5 },
      { value: 5, weight: 3 },
      { value: 10, weight: 1 },
    ];

    const totalWeight = prizes.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * totalWeight;
    let selected = prizes[0];
    for (const p of prizes) {
      rand -= p.weight;
      if (rand <= 0) {
        selected = p;
        break;
      }
    }

    const won = Math.floor(amount_silver * selected.value);
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        amountSilver: user.amountSilver - amount_silver + won,
        amountEggs: user.amountEggs,
        lastCollectDate: user.lastCollectDate,
      },
    });

    await prisma.silverRouletteSpin.create({
      data: {
        userId: user.id,
        amountSilver: amount_silver,
        prize: `x${selected.value}`,
        amountWon: won,
      },
    });

    res.json({ name: `x${selected.value}`, amount: won, silver: updated.amountSilver });
  } catch (err) {
    next(err);
  }
});

router.get('/silver_roulette/history', async (req: AuthRequest, res, next) => {
  try {
    const user = await getUser(req);
    const spins = await prisma.silverRouletteSpin.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json(spins);
  } catch (err) {
    next(err);
  }
});

router.get('/silver_roulette/top', async (_req: AuthRequest, res, next) => {
  try {
    const top = await prisma.silverRouletteSpin.findMany({
      orderBy: { amountWon: 'desc' },
      take: 10,
      include: { user: true },
    });
    res.json(top.map((s) => ({
      amount_silver_won: s.amountWon,
      prize: s.prize,
      user_name: `${s.user.firstName || ''} ${s.user.lastName || ''}`.trim(),
      photo_url: s.user.photoUrl,
    })));
  } catch (err) {
    next(err);
  }
});

router.get('/silver_roulette/jackpot', async (_req: AuthRequest, res, next) => {
  try {
    const total = await prisma.silverRouletteSpin.aggregate({
      _sum: { amountSilver: true },
    });
    const amount = Math.floor((total._sum.amountSilver || 0) * 0.1);
    res.json({ amount_silver: amount });
  } catch (err) {
    next(err);
  }
});

// Birds roulette
router.get('/birds_roulette/info', async (_req: AuthRequest, res, next) => {
  try {
    const info = {
      10000: [
        { amount: 50000, type: 'eggs' },
        { amount: 200000, type: 'eggs' },
        { amount: 500, type: 'silver' },
        { amount: 2500, type: 'silver' },
        { amount: 2, type: 'birds_a' },
        { amount: 3, type: 'birds_a' },
        { amount: 2, type: 'birds_b' },
        { amount: 4, type: 'birds_b' },
        { amount: 1, type: 'birds_c' },
        { amount: 2, type: 'roulette_tickets' },
      ],
      100000: [
        { amount: 500000, type: 'eggs' },
        { amount: 2000000, type: 'eggs' },
        { amount: 5000, type: 'silver' },
        { amount: 25000, type: 'silver' },
        { amount: 20, type: 'birds_a' },
        { amount: 10, type: 'birds_b' },
        { amount: 5, type: 'birds_c' },
        { amount: 2, type: 'birds_d' },
        { amount: 10, type: 'roulette_tickets' },
      ],
    };
    res.json(info);
  } catch (err) {
    next(err);
  }
});

router.post('/birds_roulette', async (req: AuthRequest, res, next) => {
  try {
    const { amount_silver } = req.body;
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    if (user.amountSilver < amount_silver) {
      res.status(400).json({ error: 'Insufficient silver' });
      return;
    }

    const prizes = [
      { type: 'eggs', amount: 50000, weight: 20 },
      { type: 'silver', amount: 500, weight: 20 },
      { type: 'birds_a', amount: 2, weight: 15 },
      { type: 'birds_b', amount: 2, weight: 10 },
      { type: 'birds_c', amount: 1, weight: 5 },
      { type: 'roulette_tickets', amount: 2, weight: 5 },
    ];

    const totalWeight = prizes.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * totalWeight;
    let selected = prizes[0];
    for (const p of prizes) {
      rand -= p.weight;
      if (rand <= 0) {
        selected = p;
        break;
      }
    }

    let silver = user.amountSilver - amount_silver;
    let eggs = user.amountEggs;
    let tickets = user.amountRouletteTickets;

    if (selected.type === 'eggs') eggs += selected.amount;
    if (selected.type === 'silver') silver += selected.amount;
    if (selected.type === 'roulette_tickets') tickets += selected.amount;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        amountSilver: silver,
        amountEggs: eggs,
        amountRouletteTickets: tickets,
        lastCollectDate: user.lastCollectDate,
      },
    });

    if (selected.type.startsWith('birds_')) {
      await prisma.userBird.upsert({
        where: { userId_birdTypeId: { userId: user.id, birdTypeId: selected.type } },
        update: { qty: { increment: selected.amount } },
        create: { userId: user.id, birdTypeId: selected.type, qty: selected.amount },
      });
      await updateProductivity(await prisma.user.findUnique({
        where: { id: user.id },
        include: { birds: { include: { birdType: true } } },
      }) as any);
    }

    await prisma.birdsRouletteSpin.create({
      data: {
        userId: user.id,
        amountSilver: amount_silver,
        prizeType: selected.type,
        prizeAmount: selected.amount,
      },
    });

    res.json({ name: selected.type, amount: selected.amount, type: selected.type });
  } catch (err) {
    next(err);
  }
});

router.get('/birds_roulette/history', async (req: AuthRequest, res, next) => {
  try {
    const user = await getUser(req);
    const spins = await prisma.birdsRouletteSpin.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json(spins);
  } catch (err) {
    next(err);
  }
});

router.get('/birds_roulette/top', async (_req: AuthRequest, res, next) => {
  try {
    const top = await prisma.birdsRouletteSpin.findMany({
      orderBy: { prizeAmount: 'desc' },
      take: 10,
      include: { user: true },
    });
    res.json(top.map((s) => ({
      prize: { amount: s.prizeAmount, type: s.prizeType },
      user_name: `${s.user.firstName || ''} ${s.user.lastName || ''}`.trim(),
      photo_url: s.user.photoUrl,
    })));
  } catch (err) {
    next(err);
  }
});

// Regular roulette (tickets)
router.post('/roulette', async (req: AuthRequest, res, next) => {
  try {
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    if (user.amountRouletteTickets <= 0) {
      res.status(400).json({ error: 'No tickets' });
      return;
    }

    const prizes = [
      { name: 'silver_1000', type: 'silver', amount: 1000, weight: 30 },
      { name: 'silver_5000', type: 'silver', amount: 5000, weight: 15 },
      { name: 'eggs_10000', type: 'eggs', amount: 10000, weight: 10 },
      { name: 'birds_a', type: 'birds_a', amount: 1, weight: 10 },
      { name: 'birds_b', type: 'birds_b', amount: 1, weight: 5 },
      { name: 'ticket', type: 'ticket', amount: 1, weight: 5 },
    ];

    const totalWeight = prizes.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * totalWeight;
    let selected = prizes[0];
    for (const p of prizes) {
      rand -= p.weight;
      if (rand <= 0) {
        selected = p;
        break;
      }
    }

    let silver = user.amountSilver;
    let eggs = user.amountEggs;
    let tickets = user.amountRouletteTickets - 1;

    if (selected.type === 'silver') silver += selected.amount;
    if (selected.type === 'eggs') eggs += selected.amount;
    if (selected.type === 'ticket') tickets += selected.amount;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        amountSilver: silver,
        amountEggs: eggs,
        amountRouletteTickets: tickets,
        lastCollectDate: user.lastCollectDate,
      },
    });

    if (selected.type.startsWith('birds_')) {
      await prisma.userBird.upsert({
        where: { userId_birdTypeId: { userId: user.id, birdTypeId: selected.type } },
        update: { qty: { increment: selected.amount } },
        create: { userId: user.id, birdTypeId: selected.type, qty: selected.amount },
      });
      await updateProductivity(await prisma.user.findUnique({
        where: { id: user.id },
        include: { birds: { include: { birdType: true } } },
      }) as any);
    }

    res.json({ name: selected.name, amount: selected.amount, type: selected.type });
  } catch (err) {
    next(err);
  }
});

export default router;
