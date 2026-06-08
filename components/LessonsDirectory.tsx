import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';
import { hasReferencePage } from '@/lib/reference-content/ids';

/**
 * LessonsDirectory — a fully static, crawlable index of every restriction class,
 * module, lesson, and reference page on the site.
 *
 * This is the canonical fix for the "orphaned content" problem: it emits a real
 * <a href> to all ~150 content pages so search engines (and AdSense's reviewer)
 * can reach them by following links, not just via the XML sitemap.
 *
 * It is a plain (server-renderable) component with no client hooks, so it can be
 * rendered inside both the server /lessons page and the client /plan fallback and
 * still appear in the static HTML.
 */
export default function LessonsDirectory({ headingLevel = 'h2' }: { headingLevel?: 'h2' | 'h3' }) {
  const ClassHeading = headingLevel;

  return (
    <div className="space-y-10">
      {curriculum.map((restriction) => {
        const modules = [...restriction.modules].sort((a, b) => a.orderInCourse - b.orderInCourse);
        const sessionCount = modules.reduce((n, m) => n + m.sessions.length, 0);

        return (
          <section key={restriction.code} className="space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <ClassHeading className="text-2xl font-bold text-slate-900">
                {restriction.code} — {restriction.name}
              </ClassHeading>
              <p className="text-sm text-slate-600 mt-1">
                {restriction.description}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {sessionCount} lessons · {restriction.totalHours} hours of study material
              </p>
            </div>

            <div className="space-y-5">
              {modules.map((mod) => (
                <div key={mod.id} className="space-y-2">
                  <h3 className="font-semibold text-slate-800">{mod.title}</h3>
                  <ul className="space-y-1.5 pl-1">
                    {mod.sessions.map((session) => (
                      <li key={session.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <Link
                          href={`/plan/${session.id}`}
                          className="text-slate-700 hover:text-safety underline-offset-2 hover:underline"
                        >
                          {session.title}
                        </Link>
                        <span className="text-xs text-slate-400">
                          {session.durationHours} hr{session.durationHours !== 1 ? 's' : ''}
                        </span>
                        {hasReferencePage(session.id) && (
                          <Link
                            href={`/reference/${session.id}`}
                            className="text-xs font-semibold text-safety hover:text-yellow-600 hover:underline"
                          >
                            Reference →
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
