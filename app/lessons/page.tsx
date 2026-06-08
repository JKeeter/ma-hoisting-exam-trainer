import type { Metadata } from 'next';
import Link from 'next/link';
import LessonsDirectory from '@/components/LessonsDirectory';

export const metadata: Metadata = {
  title: 'All Lessons — Massachusetts Hoisting Exam Study Library | Free MA Hoist',
  description:
    'Browse every Massachusetts hoisting engineer exam lesson and reference page — all 11 restriction classes (1A, 1B, 1C, 1D, 1E, 2A, 2B, 2C, 2A/1C, 3A, 4G) with learning objectives, topics, regulations, and self-check quizzes. Free, no account required.',
  alternates: { canonical: '/lessons' },
};

export default function LessonsIndexPage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <div className="content-max mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            All Lessons &amp; Reference Pages
          </h1>
          <p className="text-slate-700 leading-relaxed">
            Every study session for the Massachusetts hoisting engineer exam, organized by license
            restriction class and module. Each lesson includes learning objectives, the specific
            regulations and standards it covers, and self-check quiz questions with full
            explanations. Everything is free and readable without an account.
          </p>
          <p className="text-sm text-slate-600">
            Want a paced schedule instead of the full list?{' '}
            <Link href="/" className="text-safety hover:text-yellow-500 font-semibold underline">
              Generate a personalized week-by-week study plan
            </Link>{' '}
            for your class and available hours. New to the license system? Start with the{' '}
            <Link href="/guide" className="text-safety hover:text-yellow-500 font-semibold underline">
              licensing guide
            </Link>
            .
          </p>
        </header>

        <LessonsDirectory />
      </div>
    </main>
  );
}
