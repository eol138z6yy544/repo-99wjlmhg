import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';
import { formatUserResponse } from '../lib/formatUser';
import { computeAndUpdateEggs } from '../lib/eggs';

const router = Router();

async function getOrCreateUser(tgUser: AuthRequest['tgUser']) {
  if (!tgUser) throw new Error('No tg user');

  let user = await prisma.user.findUnique({
    where: { tgId: tgUser.id },
    include: { birds: { include: { birdType: true } } },
  });

  if (!user) {
    const referralCode = `ref_${tgUser.id}`;
    const birdTypes = await prisma.birdType.findMany();
    user = await prisma.user.create({
      data: {
        tgId: tgUser.id,
        firstName: tgUser.first_name,
        lastName: tgUser.last_name,
        username: tgUser.username,
        languageCode: tgUser.language_code,
        photoUrl: tgUser.photo_url,
        allowsWriteToPm: tgUser.allows_write_to_pm ?? false,
        referralCode,
        birds: {
          create: birdTypes.map((bt) => ({ birdTypeId: bt.id, qty: 0 })),
        },
      },
      include: { birds: { include: { birdType: true } } },
    });
  }

  return user;
}

router.get('/', async (req: AuthRequest, res, next) => {
  try {
    const user = await getOrCreateUser(req.tgUser);
    const updated = await computeAndUpdateEggs(user);
    res.json(formatUserResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.post('/claim_bonus', async (req: AuthRequest, res, next) => {
  try {
    const user = await getOrCreateUser(req.tgUser);
    const updated = await computeAndUpdateEggs(user);
    // TODO: implement bonus logic
    res.json(formatUserResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.get('/referrals', async (req: AuthRequest, res, next) => {
  try {
    const level = parseInt(req.query.level as string) || 1;
    const user = await getOrCreateUser(req.tgUser);
    const refs = await prisma.referral.findMany({
      where: { userId: user.id, level },
      include: { user: true },
    });
    res.json(refs);
  } catch (err) {
    next(err);
  }
});

router.patch('/ref_payment_type', async (req: AuthRequest, res, next) => {
  try {
    const { ref_payment_type } = req.body;
    const user = await getOrCreateUser(req.tgUser);
    await prisma.user.update({
      where: { id: user.id },
      data: { refPaymentType: ref_payment_type },
    });
    res.json({ ref_payment_type });
  } catch (err) {
    next(err);
  }
});

router.patch('/language', async (req: AuthRequest, res, next) => {
  try {
    const { language_code } = req.body;
    const user = await getOrCreateUser(req.tgUser);
    await prisma.user.update({
      where: { id: user.id },
      data: { languageCode: language_code },
    });
    res.json({ language_code });
  } catch (err) {
    next(err);
  }
});

export default router;
