'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';
import { saveSelection, getSelection } from '@/lib/storage';
import { getWeekCount } from '@/lib/generatePlan';
import { useAuth, isAuthConfigured } from '@/components/AuthProvider';
import { AuthModal } from '@/components/AuthModal';

const hoursPerWeekOptions = [2, 4, 6, 8, 10, 15];

const restrictionGroups = [
  {
    group: 'Common Combinations',
    codes: ['2A/1C'],
  },
  {
    group: 'Group 1: Cranes',
    codes: ['1A', '1B', '1C', '1D', '1E'],
  },
  {
    group: 'Group 2: Excavating',
    codes: ['2A', '2B', '2C'],
  },
  {
    group: 'Group 3: Specialty',
    codes: ['3A'],
  },
  {
    group: 'Group 4: Compact',
    codes: ['4G'],
  },
];

export default function LandingPage() {
  const router = useRouter();
  const { user, syncStatus, latestProgress, signOut } = useAuth();
  const [selectedCode, setSelectedCode] = useState<string>('');
  const [selectedHours, setSelectedHours] = useState<number>(4);
  const [weekCount, setWeekCount] = useState<number>(0);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const saved = getSelection();
    if (saved) {
      setSelectedCode(saved.licenseCode);
      setSelectedHours(saved.hoursPerWeek);
    }
  }, []);

  // After sign-in syncs cloud progress, redirect to the plan
  useEffect(() => {
    if (latestProgress) {
      router.push('/plan');
    }
  }, [latestProgress, router]);

  useEffect(() => {
    if (selectedCode) {
      const restriction = curriculum.find(r => r.code === selectedCode);
      if (restriction) {
        const weeks = getWeekCount(restriction, selectedHours);
        setWeekCount(weeks);
      }
    }
  }, [selectedCode, selectedHours]);

  const handleGenerate = () => {
    if (selectedCode) {
      saveSelection(selectedCode, selectedHours);
      router.push('/plan');
    }
  };

  const selectedRestriction = curriculum.find(r => r.code === selectedCode);

  return (
    <main className="px-4 py-8 md:py-12">
      <div className="content-max mx-auto space-y-8">
        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1545362154-4a7d3eba4b83?w=1600&q=80&auto=format&fit=crop"
            alt="Heavy excavators silhouetted against the sky at a construction site"
            className="w-full h-[220px] md:h-[380px] object-cover"
            loading="eager"
          />
        </div>

        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Pass the Massachusetts Hoisting Exam
          </h1>
          <p className="text-lg text-slate-600">
            Generate a personalized study plan based on your available hours per week.
          </p>
        </div>

        {/* Beta / personal-project notice */}
        <div className="card p-5 border-2 border-safety/40 bg-yellow-50">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden>🚧</span>
            <div className="space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wide bg-safety text-slate-900 px-2 py-0.5 rounded">
                  Beta
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  A personal project, now open to everyone
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                I originally built this for myself while studying for my own Massachusetts hoisting
                exam, and figured it might be useful to other people in the same boat — so I made it
                free and open to anyone. This is <strong>not an official site</strong> and not
                affiliated with OPSI or the Commonwealth in any way. It is, at best, perhaps a
                useful study tool. <strong>No guarantees of accuracy</strong> — always verify
                regulatory specifics against{' '}
                <a
                  href="https://www.mass.gov/hoisting-licensing-and-exams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-safety hover:text-yellow-500 font-semibold underline"
                >
                  mass.gov
                </a>{' '}
                before relying on anything you read here.
              </p>
            </div>
          </div>
        </div>

        {/* About this site */}
        <section className="card p-6 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">What is this site?</h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>Free MA Hoist</strong> is a free Massachusetts hoisting engineer exam study tool. Pick the
            restriction class you are testing on, tell us how many hours per week you can study, and the site
            builds a personalized week-by-week plan with learning objectives, reading topics, in-app reference
            material, and self-check quiz questions for each session — no account required.
          </p>
          {/* Equipment imagery */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 pt-1">
            <figure className="space-y-1">
              <img
                src="https://images.unsplash.com/photo-1606811883055-0d24f05c8bcd?w=600&q=80&auto=format&fit=crop"
                alt="Yellow excavator working on a rock face at a construction site"
                className="rounded-lg w-full h-24 md:h-32 object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs text-slate-500 text-center">Excavating</figcaption>
            </figure>
            <figure className="space-y-1">
              <img
                src="https://images.unsplash.com/photo-1722079358008-2c72a8973998?w=600&q=80&auto=format&fit=crop"
                alt="Construction crane on a building site"
                className="rounded-lg w-full h-24 md:h-32 object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs text-slate-500 text-center">Cranes &amp; derricks</figcaption>
            </figure>
            <figure className="space-y-1">
              <img
                src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?w=600&q=80&auto=format&fit=crop"
                alt="Yellow forklift inside a warehouse"
                className="rounded-lg w-full h-24 md:h-32 object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs text-slate-500 text-center">Forklifts &amp; lifts</figcaption>
            </figure>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Content is drawn from the official Massachusetts statutes and regulations (MGL Chapter 146 and
            230 CMR 6.00) plus relevant OSHA and ASME standards. This is an unofficial study aid — it does not
            replace the official OPSI materials or hands-on training, and you should verify regulatory specifics on{' '}
            <a
              href="https://www.mass.gov/hoisting-licensing-and-exams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-safety hover:text-yellow-500 font-semibold underline"
            >
              mass.gov
            </a>{' '}
            before relying on anything you read here.
          </p>
          <p className="text-sm text-slate-600">
            →{' '}
            <Link href="/guide" className="text-safety hover:text-yellow-500 font-semibold underline">
              Full licensing guide
            </Link>
            {' '}·{' '}
            <Link href="/about" className="text-safety hover:text-yellow-500 font-semibold underline">
              About &amp; FAQ
            </Link>
            {' '}·{' '}
            <Link href="/hand-signals" className="text-safety hover:text-yellow-500 font-semibold underline">
              Hand signals reference
            </Link>
          </p>
        </section>

        {/* Auth Banner */}
        {isAuthConfigured && (
          <div className="card p-4">
            {!user ? (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-600">
                    Have an existing plan? Sign in to restore it on this device.
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Optional — only needed to track progress across multiple devices.
                  </p>
                </div>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="button-primary text-sm whitespace-nowrap"
                >
                  Sign in
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-slate-600">
                  {syncStatus === 'syncing' && <span>Restoring your plan…</span>}
                  {syncStatus === 'synced' && <span>Signed in as <strong>{user.email}</strong></span>}
                  {syncStatus === 'error' && <span className="text-red-600">Sync failed — your local progress is still intact.</span>}
                  {syncStatus === 'idle' && <span>Signed in as <strong>{user.email}</strong></span>}
                </div>
                <button
                  onClick={signOut}
                  className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}

        {/* Selector Card */}
        <div className="card p-8 space-y-8">
          {/* License Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900">
              1. Select Your License Restriction
            </label>
            <select
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety"
            >
              <option value="">Choose a restriction...</option>
              {restrictionGroups.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.codes.map((code) => {
                    const restriction = curriculum.find(r => r.code === code);
                    return restriction ? (
                      <option key={code} value={code}>
                        {code} — {restriction.name}
                      </option>
                    ) : null;
                  })}
                </optgroup>
              ))}
            </select>

            {selectedRestriction && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700">{selectedRestriction.description}</p>
                <p className="text-sm text-slate-600 mt-2">
                  <strong>Equipment covered:</strong> {selectedRestriction.equipmentCovered.join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Hours per Week Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-900">
              2. Select Study Hours Per Week
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {hoursPerWeekOptions.map((hours) => (
                <button
                  key={hours}
                  onClick={() => setSelectedHours(hours)}
                  className={`p-3 rounded-lg font-semibold transition-colors ${
                    selectedHours === hours
                      ? 'bg-safety text-slate-900'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {hours}h
                </button>
              ))}
            </div>
          </div>

          {/* Live Preview */}
          {selectedCode && weekCount > 0 && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-slate-700">
                <strong>Your plan:</strong> ~{selectedRestriction?.totalHours || 0} hours over{' '}
                <span className="font-semibold">{weekCount} weeks</span>
              </p>
              {weekCount > 8 && (
                <p className="text-sm text-amber-700 mt-2">
                  ⚠️ At this pace you'll finish in {weekCount} weeks. Consider 4+ hrs/week to stay exam-ready.
                  Remember you cannot retest for 60 days if you fail.
                </p>
              )}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleGenerate}
            disabled={!selectedCode}
            className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors ${
              selectedCode
                ? 'button-primary'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Generate My Plan
          </button>
        </div>
      </div>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </main>
  );
}
