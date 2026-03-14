import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  Bell,
  LayoutDashboard,
  Settings
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Student Feedback', icon: Activity },
  { to: '/faculty', label: 'Faculty Dashboard', icon: LayoutDashboard },
  { to: '/admin', label: 'Admin Analytics', icon: BarChart3 },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings, disabled: true }
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 rounded-2xl border border-white/10 bg-white/5 dark:bg-slate-900/60 backdrop-blur-xl shadow-glass p-4 text-sm text-slate-100">
      <div className="flex items-center gap-2 px-3 pb-4 border-b border-white/5">
        <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-sky-400 to-violet-500 flex items-center justify-center text-xs font-bold">
          PE
        </div>
        <div>
          <div className="font-semibold tracking-tight">PulseED</div>
          <div className="text-xs text-slate-400">Smart Campus Feedback</div>
        </div>
      </div>
      <nav className="mt-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          if (item.disabled) {
            return (
              <div
                key={item.to}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500/50 cursor-not-allowed"
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            );
          }
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200',
                  'hover:bg-white/10 hover:text-white',
                  isActive
                    ? 'bg-gradient-to-r from-sky-500/80 to-violet-500/80 text-white shadow-md'
                    : 'text-slate-300'
                ].join(' ')
              }
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto pt-4 border-t border-white/5 text-xs text-slate-500">
        PulseED · Anonymous, real-time campus pulse.
      </div>
    </aside>
  );
};

