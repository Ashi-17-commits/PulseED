import React from 'react';

const intensityClass = (value) => {
  if (value >= 0.8) return 'bg-emerald-400/80 text-emerald-950';
  if (value >= 0.6) return 'bg-emerald-400/50 text-emerald-950';
  if (value >= 0.4) return 'bg-amber-400/50 text-amber-950';
  if (value >= 0.2) return 'bg-rose-400/50 text-rose-950';
  return 'bg-rose-500/80 text-rose-50';
};

export const HeatmapGrid = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-xs text-slate-500 dark:text-slate-400">
        No difficulty data yet. Once students start sharing, hotspots will glow here.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-[11px]">
      {data.map((item) => (
        <div
          key={item.label}
          className={[
            'rounded-2xl px-3 py-2 flex flex-col gap-1',
            'border border-white/5 backdrop-blur-xs',
            intensityClass(item.value)
          ].join(' ')}
        >
          <span className="font-medium truncate">{item.label}</span>
          <span className="opacity-80">
            {(item.value * 100).toFixed(0)}% difficulty pulse
          </span>
        </div>
      ))}
    </div>
  );
};

