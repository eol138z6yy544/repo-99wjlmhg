import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';
import { formatUserResponse } from '../lib/formatUser';
import { computeAndUpdateEggs } from '../lib/eggs';

const router = Router();

async function getUser(req: AuthRequest) {
  const user = await prisma.user.findUnique({
    where: { tgId: req.tgUser!.id },
    include: { birds: { include: { birdType: true } } },
  });
  if (!user) throw new Error('User not found');
  return user;
}

router.get('/deposit/promotions', async (_req: AuthRequest, res, next) => {
  try {
    res.json([]);
  } catch (err) {
    next(err);
  }
});

router.get('/history', async (req: AuthRequest, res, next) => {
  try {
    const user = await getUser(req);
    const type = req.query.type as string | undefined;
    const where: any = { userId: user.id };
    if (type) where.type = type;

    const txs = await prisma.transaction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    res.json(txs);
  } catch (err) {
    next(err);
  }
});

router.post('/exchange', async (req: AuthRequest, res, next) => {
  try {
    const { amount } = req.body; // gold amount
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    if (user.amountGold < amount) {
      res.status(400).json({ error: 'Insufficient gold' });
      return;
    }

    const silver = Math.floor(amount * 1.1);
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { amountGold: { decrement: amount }, amountSilver: { increment: silver } },
    });

    await prisma.transaction.create({
      data: { userId: user.id, type: 'exchange', amountGold: amount, amountSilver: silver },
    });

    res.json({ amount_gold: updated.amountGold, amount_silver: updated.amountSilver });
  } catch (err) {
    next(err);
  }
});

router.get('/withdraw_credits', async (req: AuthRequest, res, next) => {
  try {
    const user = await getUser(req);
    res.json(user.withdrawCredits);
  } catch (err) {
    next(err);
  }
});

router.get('/withdraw_rates', async (_req: AuthRequest, res, next) => {
  try {
    const rates = await prisma.withdrawRate.findMany({
      where: { isActive: true },
    });
    res.json(rates.map((r) => ({
      currency_code: r.currencyCode,
      network: r.network,
      image_url: r.imageUrl,
      rate_usd: r.rateUsd,
      fee_usd: r.feeUsd,
      minimum_amount_gold: r.minimumAmountGold,
      minimum_amount_usd: r.minimumAmountUsd,
    })));
  } catch (err) {
    next(err);
  }
});

router.post('/withdraw', async (req: AuthRequest, res, next) => {
  try {
    const { amount_gold, address, tag } = req.body;
    let user = await getUser(req);
    user = await computeAndUpdateEggs(user);

    const rate = await prisma.withdrawRate.findFirst({
      where: { isActive: true },
    });
    if (!rate) {
      res.status(400).json({ error: 'Withdrawals disabled' });
      return;
    }

    if (user.amountGold < amount_gold || amount_gold < rate.minimumAmountGold) {
      res.status(400).json({ error: 'Insufficient gold or below minimum' });
      return;
    }

    if (user.withdrawCredits <= 0) {
      res.status(400).json({ error: 'No withdraw credits' });
      return;
    }

    const usd = amount_gold / 10000;
    const ton = usd / rate.rateUsd;

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { amountGold: { decrement: amount_gold }, withdrawCredits: { decrement: 1 }, withdrawCounter: { increment: 1 } },
      include: { birds: { include: { birdType: true } } },
    });

    const withdrawal = await prisma.withdrawal.create({
      data: {
        userId: user.id,
        amountGold: amount_gold,
        amountTon: ton,
        address,
        tag,
        status: 'pending',
      },
    });

    await prisma.transaction.create({
      data: { userId: user.id, type: 'withdraw', amountGold: amount_gold, amountTon: ton, currencyCode: rate.currencyCode },
    });

    res.json({
      ...formatUserResponse(updated),
      withdrawal_id: withdrawal.id,
      amount_ton: ton,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/deposit', async (req: AuthRequest, res, next) => {
  try {
    const { amount, currency_code } = req.body;
    const user = await getUser(req);
    const tonWallet = process.env.TON_WALLET_ADDRESS;

    const deposit = await prisma.deposit.create({
      data: {
        userId: user.id,
        amountTon: amount,
        amountGold: 0,
        amountSilver: 0,
        status: 'pending',
      },
    });

    res.json({
      id: deposit.id,
      amount,
      currency_code,
      address: tonWallet,
      comment: `deposit_${user.id}_${deposit.id}`,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/deposit_tg_stars', async (_req: AuthRequest, res, next) => {
  try {
    res.status(400).json({ error: 'Stars disabled' });
  } catch (err) {
    next(err);
  }
});

export default router;
