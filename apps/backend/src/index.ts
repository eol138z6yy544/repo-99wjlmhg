import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';
import axios from 'axios';
import TelegramBot from 'node-telegram-bot-api';
import { PORT, APP_URL, TELEGRAM_BOT_TOKEN, NODE_ENV } from './config';
import { prisma } from './prisma';
import { validateInitData, ParsedInitData } from './telegram';
import { signTaskToken, verifyTaskToken } from './jwt';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

const MILESTONES = [
  { count: 3, reward: 100 },
  { count: 10, reward: 250 },
  { count: 25, reward: 800 },
  { count: 50, reward: 2000 },
  { count: 75, reward: 3500 },
  { count: 100, reward: 5500 },
  { count: 200, reward: 13000 },
  { count: 300, reward: 22000 },
  { count: 500, reward: 40000 },
];

function rewardForStreakDay(day: number): number {
  const base = [50, 100, 150, 200, 250, 300, 500];
  if (day < 1) return 50;
  if (day > base.length) return base[base.length - 1];
  return base[day - 1];
}

interface AuthRequest extends Request {
  initData?: ParsedInitData;
  userId?: number;
}

async function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const auth = req.headers.authorization || (req.body && req.body.auth);
  if (!auth || typeof auth !== 'string') {
    res.status(401).json({ message: 'Invalid Telegram auth.' });
    return;
  }
  try {
    const parsed = validateInitData(auth);
    if (!parsed.user) {
      res.status(401).json({ message: 'Invalid Telegram auth.' });
      return;
    }
    req.initData = parsed;
    const user = await prisma.user.findUnique({ where: { tgId: String(parsed.user.id) } });
    req.userId = user?.id;
    next();
  } catch (err: any) {
    res.status(401).json({ message: err.message || 'Invalid Telegram auth.' });
  }
}

function serializeUser(user: any) {
  return {
    id: user.id,
    name: [user.firstName, user.lastName].filter(Boolean).join(' ') || user.name || 'Anonymous',
    username: user.username,
    tg: user.tgId,
    balance: user.balance,
    totalReward: user.totalReward,
    welcomebonus: user.welcomeBonus,
    referCode: user.referCode,
    referBy: user.referBy,
    totalReferred: user.totalReferred,
    initialTaskCompleted: user.initialTaskCompleted,
    isconnected: user.isConnected,
    totalreferrerbonus: user.totalReferrerBonus,
    totalSocialTaskCompleted: user.totalSocialTaskCompleted,
    approxage: user.approxAge,
    checkinStreak: user.checkinStreak,
    lastCheckinAt: user.lastCheckinAt?.toISOString() || null,
    ispremium: user.isPremium,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
    referReward: user.referReward,
  };
}

async function getOrCreateUser(req: AuthRequest) {
  const parsed = req.initData!;
  const tgUser = parsed.user!;
  const tgId = String(tgUser.id);

  let user = await prisma.user.findUnique({
    where: { tgId },
    include: { milestones: true, taskCompletions: true },
  });

  if (!user) {
    const startParam = parsed.startParam;
    let referBy: string | undefined;
    let referrer: any;
    if (startParam) {
      referrer = await prisma.user.findFirst({
        where: { OR: [{ referCode: startParam }, { tgId: startParam }, { username: startParam }] },
      });
      if (referrer) referBy = referrer.tgId;
    }

    const welcomeBonus = 100;
    const referReward = referrer ? 50 : 0;

    user = await prisma.user.create({
      data: {
        tgId,
        username: tgUser.username || null,
        firstName: tgUser.first_name || null,
        lastName: tgUser.last_name || null,
        name: [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ') || null,
        languageCode: tgUser.language_code || null,
        photoUrl: tgUser.photo_url || null,
        isPremium: !!tgUser.is_premium,
        allowsWriteToPm: !!tgUser.allows_write_to_pm,
        referCode: tgId,
        referBy: referBy || null,
        balance: welcomeBonus + referReward,
        totalReward: welcomeBonus + referReward,
        welcomeBonus,
        referReward,
      },
      include: { milestones: true, taskCompletions: true },
    });

    if (referrer) {
      await prisma.user.update({
        where: { id: referrer.id },
        data: {
          totalReferred: { increment: 1 },
          balance: { increment: 50 },
          totalReward: { increment: 50 },
          totalReferrerBonus: { increment: 50 },
        },
      });
      await prisma.referral.create({
        data: {
          referrerId: referrer.id,
          referredId: user.id,
          referReward: 50,
        },
      });
    }
  }

  return user;
}

app.post('/user', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const user = await getOrCreateUser(req);
    res.json({ msg: 'Logged', user: serializeUser(user) });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/user', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const user = await getOrCreateUser(req);
    res.json({ user: serializeUser(user) });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/user/referral-milestones', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  const claimed = new Set(user.milestones.map((m: any) => m.count));
  const progress = user.totalReferred;
  const list = MILESTONES.map((m) => ({
    count: m.count,
    reward: m.reward,
    progress: Math.min(progress, m.count),
    completed: progress >= m.count,
    claimed: claimed.has(m.count),
  }));
  res.json(list);
});

