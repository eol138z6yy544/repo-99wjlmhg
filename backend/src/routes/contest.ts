import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (_req: AuthRequest, res, next) => {
  try {
    const active = await prisma.contest.findFirst({
      where: { isActive: true },
      orderBy: { startDate: 'desc' },
    });
    if (!active) {
      res.json({});
      return;
    }
    res.json({
      id: active.id,
      start_date: active.startDate,
      end_date: active.endDate,
      prize_pool: active.prizePool,
      is_active: active.isActive,
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:id/leaderboard', async (_req: AuthRequest, res, next) => {
  try {
    // Top users by total_productivity
    const top = await prisma.user.findMany({
      orderBy: { totalProductivity: 'desc' },
      take: 50,
    });
    res.json(top.map((u, i) => ({
      position: i + 1,
      user_name: `${u.firstName || ''} ${u.lastName || ''}`.trim(),
      photo_url: u.photoUrl,
      score: u.totalProductivity,
    })));
  } catch (err) {
    next(err);
  }
});

router.get('/:id/leaderboard/me', async (req: AuthRequest, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { tgId: req.tgUser!.id },
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const higher = await prisma.user.count({
      where: { totalProductivity: { gt: user.totalProductivity } },
    });

    res.json({
      position: higher + 1,
      user_name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      photo_url: user.photoUrl,
      score: user.totalProductivity,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
