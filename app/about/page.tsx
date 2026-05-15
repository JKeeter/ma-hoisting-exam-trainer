import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Free MA Hoist — Free Massachusetts Hoisting Exam Study Tool (FAQ)',
  description:
    'About this free, independent Massachusetts hoisting engineer exam study tool — how it works, where the content comes from, privacy, and answers to common questions.',
};

export default function AboutPage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <article className="max-w-2xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to study plan
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About Free MA Hoist</h1>
          <p className="text-slate-600">
            A free, independent study tool for the Massachusetts hoisting engineer exam. This page covers what
            the site is, how it works, where the content comes from, and answers to the questions we get most
            often.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">What is this site?</h2>
          <p className="text-slate-700 leading-relaxed">
            Free MA Hoist is a self-study trainer for the Massachusetts hoisting engineer license exam administered
            by the Office of Public Safety and Inspections (OPSI). For each of the Massachusetts restriction
            classes — 1A, 1B, 1C, 1D, 1E, 2A, 2B, 2C, 2A/1C, 3A, and 4G — the site provides a structured curriculum
            of study sessions covering the regulations, equipment, safety practices, and exam topics specific to
            that class.
          </p>
          <p className="text-slate-700 leading-relaxed">
            It is an <strong>unofficial study aid</strong>. It is not affiliated with OPSI, the Massachusetts
            Division of Occupational Licensure, the legislature, or any training school. It does not certify you,
            score the official exam, or substitute for hands-on operator training.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">How does it work?</h2>
          <p className="text-slate-700 leading-relaxed">
            Pick the restriction class you are testing on (for example, 2A for excavators) and the number of hours
            per week you can dedicate to study. The site uses the published session lengths to build a week-by-week
            plan: each week&rsquo;s sessions add up to roughly your available hours, ordered from the legal and
            regulatory foundation through equipment systems, safe operation, and finally exam-style review.
          </p>
          <p className="text-slate-700 leading-relaxed">Each session has:</p>
          <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
            <li><strong>Learning objectives</strong> — what you should be able to do or state after the session.</li>
            <li><strong>Topics covered</strong> — the specific subject matter for that block of study.</li>
            <li><strong>Resources</strong> — direct links to the relevant Mass.gov statutes and regulations and to OSHA standards, plus in-app reference pages where available.</li>
            <li><strong>Self-check questions</strong> — multiple-choice questions with full explanations so you can confirm understanding before moving on.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Your selected class, hours, and progress are saved to your browser&rsquo;s local storage so you can
            come back and pick up where you left off without an account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Is it really free?</h2>
          <p className="text-slate-700 leading-relaxed">
            Yes. Every page of the curriculum, every quiz, every reference page, and every guide is free to read
            and use. The site is supported by display advertising — that is the entire business model. There is
            no paywall, no premium tier, no upsell to a paid course, and no required signup. We do not sell
            training materials or operate a school.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Do I need to sign in?</h2>
          <p className="text-slate-700 leading-relaxed">
            No. Sign-in is optional. By default, your study plan and progress are stored locally in your browser
            — clear your browser data and they disappear. The optional sign-in is provided as a convenience for
            people who want to track their progress across multiple devices (for example, studying on a phone at
            lunch and on a laptop in the evening). If you only ever study on one device, you can ignore the
            sign-in and use the site fully as a guest.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Where does the content come from?</h2>
          <p className="text-slate-700 leading-relaxed">
            The regulatory portions of the curriculum are derived from the public Massachusetts statutes and
            regulations governing hoisting licensure — primarily{' '}
            <a
              href="https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-safety hover:text-yellow-500 font-semibold underline"
            >
              MGL Chapter 146
            </a>{' '}
            and{' '}
            <a
              href="https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-safety hover:text-yellow-500 font-semibold underline"
            >
              230 CMR 6.00
            </a>
            . Equipment-specific content draws on the published OSHA standards in 29 CFR 1926 (Construction) and
            29 CFR 1910 (General Industry), the relevant ASME B30 series and ANSI MEWP standards, and the SAE
            hand-signal standards referenced by 230 CMR 6.00.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The trainer&rsquo;s structure (sessions, learning objectives, quiz format) is original work. The
            underlying regulatory facts are public-domain statute and regulation. When in doubt, the official
            sources on Mass.gov are authoritative.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">How accurate is the content?</h2>
          <p className="text-slate-700 leading-relaxed">
            We aim to be accurate to the current published regulation, but you should treat this site as a study
            aid, not as the final word on what is required by law. Fees, exam content, and procedures are set by
            the Commonwealth and can change without notice. If a quiz question or reference page conflicts with
            what you see on Mass.gov today, trust Mass.gov.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If you spot something that looks wrong, please flag it — accuracy matters for a real exam.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            Will this prepare me for the exam by itself?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            For most people, no — and we would not recommend treating any single resource that way. The
            Massachusetts hoisting exam tests both classroom knowledge and machinery understanding that is best
            built through hands-on time with the equipment. Use this trainer to systematically cover the
            regulatory and theoretical material on a schedule, and pair it with operator experience under a
            licensed engineer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Privacy, cookies, and local storage</h2>
          <p className="text-slate-700 leading-relaxed">
            Your selected restriction class, hours per week, and which sessions you have marked complete are
            stored in your browser&rsquo;s <strong>local storage</strong>. Local storage is technically distinct
            from a cookie, but functionally similar — it is data stored on your own device, scoped to this site,
            and not transmitted back to a server. Local storage is required for the progress-tracking feature to
            work without an account; if you block site storage, your selections will not persist between visits.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If you choose to sign in, that progress is also stored against your account so it can sync across
            devices. We do not sell your data. The site shows display ads served by Google AdSense; AdSense may
            set its own cookies in accordance with Google&rsquo;s published policies.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When you first visit, a brief notice at the bottom of the screen explains this use of cookies and
            local storage. Clicking <strong>Accept</strong> dismisses the notice and records your acknowledgment
            locally so it does not reappear on every page load.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Who built this? (And the &ldquo;beta&rdquo; label)</h2>
          <p className="text-slate-700 leading-relaxed">
            Free MA Hoist started as a personal project. I built it for myself while studying for my own
            Massachusetts hoisting exam — the regulatory material is dense and scattered across multiple state
            and federal sources, and I wanted a clean, structured walk-through. After I had it working, I figured
            other people studying for the same exam might find it useful too, so I made it free and open to
            anyone.
          </p>
          <p className="text-slate-700 leading-relaxed">
            It is labeled <strong>beta</strong> on the homepage because it is genuinely still a work in progress:
            content gets refined as I spot errors, some restriction classes are more thoroughly built out than
            others, and the user experience is going to keep improving. The site is not affiliated with OPSI, the
            Division of Occupational Licensure, or any commercial training school. It is, at best, perhaps a
            useful study tool — there are no guarantees of accuracy, and you should always verify regulatory
            specifics against the current text on Mass.gov before relying on anything here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Ready to start?</h2>
          <p className="text-slate-700 leading-relaxed">
            Head to the{' '}
            <Link href="/" className="text-safety hover:text-yellow-500 font-semibold underline">
              study plan generator
            </Link>{' '}
            to pick your class. If you are still figuring out which class you need, the{' '}
            <Link href="/guide" className="text-safety hover:text-yellow-500 font-semibold underline">
              licensing guide
            </Link>{' '}
            walks through the system in plain language. And the{' '}
            <Link href="/hand-signals" className="text-safety hover:text-yellow-500 font-semibold underline">
              hand signals reference
            </Link>{' '}
            covers the SAE J1307 signals required by 230 CMR 6.00 for crane and excavator work.
          </p>
        </section>

        <div className="text-center">
          <Link href="/" className="button-secondary inline-block">
            ← Return to study plan
          </Link>
        </div>
      </article>
    </main>
  );
}
