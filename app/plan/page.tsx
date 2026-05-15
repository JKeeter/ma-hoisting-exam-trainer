'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';
import { generatePlan } from '@/lib/generatePlan';
import { getProgress, saveProgress, clearProgress, getSelection, saveSelection } from '@/lib/storage';
import { TrainingPlan, UserProgress } from '@/lib/types';
import { useAuth } from '@/components/AuthProvider';
import { SyncBanner } from '@/components/SyncBanner';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PlanPage() {
  const router = useRouter();
  const { latestProgress, triggerCloudSave } = useAuth();
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([1]));
  const [showResetDialog, setShowResetDialog] = useState(false);

  useEffect(() => {
    const selection = getSelection();
    if (!selection) {
      router.push('/');
      return;
    }

    const restriction = curriculum.find(r => r.code === selection.licenseCode);
    if (!restriction) {
      router.push('/');
      return;
    }

    const generatedPlan = generatePlan(restriction, selection.hoursPerWeek);
    setPlan(generatedPlan);

    const savedProgress = getProgress(selection.licenseCode);
    if (savedProgress) {
      setProgress(savedProgress);
    } else {
      const newProgress: UserProgress = {
        licenseCode: selection.licenseCode,
        hoursPerWeek: selection.hoursPerWeek,
        completedSessionIds: [],
        startedAt: new Date().toISOString(),
        lastUpdatedAt: new Date().toISOString(),
      };
      setProgress(newProgress);
      saveProgress(newProgress);
    }
  }, [router]);

  // When cloud sync completes, update local state and restore selection if needed
  useEffect(() => {
    if (!latestProgress) return;
    setProgress(latestProgress);
    saveSelection(latestProgress.licenseCode, latestProgress.hoursPerWeek);
    const restriction = curriculum.find(r => r.code === latestProgress.licenseCode);
    if (restriction) {
      setPlan(generatePlan(restriction, latestProgress.hoursPerWeek));
    }
  }, [latestProgress]);

  if (!plan || !progress) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const restriction = curriculum.find(r => r.code === plan.licenseCode);
  const allSessions = restriction?.modules
    .sort((a, b) => a.orderInCourse - b.orderInCourse)
    .flatMap(m => m.sessions) || [];
  const totalSessions = allSessions.length;
  const completedCount = progress.completedSessionIds.length;
  const progressPercent = totalSessions > 0 ? (completedCount / totalSessions) * 100 : 0;

  const toggleWeek = (weekNumber: number) => {
    const newExpanded = new Set(expandedWeeks);
    if (newExpanded.has(weekNumber)) {
      newExpanded.delete(weekNumber);
    } else {
      newExpanded.add(weekNumber);
    }
    setExpandedWeeks(newExpanded);
  };

  const toggleSession = (sessionId: string) => {
    const newCompleted = new Set(progress.completedSessionIds);
    if (newCompleted.has(sessionId)) {
      newCompleted.delete(sessionId);
    } else {
      newCompleted.add(sessionId);
    }

    const updatedProgress: UserProgress = {
      ...progress,
      completedSessionIds: Array.from(newCompleted),
      lastUpdatedAt: new Date().toISOString(),
    };
    setProgress(updatedProgress);
    saveProgress(updatedProgress);
    triggerCloudSave(updatedProgress);
  };

  const handleReset = () => {
    clearProgress();
    const newProgress: UserProgress = {
      licenseCode: plan.licenseCode,
      hoursPerWeek: plan.hoursPerWeek,
      completedSessionIds: [],
      startedAt: new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString(),
    };
    setProgress(newProgress);
    saveProgress(newProgress);
    triggerCloudSave(newProgress);
    setShowResetDialog(false);
  };

  return (
    <main className="px-4 py-8 md:py-12">
      <div className="content-max mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {restriction?.code} — {restriction?.name}
            </h1>
            <p className="text-slate-600 mt-2">
              {restriction?.totalHours} hours over {plan.weeks.length} weeks
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              className="button-secondary text-sm"
            >
              Change Plan
            </Link>
            <button
              onClick={() => setShowResetDialog(true)}
              className="button-secondary text-sm"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Sync Banner */}
        <SyncBanner />

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Overall Progress</span>
            <span className="font-semibold text-slate-900">
              {completedCount} of {totalSessions} sessions
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-safety h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Weeks Accordion */}
        <div className="space-y-3">
          {plan.weeks.map((week) => (
            <div key={week.weekNumber} className="card border-slate-200">
              <button
                onClick={() => toggleWeek(week.weekNumber)}
                className="w-full p-4 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">
                    Week {week.weekNumber}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {week.sessions.length} sessions • {week.totalHours} hours
                  </p>
                </div>
                {expandedWeeks.has(week.weekNumber) ? (
                  <ChevronUp className="text-slate-600" size={20} />
                ) : (
                  <ChevronDown className="text-slate-600" size={20} />
                )}
              </button>

              {expandedWeeks.has(week.weekNumber) && (
                <div className="border-t border-slate-200 p-4 space-y-3">
                  {week.sessions.map((session) => {
                    const isCompleted = progress.completedSessionIds.includes(session.id);
                    return (
                      <Link
                        key={session.id}
                        href={`/plan/${session.id}`}
                        className="block p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors group"
                      >
                        <div className="flex gap-3">
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={(e) => {
                              e.preventDefault();
                              toggleSession(session.id);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-1 w-5 h-5 cursor-pointer"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-sm ${isCompleted ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                              {session.title}
                            </h4>
                            <p className="text-xs text-slate-600 mt-1">
                              {session.durationHours} hours
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reset Dialog */}
      {showResetDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="card max-w-sm space-y-4 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Reset Progress?</h3>
            <p className="text-slate-600">
              This will clear all completed sessions for this license restriction. This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowResetDialog(false)}
                className="button-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="bg-red-600 text-white hover:bg-red-700 font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
