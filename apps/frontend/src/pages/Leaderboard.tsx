import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Trophy, Users, Medal } from 'lucide-react';
import { useGetLeaderboardQuery } from '../store/api';

function formatNumber(n: number) {
  return Number(n).toLocaleString();
}

export default function Leaderboard() {
  const { data } = useGetLeaderboardQuery();
  const top = data?.top || [];
  const current = data?.current;
  const holders = data?.holders || 0;

  const formatHolders = (c: number) =>
    c >= 1_000_000 ? `${(c / 1_000_000).toFixed(1)}M` : c >= 1_000 ? `${(c / 1_000).toFixed(1)}K` : String(c);

  return (
    <div className="relative min-h-screen bg-gcat-bg pb-28">
      <div className="px-5 pt-8 text-center">
        <h1 className="text-2xl font-black text-gcat-txt">Telegram Wall of Fame</h1>
        <p className="mt-1 text-sm font-semibold text-gcat-txt2">{formatHolders(holders)} GCAT holders</p>
      </div>

      {current && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-6 flex items-center gap-4 rounded-2xl border border-gcat-stroke bg-white p-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gcat-bg text-xl font-black text-gcat-blue">
            #{current.rank}
          </div>
          <div className="flex-1">
            <p className="font-bold text-gcat-txt">{current.name}</p>
            <p className="text-xs text-gcat-txt2">{current.totalReward >= 0 ? 'You' : ''}</p>
          </div>
          <p className="font-black text-gcat-txt">{formatNumber(current.totalReward)}</p>
        </motion.div>
      )}

      <div className="mx-5 mt-4 flex flex-col gap-3">
        {top.map((u: any, idx: number) => (
          <motion.div
            key={u.tg}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            className="flex items-center gap-4 rounded-2xl border border-gcat-stroke bg-white p-4"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                idx === 0 ? 'bg-yellow-100 text-yellow-700' : idx === 1 ? 'bg-slate-100 text-slate-700' : idx === 2 ? 'bg-orange-100 text-orange-700' : 'bg-gcat-bg text-gcat-txt2'
              }`}
            >
              {idx < 3 ? <Medal size={18} /> : u.rank}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gcat-txt">{u.name}</p>
              <p className="text-xs text-gcat-txt2">{u.username || ''}</p>
            </div>
            <p className="text-sm font-black text-gcat-txt">{formatNumber(u.totalReward)}</p>
          </motion.div>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gcat-stroke bg-white/90 px-6 py-3 backdrop-blur-md">
        <ul className="flex justify-around">
          <li>
            <Link to="/app/home" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted">
              <Home size={22} /> Home
            </Link>
          </li>
          <li>
            <Link to="/app/leader" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-blue">
              <Trophy size={22} /> Leaderboard
            </Link>
          </li>
          <li>
            <Link to="/app/friend" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted">
              <Users size={22} /> Friends
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
