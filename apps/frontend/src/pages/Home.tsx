import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, Trophy, Users, Copy, Share2, MessageCircle, Wallet } from 'lucide-react';
import { useTonWallet, TonConnectButton } from '@tonconnect/ui-react';
import {
  useMyInfoQuery,
  useGetTaskQuery,
  useClaimTaskMutation,
  useGetCheckinStatusQuery,
  useClaimCheckinMutation,
  useGetReferralMilestonesQuery,
  useClaimMilestoneMutation,
} from '../store/api';

const GCAT = 'GCAT';

function formatNumber(n: number) {
  return Number(n).toLocaleString();
}

function TaskButton({
  label,
  onClick,
  loading,
  variant = 'primary',
}: {
  label: string;
  onClick?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'outline' | 'done';
}) {
  const base = 'rounded-full px-4 py-2 text-sm font-bold transition active:scale-95';
  const styles =
    variant === 'done'
      ? 'bg-green-100 text-green-700'
      : variant === 'outline'
        ? 'border border-gcat-stroke bg-white text-gcat-blue'
        : 'bg-gcat-blue text-white shadow-lg shadow-blue-500/30';
  return (
    <button onClick={onClick} disabled={loading} className={`${base} ${styles}`}>
      {loading ? '...' : label}
    </button>
  );
}

function TaskItem({
  task,
  onSuccess,
}: {
  task: any;
  onSuccess: (reward: number) => void;
}) {
  const wallet = useTonWallet();
  const [claimTask, { isLoading }] = useClaimTaskMutation();
  const [stage, setStage] = useState<'start' | 'check' | 'done'>('start');

  useEffect(() => {
    if (task.isCompleted || task.completed) setStage('done');
  }, [task.isCompleted, task.completed]);

  const handleAction = async () => {
    if (stage === 'start') {
      if (task.href) {
        window.open(task.href, '_blank');
        setTimeout(() => setStage('check'), 400);
      } else if (task.type === 'wallet') {
        // connect handled by TonConnectButton elsewhere; this button claims
      } else {
        setStage('check');
      }
      return;
    }
    try {
      const address = task.type === 'wallet' ? wallet?.account.address : undefined;
      const res = await claimTask({ token: task.token, address }).unwrap();
      setStage('done');
      onSuccess(res.reward);
    } catch (e: any) {
      alert(e?.data?.message || 'Failed to claim');
    }
  };

  const label =
    stage === 'done' ? 'Done' : stage === 'check' ? 'Claim' : task.type === 'wallet' ? 'Connect' : 'Start';

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gcat-stroke bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gcat-bg text-xl">
          {task.type === 'wallet' ? <Wallet size={20} className="text-gcat-blue" /> : <img src="/cat-logo.png" alt="" className="h-7 w-7" />}
        </div>
        <div>
          <p className="text-sm font-bold text-gcat-txt">{task.name}</p>
          <p className="text-xs font-semibold text-gcat-blue">+{formatNumber(task.reward)} {GCAT}</p>
        </div>
      </div>
      <TaskButton
        label={label}
        onClick={handleAction}
        loading={isLoading}
        variant={stage === 'done' ? 'done' : stage === 'check' ? 'primary' : 'outline'}
      />
    </div>
  );
}

