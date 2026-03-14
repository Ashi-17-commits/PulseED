import React from 'react';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

export const StatCard = ({
  label,
  value,
  hint,
  trend = 0,
  icon: Icon
}) => {
  const positive = trend > 0;
  const negative = trend < 0;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-violet-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-violet-900/30 backdrop-blur-xl shadow-glass p-4 md:p-5 gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {value}
          </p>
        </div>
        {Icon && (
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-400/70 to-violet-500/70 flex items-center justify-center text-white">
            <Icon size={20} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-xs">
        <div
          className={[
            'inline-flex items-center gap-1 rounded-full px-2 py-0.5',
            positive
              ? 'bg-emerald-500/10 text-emerald-400'
              : negative
              ? 'bg-rose-500/10 text-rose-400'
              : 'bg-slate-500/10 text-slate-400'
          ].join(' ')}
        >
          {positive && <ArrowUpRight size={12} />}
          {negative && <ArrowDownRight size={12} />}
          {!positive && !negative && <Minus size={12} />}
          <span>{trend === 0 ? 'Stable' : `${Math.abs(trend)}%`}</span>
        </div>
        {hint && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
};

