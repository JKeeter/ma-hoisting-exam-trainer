import ReferencePage from '@/components/ReferencePage';
import { getReferenceContent } from '@/lib/reference-content/index';
import Link from 'next/link';

// Pre-generate all known reference pages at build time
export function generateStaticParams() {
  return [
    '2a-m1-s1', '2a-m1-s2', '2a-m1-s3',
    '2a-m2-s1', '2a-m2-s2', '2a-m2-s3',
    '2a-m3-s1', '2a-m3-s2', '2a-m3-s3',
    '2a-m4-s1', '2a-m4-s2', '2a-m4-s3',
    '2a1c-m1-s1', '2a1c-m1-s2', '2a1c-m1-s3',
    '2a1c-m2-s1', '2a1c-m2-s2', '2a1c-m2-s3',
    '2a1c-m3-s1', '2a1c-m3-s2', '2a1c-m3-s3',
    '2a1c-m4-s1', '2a1c-m4-s2', '2a1c-m4-s3',
  ].map(sessionId => ({ sessionId }));
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
        <Link href="/plan" className="button-secondary inline-block">← Back to Plan</Link>
      </main>
    );
  }

  return <ReferencePage {...content} />;
}