function CheckIn() {
  const { data: status } = useGetCheckinStatusQuery();
  const [claimCheckin, { isLoading }] = useClaimCheckinMutation();
  const [done, setDone] = useState(false);

  if (!status) return null;

  const handleClaim = async () => {
    try {
      await claimCheckin().unwrap();
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch (e: any) {
      alert(e?.data?.message || 'Claim failed');
    }
  };

  return (
    <AnimatePresence>
      {status.canClaim && !done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/40 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-xs rounded-3xl bg-gcat-surf p-6 text-center shadow-2xl"
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/cat-logo.png"
                alt="GramCat"
                className="h-20 w-20 rounded-full border-4 border-white bg-white shadow-inner"
              />
            </div>
            <p className="mb-1 text-sm font-semibold text-gcat-txt2">Day {status.nextDay}</p>
            <h3 className="mb-4 text-3xl font-black text-gcat-txt">
              +{formatNumber(status.nextReward)} {GCAT}
            </h3>
            <button
              onClick={handleClaim}
              disabled={isLoading}
              className="w-full rounded-full bg-gcat-blue py-3.5 text-base font-extrabold text-white shadow-lg shadow-blue-500/40 active:scale-95"
            >
              {isLoading ? 'Claiming...' : `Claim +${formatNumber(status.nextReward)} ${GCAT}`}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const { data: userData } = useMyInfoQuery();
  const { data: taskData, refetch: refetchTasks } = useGetTaskQuery();
  const { data: milestones } = useGetReferralMilestonesQuery();
  const [claimMilestone, { isLoading: claimingMilestone }] = useClaimMilestoneMutation();
  const user = userData?.user;

  const [showScore, setShowScore] = useState(false);

  const allTasks = [
    ...(taskData?.walletTask ? [taskData.walletTask] : []),
    ...(taskData?.nameTask ? [taskData.nameTask] : []),
    ...(taskData?.social || []),
    ...(taskData?.partner || []),
    ...(taskData?.website || []),
    ...(taskData?.game || []),
  ];

  const completedCount =
    allTasks.filter((t) => t.isCompleted || t.completed).length +
    (user?.isconnected ? 1 : 0) +
    (taskData?.nameTask?.isCompleted ? 1 : 0);

  const refLink = `https://t.me/myGramCatBot/meow?startapp=${user?.referCode || user?.tg || ''}`;

  const copyRef = () => {
    navigator.clipboard.writeText(refLink);
  };

  const handleTaskSuccess = () => {
    refetchTasks();
  };

  const handleClaimMilestone = async () => {
    try {
      await claimMilestone().unwrap();
    } catch (e: any) {
      alert(e?.data?.message || 'No milestone available');
    }
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gcat-bg text-gcat-txt2">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gcat-bg pb-28">
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'rgba(27,110,243,0.10)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(143,212,240,0.14)' }}
      />

      <header className="relative z-10 flex items-center justify-between px-5 pt-5">
        <button
          onClick={() => setShowScore(true)}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gcat-txt shadow-sm"
        >
          <Share2 size={16} />
          Your Score
        </button>
        <div className="scale-90 origin-right">
          <TonConnectButton />
        </div>
      </header>

      <section className="relative z-10 mt-6 flex flex-col items-center text-center">
        <motion.img
          src="/grt-token.png"
          alt="GCAT"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-3 h-20 w-20"
        />
        <h2 className="text-4xl font-black text-gcat-txt">
          {formatNumber(user.balance)} {GCAT}
        </h2>
      </section>

      <section className="relative z-10 mt-8 px-5">
        <div className="rounded-3xl border border-gcat-stroke bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gcat-txt2">Share your OG Status</p>
              <p className="text-sm font-bold text-gcat-txt">In Telegram stories</p>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-gcat-bg px-4 py-2 text-sm font-bold text-gcat-blue">
              <Share2 size={14} /> Share
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gcat-txt">Join the Community</p>
              <p className="text-xs text-gcat-txt2">News, drops and updates</p>
            </div>
            <a
              href="https://t.me/myGramCat"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gcat-bg px-4 py-2 text-sm font-bold text-gcat-blue"
            >
              <MessageCircle size={14} /> Join
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-6 px-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-gcat-txt">Tasks</h3>
          <div className="rounded-full bg-gcat-bg px-3 py-1 text-xs font-bold text-gcat-blue">
            {completedCount}/{allTasks.length + 2}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {allTasks.map((task, idx) => (
            <motion.div
              key={task.token || task.taskKey || idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <TaskItem task={task} onSuccess={handleTaskSuccess} />
            </motion.div>
          ))}
          {milestones?.map((m: any, idx: number) => (
            <motion.div
              key={m.count}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (allTasks.length + idx) * 0.05 }}
              className="flex items-center justify-between rounded-2xl border border-gcat-stroke bg-white p-4"
            >
              <div>
                <p className="text-sm font-bold text-gcat-txt">
                  Invite {m.count} friends to GramCat
                </p>
                <p className="text-xs font-semibold text-gcat-blue">
                  +{formatNumber(m.reward)} {GCAT}
                </p>
                <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-gcat-bg">
                  <div
                    className="h-full rounded-full bg-gcat-blue"
                    style={{ width: `${Math.min(100, (m.progress / m.count) * 100)}%` }}
                  />
                </div>
              </div>
              {m.claimed ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Done</span>
              ) : m.completed ? (
                <TaskButton label="Claim" onClick={handleClaimMilestone} loading={claimingMilestone} />
              ) : (
                <span className="text-xs font-bold text-gcat-muted">
                  {m.progress}/{m.count}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gcat-stroke bg-white/90 px-6 py-3 backdrop-blur-md">
        <ul className="flex justify-around">
          <li>
            <Link
              to="/app/home"
              className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-blue"
            >
              <HomeIcon size={22} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/app/leader"
              className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted"
            >
              <Trophy size={22} /> Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/app/friend"
              className="flex flex-col items-center gap-1 text-xs font-bold text-gcat-muted"
            >
              <Users size={22} /> Friends
            </Link>
          </li>
        </ul>
      </nav>

      <CheckIn />

      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowScore(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
            >
              <h3 className="mb-2 text-2xl font-black text-gcat-txt">Your Stats</h3>
              <p className="mb-4 text-sm text-gcat-txt2">Share your invite link</p>
              <div className="mb-4 rounded-2xl bg-gcat-bg p-3 text-xs break-all text-gcat-txt2">{refLink}</div>
              <button
                onClick={copyRef}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-gcat-blue py-3 font-bold text-white"
              >
                <Copy size={16} /> Copy Link
              </button>
              <button
                onClick={() => setShowScore(false)}
                className="w-full rounded-full bg-gcat-surf py-3 font-bold text-gcat-txt2"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
