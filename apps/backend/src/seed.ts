import { prisma } from './prisma';

async function main() {
  const defaultTasks = [
    {
      name: 'Join GramCat Channel',
      subtitle: 'Telegram · Subscribe',
      href: 'https://t.me/myGramCat',
      reward: 0,
      type: 'initial',
      taskKey: '99999',
      status: 'approved',
      sortOrder: 0,
    },
    {
      name: 'Connect TON Wallet',
      subtitle: 'Wallet · One time',
      reward: 40,
      type: 'wallet',
      taskKey: '88888',
      status: 'approved',
      sortOrder: 1,
    },
    {
      name: 'Add 🐈 emoji in your name',
      subtitle: 'Telegram · Profile name',
      reward: 40,
      type: 'name',
      taskKey: '77777',
      status: 'approved',
      sortOrder: 2,
    },
    {
      name: 'Join Global Chat and comment #GRAMCAT',
      href: 'https://t.me/GramCatChat',
      reward: 50,
      type: 'social',
      taskKey: 'social_0',
      checkSubscription: false,
      numberOfCompletion: 100000,
      status: 'approved',
      sortOrder: 3,
    },
    {
      name: 'Follow GramCat on X',
      href: 'https://t.me/myGramCat',
      reward: 50,
      type: 'partner',
      taskKey: 'partner_0',
      checkSubscription: false,
      numberOfCompletion: 100000,
      status: 'approved',
      sortOrder: 4,
    },
    {
      name: 'Like Retweet and Quote on X',
      href: 'https://x.com/MyGramCat/status/2076576483473297618?s=20',
      reward: 30,
      type: 'partner',
      taskKey: 'partner_1',
      checkSubscription: false,
      numberOfCompletion: 100000,
      status: 'approved',
      sortOrder: 5,
    },
  ];

  for (const task of defaultTasks) {
    await prisma.task.upsert({
      where: { taskKey: task.taskKey },
      update: {},
      create: task as any,
    });
  }

  await prisma.config.upsert({
    where: { id: 'holders' },
    update: {},
    create: { id: 'holders', value: '0' },
  });

  console.log('Seeded default tasks and config.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
