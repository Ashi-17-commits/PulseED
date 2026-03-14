import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Sidebar } from './components/Layout/Sidebar';
import { Topbar } from './components/Layout/Topbar';
import { ThemeProvider } from './components/ThemeContext';
import { StudentFeedback } from './pages/StudentFeedback';
import { FacultyDashboard } from './pages/FacultyDashboard';
import { AdminAnalytics } from './pages/AdminAnalytics';
import { AlertsPage } from './pages/AlertsPage';

const AppShell = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 via-slate-950 to-violet-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 md:py-6 lg:px-6">
        <div className="mb-4 flex items-center justify-between gap-2 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-sky-400 to-violet-500 flex items-center justify-center text-xs font-bold">
              PE
            </div>
            <div>
              <div className="font-semibold tracking-tight">PulseED</div>
              <div className="text-[11px] text-slate-400">
                Real-Time Academic Feedback
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-[11px]">
            <Link
              to="/"
              className="rounded-xl px-2 py-1 hover:bg-white/10 transition-colors"
            >
              Student
            </Link>
            <Link
              to="/faculty"
              className="rounded-xl px-2 py-1 hover:bg-white/10 transition-colors"
            >
              Faculty
            </Link>
            <Link
              to="/admin"
              className="rounded-xl px-2 py-1 hover:bg-white/10 transition-colors"
            >
              Admin
            </Link>
            <Link
              to="/alerts"
              className="rounded-xl px-2 py-1 hover:bg-white/10 transition-colors"
            >
              Alerts
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 gap-4">
          <Sidebar />
          <main className="flex-1 rounded-3xl border border-white/10 bg-white/5 dark:bg-slate-950/40 backdrop-blur-2xl shadow-glass p-4 md:p-6 overflow-hidden">
            <Topbar />
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent mb-5" />
            <div className="pb-2">
              <Routes>
                <Route path="/" element={<StudentFeedback />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/admin" element={<AdminAnalytics />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route
                  path="*"
                  element={
                    <div className="flex h-40 flex-col items-center justify-center text-sm text-slate-400">
                      <p>Page not found.</p>
                      <Link
                        to="/"
                        className="mt-2 text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                      >
                        Back to Student Feedback
                      </Link>
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppShell />
  </ThemeProvider>
);

export default App;

