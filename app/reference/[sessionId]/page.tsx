import { Metadata } from 'next';
import ReferencePage from '@/components/ReferencePage';
import { getReferenceContent } from '@/lib/reference-content/index';
import { referenceSessionIds } from '@/lib/reference-content/ids';
import Link from 'next/link';

// Pre-generate all known reference pages at build time
export function generateStaticParams() {
  return referenceSessionIds.map(sessionId => ({ sessionId }));
}

export async function generateMetadata({
  params,
}: {
  params: { sessionId: string };
}): Promise<Metadata> {
  const content = getReferenceContent(params.sessionId);
  if (!content) {
    return { title: 'Reference Not Found | MA Hoisting License Trainer' };
  }
  const description = `${content.subtitle} — in-depth regulatory reference covering ${
    content.sections.slice(0, 3).map(s => s.title).join(', ')
  }.`;
  return {
    title: `${content.title} | MA Hoisting License Trainer`,
    description,
    alternates: { canonical: `/reference/${params.sessionId}` },
  };
}

export default function ReferenceSessionPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const content = getReferenceContent(params.sessionId);

  if (!content) {
    return (
      <main className="px-4 py-12 max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Reference Not Found</h1>
        <p className="text-slate-600">
          No reference content found for session{' '}
          <code className="bg-slate-100 px-2 py-1 rounded">{params.sessionId}</code>.
        </p>
        <Link href="/lessons" className="button-secondary inline-block">Browse all lessons</Link>
      </main>
    );
  }

  return (
    <>
      <ReferencePage {...content} />
      {/* Server-rendered, crawlable navigation so reference pages aren't dead-ends */}
      <div className="px-4 pb-12 max-w-3xl mx-auto">
        <nav className="border-t border-slate-200 pt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href={`/plan/${params.sessionId}`}
            className="text-safety hover:text-yellow-500 font-semibold"
          >
            ← Lesson for this reference
          </Link>
          <Link href="/lessons" className="text-slate-500 hover:text-safety font-semibold">
            All lessons &amp; reference pages
          </Link>
        </nav>
      </div>
    </>
  );
}
