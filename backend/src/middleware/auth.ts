import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

export interface AuthRequest extends Request {
  tgUser?: TelegramUser;
  initData?: string;
}

export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
  allows_write_to_pm?: boolean;
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

function parseInitData(initData: string): Record<string, string> {
  const params = new URLSearchParams(initData);
  const data: Record<string, string> = {};
  for (const [key, value] of params) {
    data[key] = value;
  }
  return data;
}

function validateTelegramInitData(initData: string): TelegramUser | null {
  if (!BOT_TOKEN) {
    console.warn('TELEGRAM_BOT_TOKEN not set, skipping initData validation');
    const parsed = parseInitData(initData);
    if (parsed.user) {
      try {
        return JSON.parse(parsed.user);
      } catch {
        return null;
      }
    }
    return null;
  }

  const parsed = parseInitData(initData);
  const hash = parsed.hash;
  delete parsed.hash;

  const dataCheckString = Object.keys(parsed)
    .sort()
    .map((key) => `${key}=${parsed[key]}`)
    .join('\n');

  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
  const computedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  if (computedHash !== hash) {
    return null;
  }

  if (parsed.user) {
    try {
      return JSON.parse(parsed.user);
    } catch {
      return null;
    }
  }

  return null;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('tma ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const initData = authHeader.slice(4);
  const user = validateTelegramInitData(initData);
  if (!user) {
    res.status(401).json({ error: 'Invalid Telegram init data' });
    return;
  }

  req.tgUser = user;
  req.initData = initData;
  next();
}
