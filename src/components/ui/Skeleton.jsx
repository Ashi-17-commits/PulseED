import React from 'react';

export const Skeleton = ({ className = '' }) => (
  <div
    className={[
      'animate-pulse rounded-xl bg-slate-200/60 dark:bg-slate-700/60',
      className
    ].join(' ')}
  />
);

