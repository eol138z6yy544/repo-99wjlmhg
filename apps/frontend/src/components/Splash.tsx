import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppOpenMutation } from '../store/api';
import { useAuth } from '../contexts/AuthContext';

export default function Splash() {
  const navigate = useNavigate();
  const { initData } = useAuth();
  const [appOpen, { status, error }] = useAppOpenMutation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!initData) return;
    appOpen(initData);
  }, [initData, appOpen]);

  useEffect(() => {
    if (status === 'pending') {
      const id = setInterval(() => {
        setProgress((p) => (p < 88 ? p + 1.2 : p));
      }, 50);
      return () => clearInterval(id);
    }
    if (status === 'fulfilled') {
      setProgress(100);
      const id = setTimeout(() => navigate('/app/home', { replace: true }), 700);
      return () => clearTimeout(id);
    }
    if (status === 'rejected') {
      setProgress(100);
    }
  }, [status, navigate]);

  if (!initData) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gcat-bg px-8 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gcat-txt">Open in Telegram</h1>
        <p className="text-gcat-txt2">This Mini App must be launched from Telegram.</p>
      </div>
    );
  }

  return (
    <div className="relative flex h-screen flex-col items-center justify-end overflow-hidden px-10 pb-24 text-center">
      <img
        src="/splash-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 mb-8"
      >
        <img
          src="/cat-logo.png"
          alt="GramCat"
          className="h-28 w-28 rounded-full border-4 border-white bg-white shadow-xl"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 mb-3 text-4xl font-black text-gcat-txt"
      >
        GramCat
      </motion.h1>
      <p className="z-10 mb-10 text-sm font-medium text-gcat-txt2">Earn free GCAT</p>

      <div className="z-10 w-full max-w-xs">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/50">
          <motion.div
            className="h-full rounded-full bg-gcat-blue"
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.4 }}
          />
        </div>
        {status === 'rejected' && (
          <p className="mt-3 text-sm text-red-500">
            {(error as any)?.data?.message || 'Connection error'}
          </p>
        )}
      </div>
    </div>
  );
}
