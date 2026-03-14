import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { ChartCard } from '../components/ui/ChartCard';
import { StatCard } from '../components/ui/StatCard';
import { Skeleton } from '../components/ui/Skeleton';
import { School, Activity, Users } from 'lucide-react';

const engagementData = [
  { course: 'TE', engagement: 76 },
  { course: 'FM', engagement: 69 },
  { course: 'DSA', engagement: 88 },
  { course: 'DBMS', engagement: 73 },
  { course: 'ML', engagement: 92 },
  { course: 'PS', engagement: 61 }
];

const courseRows = [
  { name: 'Thermal Engineering', sentiment: 0.74, risk: 'Medium' },
  { name: 'Fluid Mechanics', sentiment: 0.68, risk: 'Low' },
  { name: 'Data Structures & Algorithms', sentiment: 0.57, risk: 'Medium' },
  { name: 'Database Management Systems', sentiment: 0.81, risk: 'Low' },
  { name: 'Machine Learning', sentiment: 0.63, risk: 'Medium' },
  { name: 'Problem Solving', sentiment: 0.49, risk: 'High' }
];

const sentimentBadge = (value) => {
  if (value >= 0.75) {
    return 'bg-emerald-500/15 text-emerald-400 border border-emerald-400/40';
  }
  if (value >= 0.55) {
    return 'bg-amber-500/15 text-amber-400 border border-amber-400/40';
  }
  return 'bg-rose-500/15 text-rose-400 border border-rose-400/40';
};

const riskBadge = (risk) => {
  if (risk === 'Low') {
    return 'bg-emerald-500/15 text-emerald-400 border border-emerald-400/40';
  }
  if (risk === 'Medium') {
    return 'bg-amber-500/15 text-amber-400 border border-amber-400/40';
  }
  return 'bg-rose-500/15 text-rose-400 border border-rose-400/40';
};

export const AdminAnalytics = () => {
  const [loading] = React.useState(false);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          label="Campus Pulse Index"
          value="7.8 / 10"
          hint="Aggregated across all courses this week"
          trend={5}
          icon={School}
        />
        <StatCard
          label="Weekly Participation"
          value="4.6k pulses"
          hint="Unique students submitting at least one pulse"
          trend={12}
          icon={Users}
        />
        <StatCard
          label="Courses At Risk"
          value="7 flagged"
          hint="Sustained low sentiment & engagement"
          trend={-2}
          icon={Activity}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ChartCard
            title="Course engagement"
            subtitle="Percentage of enrolled students sending pulses"
            height="h-64"
          >
            {loading ? (
              <Skeleton className="h-full w-full rounded-2xl" />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData} barCategoryGap={18}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(148, 163, 184, 0.2)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="course"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      backgroundColor: 'rgba(15, 23, 42, 0.96)',
                      color: 'white',
                      fontSize: 11
                    }}
                    formatter={(value) => [`${value}%`, 'Engagement']}
                  />
                  <Bar
                    dataKey="engagement"
                    radius={[10, 10, 10, 10]}
                    fill="url(#engagementGradient)"
                  />
                  <defs>
                    <linearGradient id="engagementGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartCard>
        </div>
        <div className="lg:col-span-2">
          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-violet-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-violet-900/40 backdrop-blur-xl shadow-glass p-4 md:p-5 space-y-3">
            <header>
              <h2 className="text-sm font-medium text-slate-900 dark:text-slate-50">
                Risk indicators
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Quick pulse of how many courses sit in each band.
              </p>
            </header>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 bg-emerald-500/15 text-emerald-400 border-emerald-400/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Low risk · 124
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 bg-amber-500/15 text-amber-400 border-amber-400/40">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Medium risk · 23
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 bg-rose-500/15 text-rose-400 border-rose-400/40">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                High risk · 7
              </span>
            </div>
          </section>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-sky-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-sky-900/40 backdrop-blur-xl shadow-glass p-4 md:p-5 space-y-3">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium text-slate-900 dark:text-slate-50">
              Courses by sentiment
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Institution-wide view combining micro feedback and trend analysis.
            </p>
          </div>
        </header>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="text-slate-500 dark:text-slate-400">
              <tr className="border-b border-white/10">
                <th className="py-2 pr-4 text-left font-medium">Course</th>
                <th className="py-2 px-4 text-left font-medium">Sentiment</th>
                <th className="py-2 px-4 text-left font-medium">Risk</th>
                <th className="py-2 pl-4 text-left font-medium">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {courseRows.map((row) => (
                <tr key={row.name} className="align-middle">
                  <td className="py-2 pr-4 text-slate-900 dark:text-slate-50">
                    {row.name}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={[
                        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]',
                        sentimentBadge(row.sentiment)
                      ].join(' ')}
                    >
                      {(row.sentiment * 10).toFixed(1)} / 10
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={[
                        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]',
                        riskBadge(row.risk)
                      ].join(' ')}
                    >
                      {row.risk}
                    </span>
                  </td>
                  <td className="py-2 pl-4 text-slate-500 dark:text-slate-400">
                    Stable ↔
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

