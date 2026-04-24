'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { curriculum } from '@/lib/curriculum';
import { saveSelection, getSelection } from '@/lib/storage';
import { getWeekCount } from '@/lib/generatePlan';

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
  const [selectedCode, setSelectedCode] = useState<string>('');
  const [selectedHours, setSelectedHours] = useState<number>(4);
  const [weekCount, setWeekCount] = useState<number>(0);

  useEffect(() => {
    const saved = getSelection();
    if (saved) {
      setSelectedCode(saved.licenseCode);
      setSelectedHours(saved.hoursPerWeek);
    }
  }, []);

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
    <main className="px-4 py-12 md:py-20">
      <div className="content-max mx-auto space-y-8">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Pass the Massachusetts Hoisting Exam
          </h1>
          <p className="text-lg text-slate-600">
            Generate a personalized study plan based on your available hours per week.
          </p>
        </div>

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
    </main>
  );
}