app.patch('/user/claim-milestone-reward', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  const claimed = new Set(user.milestones.map((m: any) => m.count));
  const available = MILESTONES.find((m) => !claimed.has(m.count) && user.totalReferred >= m.count);
  if (!available) {
    res.status(400).json({ message: 'No milestone available to claim.' });
    return;
  }
  const updated = await prisma.$transaction(async (tx) => {
    await tx.userMilestone.create({
      data: { userId: user.id, count: available.count, reward: available.reward },
    });
    return tx.user.update({
      where: { id: user.id },
      data: {
        balance: { increment: available.reward },
        totalReward: { increment: available.reward },
        referReward: { increment: available.reward },
      },
    });
  });
  res.json({ msg: 'Reward claimed!', reward: available.reward, count: available.count, user: serializeUser(updated) });
});

function checkinStatus(user: any) {
  const now = new Date();
  const noCheckin = !user.lastCheckinAt;
  if (noCheckin) {
    return {
      canClaim: true,
      currentStreak: 0,
      nextDay: 1,
      nextReward: rewardForStreakDay(1),
      streakBroken: false,
      secondsUntilNext: 0,
    };
  }
  const elapsedSec = Math.floor((now.getTime() - user.lastCheckinAt.getTime()) / 1000);
  const currentStreak = user.checkinStreak || 0;
  if (elapsedSec < 86400) {
    const nextDay = currentStreak + 1;
    return {
      canClaim: false,
      currentStreak,
      nextDay,
      nextReward: rewardForStreakDay(nextDay),
      streakBroken: false,
      secondsUntilNext: 86400 - elapsedSec,
    };
  }
  const broken = elapsedSec >= 48 * 3600;
  const nextDay = broken ? 1 : currentStreak + 1;
  return {
    canClaim: true,
    currentStreak,
    nextDay,
    nextReward: rewardForStreakDay(nextDay),
    streakBroken: broken,
    secondsUntilNext: 0,
  };
}

app.get('/user/checkin/status', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  res.json(checkinStatus(user));
});

app.post('/user/checkin/claim', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  const status = checkinStatus(user);
  if (!status.canClaim) {
    res.status(400).json({ message: 'Check-in not available yet.' });
    return;
  }
  const streakBroken = status.streakBroken;
  const streak = streakBroken ? 1 : status.currentStreak + 1;
  const reward = rewardForStreakDay(streak);
  const updated = await prisma.user.update({
    where: { id: user.id },
    data: {
      checkinStreak: streak,
      lastCheckinAt: new Date(),
      balance: { increment: reward },
      totalReward: { increment: reward },
    },
  });
  res.json({ msg: 'Checked in!', streak, reward, streakBroken });
});

app.get('/user/referrals', authMiddleware, async (req: AuthRequest, res: Response) => {
  const page = Math.max(1, Number(req.query.page) || 1);
  const pageSize = 20;
  const user = await getOrCreateUser(req);
  const [referrals, total] = await prisma.$transaction([
    prisma.referral.findMany({
      where: { referrerId: user.id },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: { referred: true },
      orderBy: { id: 'desc' },
    }),
    prisma.referral.count({ where: { referrerId: user.id } }),
  ]);
  const totalPages = Math.ceil(total / pageSize) || 1;
  res.json({
    page,
    totalPages,
    total,
    referrals: referrals.map((r: any) => ({
      name: [r.referred.firstName, r.referred.lastName].filter(Boolean).join(' ') || r.referred.name || 'Anonymous',
      username: r.referred.username,
      tg: r.referred.tgId,
      referReward: r.referReward,
      createdAt: r.referred.createdAt.toISOString(),
    })),
  });
});

