import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { prisma } from './lib/prisma';
export { prisma };
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import accountRoutes from './routes/account';
import warehouseRoutes from './routes/warehouse';
import tasksRoutes from './routes/tasks';
import paymentsRoutes from './routes/payments';
import contestRoutes from './routes/contest';
import rouletteRoutes from './routes/roulette';
import bonusRoutes from './routes/bonus';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://cdn.jsdelivr.net", "https://unpkg.com"],
        frameAncestors: ["'self'"],
      },
    },
  }),
);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// API v1
app.use('/api/v1/users/account', authMiddleware, accountRoutes);
app.use('/api/v1/warehouse', authMiddleware, warehouseRoutes);
app.use('/api/v1/users/tasks', authMiddleware, tasksRoutes);
app.use('/api/v1/payments', authMiddleware, paymentsRoutes);
app.use('/api/v1/contest', authMiddleware, contestRoutes);
app.use('/api/v1/users', authMiddleware, rouletteRoutes);
app.use('/api/v1/bonus_packs', authMiddleware, bonusRoutes);

// Serve static frontend
app.use(express.static('../frontend/public'));
app.get('*', (_req, res) => {
  res.sendFile('index.html', { root: '../frontend/public' });
});

app.use(errorHandler);

async function main() {
  await prisma.$connect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
