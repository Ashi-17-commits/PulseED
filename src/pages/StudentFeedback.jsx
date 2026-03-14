import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { FeedbackButton } from '../components/ui/FeedbackButton';

const COURSES = [
  'Thermal Engineering',
  'Fluid Mechanics',
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Machine Learning',
  'Problem Solving'
];

const feedbackOptions = [
  { id: 'fast', emoji: '😵', label: 'Too Fast' },
  { id: 'perfect', emoji: '🙂', label: 'Perfect' },
  { id: 'boring', emoji: '😴', label: 'Boring' },
  { id: 'difficult', emoji: '🤯', label: 'Difficult' }
];

export const StudentFeedback = () => {
  const [course, setCourse] = useState(COURSES[0]);
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [sessionCode, setSessionCode] = useState('');
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = (e) => {
    e.preventDefault();
    if (!sessionCode.trim()) return;
    // In a real app this would be validated server-side.
    setCheckedIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowToast(true);
      setNotes('');
      setSelected(null);
      setTimeout(() => setShowToast(false), 2200);
    }, 900);
  };

  return (
    <div className="relative">
      {showToast && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-2xl bg-emerald-500 text-emerald-50 px-4 py-2 shadow-lg">
            <CheckCircle2 size={18} />
            <span className="text-sm">
              Feedback sent anonymously. Thank you for pulsing the class ✨
            </span>
          </div>
        </div>
      )}

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-sky-500/5 dark:from-slate-900/60 dark:via-slate-900/80 dark:to-sky-900/40 backdrop-blur-xl shadow-glass p-4 md:p-6 space-y-5">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Live Pulse
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
            How is this class feeling right now?
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Tap a vibe and optionally add context. Your feedback is anonymous and updates the dashboard in real time.
          </p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="rounded-2xl border border-dashed border-emerald-400/40 bg-emerald-500/5 px-3 py-3 md:px-4 md:py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-2xl bg-emerald-500/15 p-1.5 text-emerald-300">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-xs font-medium text-emerald-200">
                  Attendance check-in
                </p>
                <p className="text-[11px] text-emerald-100/80">
                  Enter the shared session code so we know this pulse is coming from inside the class right now — not who you are. Codes are never linked to your name or ID.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <input
                type="text"
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value)}
                placeholder="e.g. TE-09A"
                className="w-28 md:w-32 rounded-2xl border border-emerald-400/60 bg-emerald-950/40 px-3 py-1.5 text-xs text-emerald-50 placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/80"
              />
              <button
                type="button"
                onClick={handleCheckIn}
                className={[
                  'inline-flex items-center justify-center rounded-2xl px-3 py-1.5 text-[11px] font-medium transition-all duration-200',
                  checkedIn
                    ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/60 cursor-default'
                    : 'bg-emerald-400 text-emerald-950 hover:-translate-y-0.5 shadow-sm'
                ].join(' ')}
              >
                {checkedIn ? 'Marked present' : 'Mark present'}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Course
            </label>
            <div className="relative">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/80 dark:bg-slate-900/80 text-sm text-slate-900 dark:text-slate-100 px-3 py-2.5 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/80"
              >
                {COURSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Micro feedback
            </label>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {feedbackOptions.map((opt) => (
                <FeedbackButton
                  key={opt.id}
                  label={opt.label}
                  emoji={opt.emoji}
                  active={selected === opt.id && checkedIn}
                  onClick={() => {
                    if (!checkedIn) return;
                    setSelected(opt.id);
                  }}
                />
              ))}
            </div>
            {!checkedIn && (
              <p className="text-[11px] text-amber-300/90">
                Check in to the session above to unlock feedback buttons for this class.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Optional context
              </label>
              <span className="text-[11px] text-slate-500 dark:text-slate-500">
                No logins. No IDs. 100% anonymous pulses.
              </span>
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="e.g. The pace is fast around proofs, could we get a quick recap? 💭"
              className="w-full rounded-2xl border border-white/10 bg-white/80 dark:bg-slate-900/80 text-sm text-slate-900 dark:text-slate-100 px-3 py-2.5 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400/80 resize-none"
              disabled={!checkedIn}
            />
            {!checkedIn && (
              <p className="text-[11px] text-slate-500 dark:text-slate-500">
                Context box is locked until you&apos;re marked present.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Your input tunes the live dashboards that faculty and admins see. Only in-room pulses are counted to keep the signal clean.
            </p>
            <button
              type="submit"
              disabled={!checkedIn || !selected || submitting}
              className={[
                'inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-medium shadow-md',
                'bg-gradient-to-r from-sky-500 to-violet-500 text-white',
                'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
                (!checkedIn || !selected || submitting) &&
                  'opacity-60 cursor-not-allowed hover:translate-y-0'
              ].join(' ')}
            >
              {submitting ? 'Sending pulse…' : 'Send anonymous pulse'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

