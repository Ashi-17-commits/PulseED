import React from 'react';

export const FeedbackButton = ({ label, emoji, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex-1 min-w-[6rem] px-3 py-3 rounded-2xl border text-sm font-medium',
        'flex items-center justify-center gap-2',
        'transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5',
        active
          ? 'border-transparent bg-gradient-to-r from-sky-500 to-violet-500 text-white'
          : 'border-white/10 bg-white/10 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 hover:bg-white/20'
      ].join(' ')}
    >
      <span className="text-lg">{emoji}</span>
      <span>{label}</span>
    </button>
  );
};

