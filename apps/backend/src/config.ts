import dotenv from 'dotenv';
dotenv.config({ override: true });

export const PORT = Number(process.env.PORT || 3001);
export const DATABASE_URL = process.env.DATABASE_URL!;
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;
export const NODE_ENV = process.env.NODE_ENV || 'development';
