import { prisma } from './prisma';
import { UserWithBirds } from './formatUser';

export async function computeAndUpdateEggs(user: UserWithBirds): Promise<UserWithBirds> {
  const now = new Date();
  const elapsedMs = now.getTime() - user.lastCollectDate.getTime();
  if (elapsedMs <= 0) {
    return user;
  }

  const warehouse = await prisma.warehouseLevel.findUnique({
    where: { level: user.warehouseLevel },
  });
  const capacity = warehouse?.capacity ?? 0;

  const produced = Math.floor(user.totalProductivity * (elapsedMs / 3600000));
  const newEggs = Math.min(user.amountEggs + produced, capacity);

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { amountEggs: newEggs, lastCollectDate: now },
    include: { birds: { include: { birdType: true } } },
  });

  return updated;
}
