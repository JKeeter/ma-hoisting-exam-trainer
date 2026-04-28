'use client';

import ReferencePage from '@/components/ReferencePage';
import { getReferenceContent } from '@/lib/reference-content/index';
import Link from 'next/link';

export default function ReferenceSessionPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const { sessionId } = params;
  const content = getReferenceContent(sessionId);

  if (!content) {
    return (
      <main className="px-4 py-12 max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Reference Not Found</h1>
        <p className="text-slate-600">No reference content found for session <code className="bg-slate-100 px-2 py-1 rounded">{sessionId}</code>.</p>
        <Link href="/plan" className="button-secondary inline-block">← Back to Plan</Link>
      </main>
    );
  }

  return <ReferencePage {...content} />;
}
