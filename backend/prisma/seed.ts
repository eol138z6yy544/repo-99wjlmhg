import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const birds = [
    { id: 'birds_a', name: 'Baby', cost: 1000, sellCost: 700, productivityPerHour: 42, fontColor: 'rgba(253, 217, 10, 1)', sortOrder: 0 },
    { id: 'birds_b', name: 'Green', cost: 5000, sellCost: 3600, productivityPerHour: 221, fontColor: 'rgba(144, 215, 46, 1)', sortOrder: 1 },
    { id: 'birds_c', name: 'Yellow', cost: 25000, sellCost: 18500, productivityPerHour: 1160, fontColor: 'rgba(252, 189, 8, 1)', sortOrder: 2 },
    { id: 'birds_d', name: 'Blue', cost: 125000, sellCost: 95000, productivityPerHour: 6091, fontColor: 'rgba(51, 158, 233, 1)', sortOrder: 3 },
    { id: 'birds_e', name: 'Red', cost: 625000, sellCost: 487500, productivityPerHour: 31979, fontColor: 'rgba(241, 82, 64, 1)', sortOrder: 4 },
  ];

  for (const bird of birds) {
    await prisma.birdType.upsert({
      where: { id: bird.id },
      update: bird,
      create: bird,
    });
  }

  const warehouseLevels = [
    { level: 1, capacity: 2000000, cost: 0 },
    { level: 2, capacity: 4000000, cost: 200000 },
    { level: 3, capacity: 8000000, cost: 500000 },
    { level: 4, capacity: 16000000, cost: 1250000 },
    { level: 5, capacity: 32000000, cost: 3500000 },
  ];

  for (const level of warehouseLevels) {
    await prisma.warehouseLevel.upsert({
      where: { level: level.level },
      update: level,
      create: level,
    });
  }

  const tasks = [
    { id: 'invite_1', title: 'Invite 1 Friend', description: 'Invite 1 Friend', type: 'invite', target: 1, rewardGold: 0, rewardSilver: 500, sortOrder: 0 },
    { id: 'invite_3', title: 'Invite 3 Friends', description: 'Invite 3 Friends', type: 'invite', target: 3, rewardGold: 0, rewardSilver: 1500, sortOrder: 1 },
    { id: 'invite_10', title: 'Invite 10 Friends', description: 'Invite 10 Friends', type: 'invite', target: 10, rewardGold: 0, rewardSilver: 4000, sortOrder: 2 },
    { id: 'invite_50', title: 'Invite 50 Friends', description: 'Invite 50 Friends', type: 'invite', target: 50, rewardGold: 0, rewardSilver: 12000, sortOrder: 3 },
    { id: 'invite_100', title: 'Invite 100 Friends', description: 'Invite 100 Friends', type: 'invite', target: 100, rewardGold: 0, rewardSilver: 30000, sortOrder: 4 },
    { id: 'upgrade_warehouse', title: 'Upgrade the warehouse', description: 'Upgrade the warehouse', type: 'other', target: 2, rewardGold: 0, rewardSilver: 25000, sortOrder: 5, path: '/warehouse' },
    { id: 'spin_wheel', title: 'Spin the wheel', description: 'Spin the wheel', type: 'other', target: 1, rewardGold: 0, rewardSilver: 1000, sortOrder: 6 },
  ];

  for (const task of tasks) {
    await prisma.task.upsert({
      where: { id: task.id },
      update: task,
      create: task,
    });
  }

  const withdrawRates = [
    { currencyCode: 'TON', network: 'TON', imageUrl: '/static/images/icons/TONTON.webp', rateUsd: 1.6749321, feeUsd: 0, minimumAmountGold: 1, minimumAmountUsd: 1.6749322e-9 },
  ];

  for (const rate of withdrawRates) {
    await prisma.withdrawRate.upsert({
      where: { currencyCode: rate.currencyCode },
      update: rate,
      create: rate,
    });
  }

  const contest = await prisma.contest.findFirst({ where: { isActive: true } });
  if (!contest) {
    const now = new Date();
    const end = new Date();
    end.setDate(now.getDate() + 30);
    await prisma.contest.create({
      data: { startDate: now, endDate: end, prizePool: 10000, isActive: true },
    });
  }

  const bonusPacks = [
    { priceUsd: 0.99, oldPriceUsd: 1.99, amountSilver: 10000, amountRouletteTickets: 1, birdsA: 1, birdsB: 0, birdsC: 0, birdsD: 0, birdsE: 0, endDate: new Date('2030-01-01') },
    { priceUsd: 4.99, oldPriceUsd: 9.99, amountSilver: 60000, amountRouletteTickets: 5, birdsA: 5, birdsB: 1, birdsC: 0, birdsD: 0, birdsE: 0, endDate: new Date('2030-01-01') },
    { priceUsd: 9.99, oldPriceUsd: 19.99, amountSilver: 150000, amountRouletteTickets: 12, birdsA: 12, birdsB: 3, birdsC: 1, birdsD: 0, birdsE: 0, endDate: new Date('2030-01-01') },
  ];

  for (const [index, pack] of bonusPacks.entries()) {
    await prisma.bonusPack.upsert({
      where: { id: index + 1 },
      update: pack,
      create: { id: index + 1, ...pack },
    });
  }

  console.log('Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
