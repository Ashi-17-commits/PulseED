import React from 'react';

export const ChartCard = ({ title, subtitle, children, height = 'h-64' }) => {
  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-sky-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-sky-900/40 backdrop-blur-xl shadow-glass p-4 md:p-5 flex flex-col gap-3">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-slate-900 dark:text-slate-50">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      </header>
      <div className={['w-full', height].join(' ')}>
        {children}
      </div>
    </section>
  );
};

