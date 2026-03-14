import React from 'react';
import { AlertTriangle, Zap, Gauge } from 'lucide-react';

const flaggedCourses = [
  {
    id: 1,
    course: 'Thermal Engineering',
    issue: 'Pace',
    description: 'Spikes of "Too Fast" pulses during derivation-heavy segments.',
    action: 'Prompt instructor to add mini-recaps after longer derivations.'
  },
  {
    id: 2,
    course: 'Data Structures & Algorithms',
    issue: 'Difficulty',
    description: 'Sustained "Difficult" and low sentiment around pointer and tree topics.',
    action: 'Recommend adding visual diagrams and lab time for practice.'
  },
  {
    id: 3,
    course: 'Database Management Systems',
    issue: 'Engagement',
    description: 'High "Boring" feedback despite neutral pace signals in ER model lectures.',
    action: 'Suggest interactive schema design activities or quick in-class polls.'
  }
];

const issueIcon = (issue) => {
  if (issue === 'Pace') return Gauge;
  if (issue === 'Engagement') return Zap;
  return AlertTriangle;
};

const issueBadgeClass = (issue) => {
  if (issue === 'Pace') return 'bg-sky-500/15 text-sky-400 border-sky-400/40';
  if (issue === 'Engagement')
    return 'bg-amber-500/15 text-amber-400 border-amber-400/40';
  return 'bg-rose-500/15 text-rose-400 border-rose-400/40';
};

export const AlertsPage = () => {
  const hasAlerts = flaggedCourses.length > 0;

  return (
    <section className="space-y-4">
      {!hasAlerts && (
        <div className="rounded-2xl border border-dashed border-emerald-400/40 bg-emerald-500/10 px-4 py-6 text-center text-sm text-emerald-200">
          Campus looks calm. No active alerts – keep listening to the pulse 💚
        </div>
      )}

      {hasAlerts && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {flaggedCourses.map((item) => {
            const Icon = issueIcon(item.issue);
            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-rose-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-rose-900/40 backdrop-blur-xl shadow-glass p-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {item.course}
                      </h2>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Flagged via micro feedback signals
                      </p>
                    </div>
                  </div>
                  <span
                    className={[
                      'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]',
                      issueBadgeClass(item.issue)
                    ].join(' ')}
                  >
                    {item.issue}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-200">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Suggested next step:
                    <br />
                    <span className="text-slate-900 dark:text-slate-100">
                      {item.action}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-2xl px-3 py-2 text-xs font-medium bg-white/90 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 border border-white/10 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    Mark as reviewed
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

