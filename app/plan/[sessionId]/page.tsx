'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';
import { getProgress, saveProgress, getSelection } from '@/lib/storage';
import { Session, UserProgress } from '@/lib/types';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SessionDetailPage() {
  const router = useRouter();
  const params = useParams();
  const sessionId = params.sessionId as string;

  const [session, setSession] = useState<Session | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean[]>([]);
  const [allSessions, setAllSessions] = useState<Session[]>([]);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

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

    const sessions = restriction.modules
      .sort((a, b) => a.orderInCourse - b.orderInCourse)
      .flatMap(m => m.sessions);

    setAllSessions(sessions);

    const foundSession = sessions.find(s => s.id === sessionId);
    if (!foundSession) {
      router.push('/plan');
      return;
    }

    setSession(foundSession);
    setCurrentSessionIndex(sessions.findIndex(s => s.id === sessionId));
    setQuizAnswers(new Array(foundSession.selfCheck.length).fill(null));
    setQuizSubmitted(new Array(foundSession.selfCheck.length).fill(false));

    const savedProgress = getProgress(selection.licenseCode);
    if (savedProgress) {
      setProgress(savedProgress);
    }
  }, [sessionId, router]);

  if (!session || !progress) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const prevSession = currentSessionIndex > 0 ? allSessions[currentSessionIndex - 1] : null;
  const nextSession = currentSessionIndex < allSessions.length - 1 ? allSessions[currentSessionIndex + 1] : null;
  const isCompleted = progress.completedSessionIds.includes(session.id);

  const handleQuizAnswer = (questionIndex: number, optionIndex: number) => {
    if (!quizSubmitted[questionIndex]) {
      const newAnswers = [...quizAnswers];
      newAnswers[questionIndex] = optionIndex;
      setQuizAnswers(newAnswers);
    }
  };

  const handleSubmitQuestion = (questionIndex: number) => {
    const newSubmitted = [...quizSubmitted];
    newSubmitted[questionIndex] = true;
    setQuizSubmitted(newSubmitted);
  };

  const toggleComplete = () => {
    const newCompleted = new Set(progress.completedSessionIds);
    if (newCompleted.has(session.id)) {
      newCompleted.delete(session.id);
    } else {
      newCompleted.add(session.id);
    }

    const updatedProgress: UserProgress = {
      ...progress,
      completedSessionIds: Array.from(newCompleted),
      lastUpdatedAt: new Date().toISOString(),
    };
    setProgress(updatedProgress);
    saveProgress(updatedProgress);
  };

  return (
    <main className="px-4 py-8 md:py-12">
      <div className="content-max mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/plan" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to Plan
          </Link>
        </div>

        {/* Session Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {session.title}
          </h1>
          <p className="text-slate-600">
            {session.durationHours} hours
          </p>
        </div>

        {/* Learning Objectives */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Learning Objectives</h2>
          <ul className="space-y-2">
            {session.learningObjectives.map((obj, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700">
                <span className="text-safety font-bold">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Topics */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Topics Covered</h2>
          <ul className="space-y-2">
            {session.topics.map((topic, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700">
                <span className="text-slate-400">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        {session.resources.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Resources</h2>
            <div className="grid gap-3">
              {session.resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 card border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors flex justify-between items-start gap-3 group"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-safety transition-colors">
                      {resource.label}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 capitalize">{resource.type}</p>
                    {resource.required && (
                      <span className="inline-block mt-2 px-2 py-1 bg-safety text-slate-900 text-xs font-semibold rounded">
                        Required
                      </span>
                    )}
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-slate-600 flex-shrink-0 mt-1" size={18} />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Self-Check Quiz */}
        {session.selfCheck.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Self-Check Questions</h2>
            <div className="space-y-6">
              {session.selfCheck.map((question, qIdx) => (
                <div key={qIdx} className="card p-6 space-y-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Question {qIdx + 1}: {question.question}
                  </h3>

                  <div className="space-y-2">
                    {question.options.map((option, oIdx) => {
                      const isSelected = quizAnswers[qIdx] === oIdx;
                      const isCorrect = oIdx === question.correctIndex;
                      const isSubmitted = quizSubmitted[qIdx];

                      let buttonClass = 'p-3 text-left rounded-lg border-2 transition-colors cursor-pointer ';
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
                          onClick={() => !isSubmitted && handleQuizAnswer(qIdx, oIdx)}
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
                      onClick={() => handleSubmitQuestion(qIdx)}
                      className="button-primary w-full"
                    >
                      Check Answer
                    </button>
                  )}

                  {quizSubmitted[qIdx] && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-2">
                      <p className="font-semibold text-blue-900">Explanation:</p>
                      <p className="text-blue-800 text-sm">{session.selfCheck[qIdx].explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Session Actions */}
        <div className="space-y-4">
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

          {/* Navigation */}
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
        </div>
      </div>
    </main>
  );
}
