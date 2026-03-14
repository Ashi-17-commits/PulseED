import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../components/ui/StatCard';
import { ChartCard } from '../components/ui/ChartCard';
import { HeatmapGrid } from '../components/ui/HeatmapGrid';
import { Skeleton } from '../components/ui/Skeleton';
import { Activity, Users, AlertTriangle } from 'lucide-react';

const sentimentTrend = [
  { label: '9:00', score: 0.62 },
  { label: '9:15', score: 0.7 },
  { label: '9:30', score: 0.66 },
  { label: '9:45', score: 0.74 },
  { label: '10:00', score: 0.71 },
  { label: '10:15', score: 0.77 }
];

const difficultyHeatmap = [
  { label: 'Thermal Engineering', value: 0.72 },
  { label: 'Fluid Mechanics', value: 0.63 },
  { label: 'DSA', value: 0.54 },
  { label: 'DBMS', value: 0.38 },
  { label: 'Machine Learning', value: 0.81 },
  { label: 'Problem Solving', value: 0.46 }
];

const recentFeedback = [
  {
    id: 1,
    course: 'Thermal Engineering',
    vibe: 'Too Fast',
    emoji: '😵',
    time: '2 min ago',
    text: 'Heat transfer derivations were a bit rushed, could we get a slower recap?'
  },
  {
    id: 2,
    course: 'Fluid Mechanics',
    vibe: 'Difficult',
    emoji: '🤯',
    time: '7 min ago',
    text: 'Turbulent flow examples felt dense, a visual demo would help.'
  },
  {
    id: 3,
    course: 'Data Structures & Algorithms',
    vibe: 'Perfect',
    emoji: '🙂',
    time: '15 min ago',
    text: 'Love the live dry-run examples, pace feels just right.'
  }
];

export const FacultyDashboard = () => {
  const [loading] = React.useState(false);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          label="Average Sentiment Score"
          value="7.4 / 10"
          hint="Past 60 minutes across your courses"
          trend={8}
          icon={Activity}
        />
        <StatCard
          label="Participation Rate"
          value="68%"
          hint="Students pulsing at least once per week"
          trend={3}
          icon={Users}
        />
        <StatCard
          label="At-Risk Courses"
          value="2 active"
          hint="Flagged by sustained low sentiment"
          trend={-4}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ChartCard
            title="Live sentiment trend"
            subtitle="Minute-by-minute pulse from micro feedback"
            height="h-64"
          >
            {loading ? (
              <Skeleton className="h-full w-full rounded-2xl" />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentimentTrend}>
                  <defs>
                    <linearGradient id="sentimentGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                  />
                  <YAxis
                    domain={[0.4, 1]}
                    hide
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      backgroundColor: 'rgba(15, 23, 42, 0.96)',
                      color: 'white',
                      fontSize: 11
                    }}
                    formatter={(value) => [`${(value * 10).toFixed(1)} / 10`, 'Sentiment']}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="url(#sentimentGradient)"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </ChartCard>
        </div>
        <div className="lg:col-span-2">
          <ChartCard
            title="Course difficulty hotspots"
            subtitle="Topics students are struggling with right now"
            height="h-64"
          >
            {loading ? (
              <Skeleton className="h-full w-full rounded-2xl" />
            ) : (
              <HeatmapGrid data={difficultyHeatmap} />
            )}
          </ChartCard>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-violet-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-violet-900/40 backdrop-blur-xl shadow-glass p-4 md:p-5 space-y-3">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-slate-900 dark:text-slate-50">
              Recent anonymous feedback
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live stream of what students are saying without names attached.
            </p>
          </div>
        </header>
        <div className="space-y-2 max-h-64 overflow-auto pr-1">
          {recentFeedback.map((fb) => (
            <article
              key={fb.id}
              className="rounded-2xl border border-white/10 bg-white/60 dark:bg-slate-900/70 px-3 py-2.5 text-xs flex gap-3"
            >
              <div className="mt-0.5 text-lg">{fb.emoji}</div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {fb.course}
                    </p>
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-300">
                      {fb.vibe}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    {fb.time}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-200 text-[11px]">
                  {fb.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