app.get('/user/leaderboard', authMiddleware, async (req: AuthRequest, res: Response) => {
  const me = await getOrCreateUser(req);
  const [holders, top] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      orderBy: { totalReward: 'desc' },
      take: 100,
    }),
  ]);
  const rank =
    (await prisma.user.count({
      where: { totalReward: { gt: me.totalReward } },
    })) + 1;
  res.json({
    holders,
    top: top.map((u: any, idx: number) => ({
      name: [u.firstName, u.lastName].filter(Boolean).join(' ') || u.name || 'Anonymous',
      username: u.username,
      tg: u.tgId,
      totalReward: u.totalReward,
      rank: idx + 1,
    })),
    current: {
      name: [me.firstName, me.lastName].filter(Boolean).join(' ') || me.name || 'Anonymous',
      username: me.username,
      tg: me.tgId,
      totalReward: me.totalReward,
      rank,
    },
  });
});

app.get('/user/user-list', authMiddleware, async (req: AuthRequest, res: Response) => {
  const users = await prisma.user.findMany({
    take: 50,
    orderBy: { totalReward: 'desc' },
  });
  res.json(users.map(serializeUser));
});

app.get('/task', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  const tasks = await prisma.task.findMany({ where: { status: 'approved' }, orderBy: { sortOrder: 'asc' } });
  const completions = await prisma.taskCompletion.findMany({ where: { userId: user.id } });
  const completedKeys = new Set(completions.map((c: any) => c.task?.taskKey || String(c.taskId)));
  const completedIds = new Set(completions.map((c: any) => String(c.taskId)));

  const byType: Record<string, any[]> = { game: [], social: [], website: [], partner: [] };
  const initialTasks: any[] = [];
  let walletTask: any | null = null;
  let nameTask: any | null = null;

  for (const task of tasks) {
    const isCompleted = completedKeys.has(task.taskKey) || completedIds.has(String(task.id));
    const token = signTaskToken(user.tgId, task.type, task.taskKey || String(task.id));
    const base = {
      name: task.name,
      subtitle: task.subtitle,
      href: task.href,
      reward: task.reward,
      type: task.type,
      checkSubscription: task.checkSubscription,
      numberOfCompletion: task.numberOfCompletion,
      numberOfCompleted: task.numberOfCompleted,
      autherId: task.authorId,
      status: task.status,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      token,
      isCompleted,
    };
    if (task.type === 'initial') {
      initialTasks.push({ ...base, taskKey: task.taskKey });
    } else if (task.type === 'wallet') {
      walletTask = { ...base, taskKey: task.taskKey };
    } else if (task.type === 'name') {
      nameTask = { ...base, taskKey: task.taskKey };
    } else {
      byType[task.type] = byType[task.type] || [];
      byType[task.type].push(base);
    }
  }

  res.json({
    game: byType.game,
    social: byType.social,
    website: byType.website,
    partner: byType.partner,
    initialTasks,
    walletTask,
    nameTask,
    completedTaskIds: Array.from(completedKeys),
    initialTaskCompleted: initialTasks.some((t) => t.isCompleted),
    approxage: user.approxAge,
    ispremium: user.isPremium,
  });
});

