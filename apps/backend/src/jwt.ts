import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export interface TaskTokenPayload {
  uid: string;
  action: string;
  sub: string;
  iat: number;
  exp: number;
}

const TOKEN_TTL_SECONDS = 3600;

export function signTaskToken(userId: string | number, action: string, sub: string | number): string {
  return jwt.sign({ uid: String(userId), action, sub: String(sub) }, JWT_SECRET, {
    expiresIn: TOKEN_TTL_SECONDS,
  });
}

export function verifyTaskToken(token: string): TaskTokenPayload {
  return jwt.verify(token, JWT_SECRET) as TaskTokenPayload;
}
