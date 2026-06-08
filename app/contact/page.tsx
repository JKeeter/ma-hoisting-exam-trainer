import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Free MA Hoist',
  description:
    'How to get in touch with Free MA Hoist — report a content error, ask a question, or send feedback about the Massachusetts hoisting exam study tool.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <article className="max-w-2xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to home
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h1>
          <p className="text-slate-600">
            Free MA Hoist is an independent, one-person project. I read every message, though I may
            not be able to reply to all of them quickly.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Email</h2>
          <p className="text-slate-700 leading-relaxed">
            The best way to reach me is by email:
          </p>
          <p className="text-lg">
            <a
              href="mailto:admin@freemasshoist.com"
              className="text-safety hover:text-yellow-500 font-semibold underline"
            >
              admin@freemasshoist.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">What to write about</h2>
          <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Content errors.</strong> If a quiz answer, regulation citation, or reference
              page looks wrong, please tell me which page and what you believe is correct. Accuracy
              matters for a real licensing exam.
            </li>
            <li>
              <strong>Questions about the site.</strong> How it works, why a class is built out the
              way it is, or feature requests.
            </li>
            <li>
              <strong>General feedback.</strong> What helped, what was confusing, what you wish
              existed.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Please note: I cannot give legal advice, confirm your eligibility for a license, or
            answer on behalf of OPSI or the Commonwealth. For official questions about licensing,
            exams, fees, or scheduling, contact the Massachusetts Office of Public Safety and
            Inspections through{' '}
            <a
              href="https://www.mass.gov/hoisting-licensing-and-exams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-safety hover:text-yellow-500 underline"
            >
              Mass.gov
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">More about this site</h2>
          <p className="text-slate-700 leading-relaxed">
            The{' '}
            <Link href="/about" className="text-safety hover:text-yellow-500 font-semibold underline">
              About / FAQ page
            </Link>{' '}
            answers the most common questions, and the{' '}
            <Link href="/privacy" className="text-safety hover:text-yellow-500 font-semibold underline">
              Privacy Policy
            </Link>{' '}
            explains how data and advertising work.
          </p>
        </section>

        <div className="text-center">
          <Link href="/" className="button-secondary inline-block">← Return to home</Link>
        </div>
      </article>
    </main>
  );
}
