import React from 'react';
import { useLocation } from 'react-router-dom';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const titleForPath = (pathname) => {
  if (pathname === '/faculty') return 'Faculty Dashboard';
  if (pathname === '/admin') return 'Admin Analytics';
  if (pathname === '/alerts') return 'Alerts';
  return 'Student Feedback';
};

export const Topbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="flex items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {titleForPath(location.pathname)}
        </h1>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
          Anonymous, real-time academic pulse for your campus.
        </p>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? <SunMedium size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
};