app.post('/task/claim', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await getOrCreateUser(req);
  const { token, address } = req.body;
  if (!token || typeof token !== 'string') {
    res.status(400).json({ message: 'Token is required.' });
    return;
  }
  let payload;
  try {
    payload = verifyTaskToken(token);
  } catch {
    res.status(400).json({ message: 'Invalid or expired task token.' });
    return;
  }
  if (String(payload.uid) !== user.tgId) {
    res.status(403).json({ message: 'Token does not belong to this user.' });
    return;
  }

  const task = await prisma.task.findFirst({
    where: { OR: [{ taskKey: payload.sub }, { id: isNaN(Number(payload.sub)) ? undefined : Number(payload.sub) }] },
  });
  if (!task) {
    res.status(404).json({ message: 'Task not found.' });
    return;
  }

  const existing = await prisma.taskCompletion.findUnique({
    where: { userId_taskId: { userId: user.id, taskId: task.id } },
  });
  if (existing) {
    res.status(400).json({ message: 'Task already completed.' });
    return;
  }

  if (task.type === 'wallet') {
    if (!address) {
      res.status(400).json({ message: 'Wallet address is required.' });
      return;
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { walletAddress: address, isConnected: true },
    });
  }

  const completion = await prisma.$transaction(async (tx) => {
    const c = await tx.taskCompletion.create({
      data: {
        userId: user.id,
        taskId: task.id,
        reward: task.reward,
        type: task.type,
      },
      include: { task: true },
    });
    await tx.task.update({
      where: { id: task.id },
      data: { numberOfCompleted: { increment: 1 } },
    });
    const updateData: any = {
      balance: { increment: task.reward },
      totalReward: { increment: task.reward },
    };
    if (task.type === 'social') updateData.totalSocialTaskCompleted = { increment: 1 };
    if (task.type === 'initial') updateData.initialTaskCompleted = true;
    await tx.user.update({ where: { id: user.id }, data: updateData });
    return c;
  });

  res.json({
    id: completion.id,
    userId: user.tgId,
    actionId: payload.sub,
    reward: task.reward,
    type: task.type,
    createdAt: completion.createdAt.toISOString(),
  });
});

// Admin-ish endpoints used by the original bundle. Keep minimal.
app.post('/task/create', authMiddleware, async (req: AuthRequest, res: Response) => {
  const task = await prisma.task.create({ data: req.body });
  res.json(task);
});

app.patch('/task/change-status', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { id, status } = req.body;
  const task = await prisma.task.update({ where: { id: Number(id) }, data: { status } });
  res.json(task);
});

app.get('/tonconnect-manifest.json', (_req: Request, res: Response) => {
  res.json({
    url: APP_URL,
    name: 'GramCat Clone',
    iconUrl: `${APP_URL}/uploads/icon.png`,
  });
});

// Telegram bot media upload support.
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

bot.on('photo', async (msg) => {
  const chatId = msg.chat.id;
  const photo = msg.photo?.[msg.photo.length - 1];
  if (!photo) return;
  try {
    const file = await bot.getFile(photo.file_id);
    const url = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${file.file_path}`;
    const ext = path.extname(file.file_path || 'image.jpg') || '.jpg';
    const filename = `${crypto.randomUUID()}${ext}`;
    const localPath = path.join(UPLOAD_DIR, filename);
    const response = await axios({ url, responseType: 'stream' });
    const writer = fs.createWriteStream(localPath);
    response.data.pipe(writer);
    await new Promise<void>((resolve, reject) => {
      writer.on('finish', () => resolve());
      writer.on('error', reject);
    });
    const media = await prisma.media.create({
      data: {
        fileId: photo.file_id,
        filename,
        url: `${APP_URL}/uploads/${filename}`,
        type: 'image',
      },
    });
    bot.sendMessage(chatId, `Saved as ${media.url}`);
  } catch (err: any) {
    bot.sendMessage(chatId, `Upload failed: ${err.message}`);
  }
});

bot.on('document', async (msg) => {
  const chatId = msg.chat.id;
  const doc = msg.document;
  if (!doc) return;
  try {
    const file = await bot.getFile(doc.file_id);
    const url = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${file.file_path}`;
    const ext = path.extname(file.file_path || doc.file_name || '') || '';
    const filename = `${crypto.randomUUID()}${ext}`;
    const localPath = path.join(UPLOAD_DIR, filename);
    const response = await axios({ url, responseType: 'stream' });
    const writer = fs.createWriteStream(localPath);
    response.data.pipe(writer);
    await new Promise<void>((resolve, reject) => {
      writer.on('finish', () => resolve());
      writer.on('error', reject);
    });
    const type = doc.mime_type?.startsWith('video/') ? 'video' : 'doc';
    const media = await prisma.media.create({
      data: {
        fileId: doc.file_id,
        filename,
        url: `${APP_URL}/uploads/${filename}`,
        type,
      },
    });
    bot.sendMessage(chatId, `Saved as ${media.url}`);
  } catch (err: any) {
    bot.sendMessage(chatId, `Upload failed: ${err.message}`);
  }
});

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend listening on ${APP_URL}`);
});
