import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { curriculum } from '@/lib/curriculum';
import { Session, LicenseRestriction } from '@/lib/types';
import { hasReferencePage } from '@/lib/reference-content/ids';
import SessionDetailClient from './SessionDetailClient';

export function generateStaticParams() {
  return curriculum.flatMap(r =>
    r.modules.flatMap(m =>
      m.sessions.map(s => ({ sessionId: s.id }))
    )
  );
}

/** Find a session by ID across all restrictions, modules, and sessions. */
function findSession(sessionId: string): Session | null {
  for (const restriction of curriculum) {
    for (const mod of restriction.modules) {
      for (const session of mod.sessions) {
        if (session.id === sessionId) return session;
      }
    }
  }
  return null;
}

type SessionContext = {
  restriction: LicenseRestriction;
  session: Session;
  prev: Session | null;
  next: Session | null;
};

/**
 * Locate a session within its OWN restriction class and compute the previous /
 * next session in course order. Used to render real, crawlable prev/next links
 * server-side (the client island can't, since a crawler has no localStorage).
 */
function findSessionContext(sessionId: string): SessionContext | null {
  for (const restriction of curriculum) {
    const sessions = [...restriction.modules]
      .sort((a, b) => a.orderInCourse - b.orderInCourse)
      .flatMap(m => m.sessions);
    const idx = sessions.findIndex(s => s.id === sessionId);
    if (idx !== -1) {
      return {
        restriction,
        session: sessions[idx],
        prev: idx > 0 ? sessions[idx - 1] : null,
        next: idx < sessions.length - 1 ? sessions[idx + 1] : null,
      };
    }
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { sessionId: string };
}): Promise<Metadata> {
  const session = findSession(params.sessionId);
  if (!session) {
    return { title: 'Session Not Found | MA Hoisting License Trainer' };
  }
  const description =
    session.learningObjectives.length > 0
      ? `Learn: ${session.learningObjectives.slice(0, 2).join('; ')}.`
      : `Study session covering ${session.topics.slice(0, 3).join(', ')}.`;
  return {
    title: `${session.title} | MA Hoisting License Trainer`,
    description,
    alternates: { canonical: `/plan/${params.sessionId}` },
  };
}

export default function SessionDetailPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const ctx = findSessionContext(params.sessionId);

  if (!ctx) {
    return (
      <main className="px-4 py-12 max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Session Not Found</h1>
        <Link href="/lessons" className="button-secondary inline-block">Browse all lessons</Link>
      </main>
    );
  }

  const { session, restriction, prev, next } = ctx;
  const referenceAvailable = hasReferencePage(session.id);

  return (
    <main className="px-4 py-8 md:py-12">
      <div className="content-max mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
          <Link href="/plan" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to Plan
          </Link>
          <Link href="/lessons" className="text-slate-500 hover:text-safety font-semibold">
            All lessons ({restriction.code})
          </Link>
        </div>

        {/* Session Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {session.title}
          </h1>
          <p className="text-slate-600">
            {session.durationHours} hour{session.durationHours !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Content coming soon stub */}
        {session.learningObjectives.length === 0 &&
          session.topics.length === 0 &&
          session.resources.length === 0 &&
          session.selfCheck.length === 0 && (
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
            <p className="text-slate-600 font-semibold">Content coming soon</p>
            <p className="text-slate-500 text-sm mt-1">
              Detailed content for this session is being developed. Check back for learning
              objectives, topics, resources, and practice questions.
            </p>
          </div>
        )}

        {/* Learning Objectives — server-rendered */}
        {session.learningObjectives.length > 0 && (
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
        )}

        {/* Topics — server-rendered */}
        {session.topics.length > 0 && (
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
        )}

        {/* Resources — server-rendered */}
        {session.resources.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Resources</h2>
            <div className="grid gap-3">
              {session.resources.map((resource, idx) => {
                const isInternal = resource.url.startsWith('/');
                return (
                  <a
                    key={idx}
                    href={resource.url}
                    target={isInternal ? '_self' : '_blank'}
                    rel={isInternal ? undefined : 'noopener noreferrer'}
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
                    {isInternal
                      ? <span className="text-slate-400 group-hover:text-slate-600 flex-shrink-0 mt-1 text-sm font-medium">View →</span>
                      : <ExternalLink className="text-slate-400 group-hover:text-slate-600 flex-shrink-0 mt-1" size={18} />
                    }
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/*
          Self-Check Quiz questions and explanations are server-rendered below
          for full crawlability. The explanations live in <details> so they are
          in the DOM but visually collapsed until the user reveals them.
          The interactive "Check Answer" highlighting is handled by SessionDetailClient.
        */}
        {session.selfCheck.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Self-Check Questions</h2>
            <div className="space-y-6">
              {session.selfCheck.map((question, qIdx) => (
                <div key={qIdx} className="card p-6 space-y-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Question {qIdx + 1}: {question.question}
                  </h3>

                  {/* Options — static list; interactive highlighting provided by client island */}
                  <ol className="space-y-2 list-none">
                    {question.options.map((option, oIdx) => (
                      <li
                        key={oIdx}
                        className={`p-3 rounded-lg border-2 text-slate-900 text-sm ${
                          oIdx === question.correctIndex
                            ? 'border-slate-200 bg-slate-50'
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <span className="font-semibold">{String.fromCharCode(65 + oIdx)}.</span>{' '}
                        {option}
                        {oIdx === question.correctIndex && (
                          <span className="ml-2 text-xs text-green-700 font-semibold">(correct)</span>
                        )}
                      </li>
                    ))}
                  </ol>

                  {/* Explanation always in DOM for SEO; uses <details> for visual tidiness */}
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm font-semibold text-blue-800 select-none">
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
        )}

        {/* Interactive client island: quiz highlighting + "Mark Complete" */}
        <SessionDetailClient sessionId={params.sessionId} />

        {/* Related in-app reference — server-rendered, crawlable */}
        {referenceAvailable && (
          <div className="card p-4 border border-slate-200 bg-slate-50">
            <Link
              href={`/reference/${session.id}`}
              className="font-semibold text-safety hover:text-yellow-500"
            >
              In-depth reference for this session →
            </Link>
            <p className="text-sm text-slate-600 mt-1">
              A deeper, regulation-by-regulation companion page for this lesson.
            </p>
          </div>
        )}

        {/* Prev / next navigation — server-rendered so it is crawlable */}
        <nav className="flex flex-wrap gap-3 justify-between border-t border-slate-200 pt-6">
          {prev ? (
            <Link
              href={`/plan/${prev.id}`}
              className="flex items-center gap-2 button-secondary max-w-[48%]"
            >
              <ChevronLeft size={18} className="flex-shrink-0" />
              <span className="truncate">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/plan/${next.id}`}
              className="flex items-center gap-2 button-secondary max-w-[48%] text-right"
            >
              <span className="truncate">{next.title}</span>
              <ChevronRight size={18} className="flex-shrink-0" />
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="text-center">
          <Link href="/lessons" className="text-sm text-slate-500 hover:text-safety font-semibold">
            ← Browse all {restriction.code} lessons and reference pages
          </Link>
        </div>
      </div>
    </main>
  );
}
