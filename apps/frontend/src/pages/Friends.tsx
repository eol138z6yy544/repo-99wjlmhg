import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Trophy, Users, Share2, Copy } from 'lucide-react';
import { useMyInfoQuery, useGetMyReferralsQuery } from '../store/api';

function formatNumber(n: number) {
  return Number(n).toLocaleString();
}

export default function Friends() {
  const { data: userData } = useMyInfoQuery();
  const [page] = useState(1);
  const { data } = useGetMyReferralsQuery(page);
  const user = userData?.user;
  const refLink = `https://t.me/myGramCatBot/meow?startapp=${user?.referCode || user?.tg || ''}`;

  const share = () => {
    const text = `Who let the CAT out?`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copy = () => {
    navigator.clipboard.writeText(refLink);
  };

  return (
    <div className="relative min-h-screen bg-gcat-bg pb-28">
      <div className="px-5 pt-8 text-center">
        <h1 className="text-2xl font-black text-gcat-txt">Invite Friends</h1>
        <p className="mt-1 text-sm font-semibold text-gcat-txt2">Earn GCAT for every friend</p>
      </div>

      <div className="mx-5 mt-6 rounded-3xl border border-gcat-stroke bg-white p-6 text-center shadow-sm">
        <p className="mb-2 text-sm font-bold text-gcat-txt2">Your invite link</p>
        <div className="mb-4 rounded-2xl bg-gcat-bg p-3 text-xs break-all text-gcat-txt">{refLink}</div>
        <div className="flex gap-3">
          <button
            onClick={share}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gcat-blue py-3 font-bold text-white"
          >
            <Share2 size={16} /> Share
          </button>
          <button
            onClick={copy}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gcat-bg py-3 font-bold text-gcat-blue"
          >
            <Copy size={16} /> Copy
          </button>
        </div>
      </div>

      <div className="mx-5 mt-6">
        <h2 className="mb-3 text-lg font-extrabold text-gcat-txt">Your friends</h2>
        {data?.referrals?.length === 0 && (
          <p className="text-center text-sm text-gcat-txt2">No friends yet. Share your link!</p>
        )}
        <div className="flex flex-col gap-3">
          {data?.referrals?.map((r: any, idx: number) => (
            <motion.div
              key={r.tg}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="flex items-center justify-between rounded-2xl border border-gcat-stroke bg-white p-4"
            >
              <div>
                <p className="font-bold text-gcat-txt">{r.name}</p>
                <p className="text-xs text-gcat-txt2">{r.username ? `@${r.username}` : r.tg}</p>
              </div>
              <p className="font-black text-gcat-blue">+{formatNumber(r.referReward)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gcat-stroke bg-white/90 px-6 py-3 backdrop-blur-md">
        <ul className="flex justify-around">
          <li>
            <Link to="/app/home" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted">
              <Home size={22} /> Home
            </Link>
          </li>
          <li>
            <Link to="/app/leader" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted">
              <Trophy size={22} /> Leaderboard
            </Link>
          </li>
          <li>
            <Link to="/app/friend" className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-blue">
              <Users size={22} /> Friends
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
