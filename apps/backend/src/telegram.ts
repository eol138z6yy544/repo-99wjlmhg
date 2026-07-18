import crypto from 'crypto';
import { TELEGRAM_BOT_TOKEN } from './config';

export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface ParsedInitData {
  user?: TelegramUser;
  startParam?: string;
  chatInstance?: string;
  chatType?: string;
  authDate: number;
  raw: string;
}

function parseRawPairs(raw: string): { key: string; value: string }[] {
  return raw.split('&').map((part) => {
    const idx = part.indexOf('=');
    if (idx === -1) return { key: part, value: '' };
    return { key: part.slice(0, idx), value: part.slice(idx + 1) };
  });
}

export function validateInitData(initData: string): ParsedInitData {
  if (!initData || typeof initData !== 'string') {
    throw new Error('Invalid Telegram auth.');
  }

  let raw = initData;
  if (raw.includes('#')) raw = raw.split('#')[1];

  const pairs = parseRawPairs(raw);
  const hashPair = pairs.find((p) => p.key === 'hash');
  const signaturePair = pairs.find((p) => p.key === 'signature');

  if (!hashPair && !signaturePair) {
    throw new Error('Invalid Telegram auth.');
  }

  if (hashPair) {
    const dataPairs = pairs.filter((p) => p.key !== 'hash' && p.key !== 'signature');
    dataPairs.sort((a, b) => a.key.localeCompare(b.key));
    const dataCheckString = dataPairs.map((p) => `${p.key}=${p.value}`).join('\n');

    const secretKey = crypto
      .createHmac('sha256', 'WebAppData')
      .update(TELEGRAM_BOT_TOKEN)
      .digest();

    const computedHash = crypto
      .createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    if (computedHash !== hashPair.value) {
      throw new Error('Invalid Telegram auth.');
    }
  }

  const authDate = Number(pairs.find((p) => p.key === 'auth_date')?.value);
  if (Number.isNaN(authDate)) {
    throw new Error('Invalid Telegram auth.');
  }

  const now = Math.floor(Date.now() / 1000);
  if (now - authDate > 24 * 60 * 60) {
    console.warn('initData is older than 24h:', now - authDate);
  }

  const getRaw = (key: string) => pairs.find((p) => p.key === key)?.value;

  let user: TelegramUser | undefined;
  const userRaw = getRaw('user');
  if (userRaw) {
    try {
      user = JSON.parse(decodeURIComponent(userRaw));
    } catch {
      throw new Error('Invalid Telegram auth.');
    }
  }

  return {
    user,
    startParam: decodeValue(getRaw('start_param') || getRaw('startapp')),
    chatInstance: decodeValue(getRaw('chat_instance')),
    chatType: decodeValue(getRaw('chat_type')),
    authDate,
    raw,
  };
}

function decodeValue(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
