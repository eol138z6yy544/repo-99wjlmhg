-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "tg_id" BIGINT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "username" TEXT,
    "language_code" TEXT,
    "photo_url" TEXT,
    "allows_write_to_pm" BOOLEAN NOT NULL DEFAULT false,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "amount_gold" INTEGER NOT NULL DEFAULT 0,
    "amount_silver" INTEGER NOT NULL DEFAULT 1000,
    "amount_eggs" INTEGER NOT NULL DEFAULT 0,
    "amount_roulette_tickets" INTEGER NOT NULL DEFAULT 0,
    "total_productivity" INTEGER NOT NULL DEFAULT 0,
    "warehouse_level" INTEGER NOT NULL DEFAULT 1,
    "ref_payment_type" TEXT NOT NULL DEFAULT 'silver',
    "sell_eggs_gold_rate" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "withdraw_credits" INTEGER NOT NULL DEFAULT 2,
    "deposit_counter" INTEGER NOT NULL DEFAULT 0,
    "withdraw_counter" INTEGER NOT NULL DEFAULT 0,
    "last_collect_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referral_code" TEXT,
    "referred_by" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bird_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "sell_cost" INTEGER NOT NULL,
    "productivity_per_hour" INTEGER NOT NULL,
    "font_color" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "bird_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_birds" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bird_type_id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_birds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouse_levels" (
    "level" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "warehouse_levels_pkey" PRIMARY KEY ("level")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "action_link" TEXT,
    "path" TEXT,
    "reward_gold" INTEGER NOT NULL DEFAULT 0,
    "reward_silver" INTEGER NOT NULL DEFAULT 0,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_tasks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "task_id" TEXT NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'not_started',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "amount_gold" INTEGER NOT NULL DEFAULT 0,
    "amount_silver" INTEGER NOT NULL DEFAULT 0,
    "amount_eggs" INTEGER NOT NULL DEFAULT 0,
    "amount_ton" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency_code" TEXT,
    "status" TEXT NOT NULL DEFAULT 'completed',
    "meta" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawals" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount_gold" INTEGER NOT NULL,
    "amount_ton" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "tag" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "tx_hash" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "withdrawals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deposits" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount_ton" DOUBLE PRECISION NOT NULL,
    "amount_gold" INTEGER NOT NULL,
    "amount_silver" INTEGER NOT NULL,
    "tx_hash" TEXT,
    "comment" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bonus_packs" (
    "id" SERIAL NOT NULL,
    "price_usd" DOUBLE PRECISION NOT NULL,
    "old_price_usd" DOUBLE PRECISION,
    "amount_silver" INTEGER NOT NULL,
    "amount_roulette_tickets" INTEGER NOT NULL,
    "birds_a" INTEGER NOT NULL,
    "birds_b" INTEGER NOT NULL,
    "birds_c" INTEGER NOT NULL,
    "birds_d" INTEGER NOT NULL,
    "birds_e" INTEGER NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bonus_packs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contests" (
    "id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "prize_pool" DOUBLE PRECISION NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referrals" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "referral_id" INTEGER NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "reward_silver" INTEGER NOT NULL DEFAULT 0,
    "reward_gold" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "silver_roulette_spins" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount_silver" INTEGER NOT NULL,
    "prize" TEXT NOT NULL,
    "amount_won" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "silver_roulette_spins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "birds_roulette_spins" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount_silver" INTEGER NOT NULL,
    "prize_type" TEXT NOT NULL,
    "prize_amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "birds_roulette_spins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdraw_rates" (
    "id" SERIAL NOT NULL,
    "currency_code" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "image_url" TEXT,
    "rate_usd" DOUBLE PRECISION NOT NULL,
    "fee_usd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "minimum_amount_gold" INTEGER NOT NULL,
    "minimum_amount_usd" DOUBLE PRECISION NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "withdraw_rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "config_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_tg_id_key" ON "users"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_referral_code_key" ON "users"("referral_code");

-- CreateIndex
CREATE UNIQUE INDEX "user_birds_user_id_bird_type_id_key" ON "user_birds"("user_id", "bird_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_tasks_user_id_task_id_key" ON "user_tasks"("user_id", "task_id");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_user_id_referral_id_key" ON "referrals"("user_id", "referral_id");

-- CreateIndex
CREATE UNIQUE INDEX "withdraw_rates_currency_code_key" ON "withdraw_rates"("currency_code");

-- AddForeignKey
ALTER TABLE "user_birds" ADD CONSTRAINT "user_birds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_birds" ADD CONSTRAINT "user_birds_bird_type_id_fkey" FOREIGN KEY ("bird_type_id") REFERENCES "bird_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tasks" ADD CONSTRAINT "user_tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tasks" ADD CONSTRAINT "user_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawals" ADD CONSTRAINT "withdrawals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deposits" ADD CONSTRAINT "deposits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "silver_roulette_spins" ADD CONSTRAINT "silver_roulette_spins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "birds_roulette_spins" ADD CONSTRAINT "birds_roulette_spins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
