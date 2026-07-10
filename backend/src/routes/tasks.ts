import { Router } from 'express';
import { prisma } from '../index';
import { AuthRequest } from '../middleware/auth';

const router = Router();

async function getUser(req: AuthRequest) {
  const user = await prisma.user.findUnique({
    where: { tgId: req.tgUser!.id },
    include: { birds: { include: { birdType: true } } },
  });
  if (!user) throw new Error('User not found');
  return user;
}

router.get('/', async (req: AuthRequest, res, next) => {
  try {
    const user = await getUser(req);
    const tasks = await prisma.task.findMany({
      orderBy: { sortOrder: 'asc' },
    });

    const userTasks = await prisma.userTask.findMany({
      where: { userId: user.id },
    });

    const result = tasks.map((task) => {
      const ut = userTasks.find((u) => u.taskId === task.id);
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        type: task.type,
        target: task.target,
        action_link: task.actionLink,
        path: task.path,
        reward: {
          amount_gold: task.rewardGold,
          amount_silver: task.rewardSilver,
        },
        progress: ut?.progress ?? 0,
        status: ut?.status ?? 'not_started',
      };
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/check', async (req: AuthRequest, res, next) => {
  try {
    const { task_id } = req.body;
    const user = await getUser(req);

    const task = await prisma.task.findUnique({ where: { id: task_id } });
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    let userTask = await prisma.userTask.findUnique({
      where: { userId_taskId: { userId: user.id, taskId: task_id } },
    });

    if (!userTask) {
      userTask = await prisma.userTask.create({
        data: { userId: user.id, taskId: task_id, progress: 0, status: 'in_progress' },
      });
    }

    let progress = userTask.progress;
    if (task.type === 'invite') {
      const count = await prisma.referral.count({ where: { userId: user.id } });
      progress = count;
    } else if (task.type === 'other') {
      if (task.id === 'upgrade_warehouse') progress = user.warehouseLevel;
      if (task.id === 'spin_wheel') progress = userTask.progress + 1;
    }

    const status = progress >= task.target ? 'completed' : 'in_progress';

    userTask = await prisma.userTask.update({
      where: { userId_taskId: { userId: user.id, taskId: task_id } },
      data: { progress, status },
    });

    res.json({
      id: task.id,
      title: task.title,
      description: task.description,
      type: task.type,
      target: task.target,
      action_link: task.actionLink,
      path: task.path,
      reward: { amount_gold: task.rewardGold, amount_silver: task.rewardSilver },
      progress: userTask.progress,
      status: userTask.status,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/claim', async (req: AuthRequest, res, next) => {
  try {
    const { task_id } = req.body;
    const user = await getUser(req);

    const userTask = await prisma.userTask.findUnique({
      where: { userId_taskId: { userId: user.id, taskId: task_id } },
      include: { task: true },
    });

    if (!userTask || userTask.status !== 'completed') {
      res.status(400).json({ error: 'Task not completed' });
      return;
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        amountGold: { increment: userTask.task.rewardGold },
        amountSilver: { increment: userTask.task.rewardSilver },
      },
    });

    await prisma.userTask.update({
      where: { userId_taskId: { userId: user.id, taskId: task_id } },
      data: { status: 'claimed' },
    });

    await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'task',
        amountGold: userTask.task.rewardGold,
        amountSilver: userTask.task.rewardSilver,
      },
    });

    res.json({ status: 'claimed' });
  } catch (err) {
    next(err);
  }
});

export default router;
