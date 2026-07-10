import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (_req: AuthRequest, res, next) => {
  try {
    const packs = await prisma.bonusPack.findMany({
      orderBy: { priceUsd: 'asc' },
    });
    res.json(packs);
  } catch (err) {
    next(err);
  }
});

export default router;
