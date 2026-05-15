'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';
import { getProgress, saveProgress, getSelection } from '@/lib/storage';
import { Session, SelfCheckQuestion, UserProgress } from '@/lib/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Interactive quiz rendered client-side so answer state and highlights work. */
function QuizSection({ questions }: { questions: SelfCheckQuestion[] }) {
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState<boolean[]>(
    () => new Array(questions.length).fill(false)
  );

  const handleAnswer = (qIdx: number, oIdx: number) => {
    if (!quizSubmitted[qIdx]) {
      setQuizAnswers(prev => { const n = [...prev]; n[qIdx] = oIdx; return n; });
    }
  };

  const handleSubmit = (qIdx: number) => {
    setQuizSubmitted(prev => { const n = [...prev]; n[qIdx] = true; return n; });
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Self-Check Questions</h2>
      <div className="space-y-6">
        {questions.map((question, qIdx) => (
          <div key={qIdx} className="card p-6 space-y-4 border border-slate-200">
            <h3 className="font-semibold text-slate-900">
              Question {qIdx + 1}: {question.question}
            </h3>

            <div className="space-y-2">
              {question.options.map((option, oIdx) => {
                const isSelected = quizAnswers[qIdx] === oIdx;
                const isCorrect = oIdx === question.correctIndex;
                const isSubmitted = quizSubmitted[qIdx];

                let buttonClass = 'p-3 text-left rounded-lg border-2 transition-colors cursor-pointer w-full ';
                if (isSubmitted) {
                  if (isCorrect) {
                    buttonClass += 'bg-green-50 border-green-500 text-slate-900';
                  } else if (isSelected && !isCorrect) {
                    buttonClass += 'bg-red-50 border-red-500 text-slate-900';
                  } else {
                    buttonClass += 'bg-slate-50 border-slate-200 text-slate-700';
                  }
                } else {
                  buttonClass += isSelected
                    ? 'bg-safety border-safety text-slate-900'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-900';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => !isSubmitted && handleAnswer(qIdx, oIdx)}
                    disabled={isSubmitted}
                    className={buttonClass}
                  >
                    <div className="flex gap-2">
                      <span className="font-semibold min-w-fit">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span>{option}</span>
                      {isSubmitted && isCorrect && (
                        <span className="ml-auto text-green-600 font-semibold">✓</span>
                      )}
                      {isSubmitted && isSelected && !isCorrect && (
                        <span className="ml-auto text-red-600 font-semibold">✗</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {!quizSubmitted[qIdx] && quizAnswers[qIdx] !== null && (
              <button
                onClick={() => handleSubmit(qIdx)}
                className="button-primary w-full"
              >
                Check Answer
              </button>
            )}

            {/* Explanation always in DOM for crawlability; visually revealed after submit */}
            <details open={quizSubmitted[qIdx]} className="group">
              <summary className={`cursor-pointer text-sm font-semibold text-blue-800 list-none ${quizSubmitted[qIdx] ? 'hidden' : ''}`}>
                Show Explanation
              </summary>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-2 mt-2">
                <p className="font-semibold text-blue-900">Explanation:</p>
                <p className="text-blue-800 text-sm">{question.explanation}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Client island: handles quiz interactivity, "Mark Complete" button, and prev/next nav. */
export default function SessionDetailClient({ sessionId }: { sessionId: string }) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [prevSession, setPrevSession] = useState<Session | null>(null);
  const [nextSession, setNextSession] = useState<Session | null>(null);
  const [questions, setQuestions] = useState<SelfCheckQuestion[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const selection = getSelection();
    if (!selection) { setLoaded(true); return; }

    const restriction = curriculum.find(r => r.code === selection.licenseCode);
    if (!restriction) { setLoaded(true); return; }

    const sessions = restriction.modules
      .sort((a, b) => a.orderInCourse - b.orderInCourse)
      .flatMap(m => m.sessions);

    const idx = sessions.findIndex(s => s.id === sessionId);
    if (idx !== -1) {
      const session = sessions[idx];
      setPrevSession(idx > 0 ? sessions[idx - 1] : null);
      setNextSession(idx < sessions.length - 1 ? sessions[idx + 1] : null);
      setQuestions(session.selfCheck);
    }

    const savedProgress = getProgress(selection.licenseCode);
    if (savedProgress) {
      setProgress(savedProgress);
      setIsCompleted(savedProgress.completedSessionIds.includes(sessionId));
    }
    setLoaded(true);
  }, [sessionId]);

  const toggleComplete = () => {
    if (!progress) return;
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
    setIsCompleted(newCompleted.has(sessionId));
    saveProgress(updatedProgress);
  };

  return (
    <>
      {/* Interactive quiz — rendered client-side so answer highlighting works */}
      {questions.length > 0 && <QuizSection questions={questions} />}

      {/* Session Actions */}
      <div className="space-y-4">
        {progress !== null && (
          <button
            onClick={toggleComplete}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isCompleted
                ? 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                : 'button-primary'
            }`}
          >
            {isCompleted ? '✓ Session Completed' : 'Mark Session Complete'}
          </button>
        )}

        {/* Navigation — visible once client loads; server-rendered fallback in parent */}
        {loaded && (
          <div className="flex gap-3 justify-between">
            {prevSession ? (
              <Link
                href={`/plan/${prevSession.id}`}
                className="flex items-center gap-2 button-secondary"
              >
                <ChevronLeft size={18} />
                Previous
              </Link>
            ) : (
              <div></div>
            )}
            {nextSession ? (
              <Link
                href={`/plan/${nextSession.id}`}
                className="flex items-center gap-2 button-secondary"
              >
                Next
                <ChevronRight size={18} />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
