import { Prisma } from '@prisma/client';

export type UserWithBirds = Prisma.UserGetPayload<{
  include: { birds: { include: { birdType: true } } };
}>;

export function formatBirds(user: UserWithBirds) {
  const result: Record<string, any> = {};
  for (const ub of user.birds) {
    const bt = ub.birdType;
    result[bt.id] = {
      id: bt.id,
      name: bt.name,
      cost: bt.cost,
      sell_cost: bt.sellCost,
      productivity_per_hour: bt.productivityPerHour,
      font_color: bt.fontColor,
      qty: ub.qty,
    };
  }
  return result;
}

export function formatUserResponse(user: UserWithBirds) {
  return {
    id: user.id,
    amount_gold: user.amountGold,
    amount_silver: user.amountSilver,
    amount_eggs: user.amountEggs,
    amount_roulette_tickets: user.amountRouletteTickets,
    total_productivity: user.totalProductivity,
    warehouse_level: user.warehouseLevel,
    ref_payment_type: user.refPaymentType,
    sell_eggs_gold_rate: user.sellEggsGoldRate,
    withdraw_credits: user.withdrawCredits,
    deposit_counter: user.depositCounter,
    withdraw_counter: user.withdrawCounter,
    last_collect_date: user.lastCollectDate.toISOString(),
    registration_date: user.registrationDate.toISOString(),
    is_banned: user.isBanned,
    ...formatBirds(user),
  };
}
