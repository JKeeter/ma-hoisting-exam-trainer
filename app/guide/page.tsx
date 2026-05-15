import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get a Massachusetts Hoisting Engineer License — Plain-Language Guide',
  description:
    'A plain-language guide to the Massachusetts hoisting engineer license: who needs one under MGL Chapter 146 §53, the restriction class system, how to apply through OPSI, fees, the exam, exemptions, and renewal.',
};

export default function GuidePage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <article className="max-w-2xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to study plan
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            How to Get a Massachusetts Hoisting Engineer License
          </h1>
          <p className="text-slate-600">
            A plain-language guide to who needs a hoisting license in Massachusetts, the
            restriction classes you can hold, how the application and exam work, and the
            exemptions written into state law. If you operate equipment that lifts, lowers, or
            digs, this is where to start.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            What a hoisting engineer license is — and who needs one
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A Massachusetts hoisting engineer license is a state-issued credential that
            authorizes you to operate powered hoisting machinery. It is required by{' '}
            <a
              href="https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53"
              className="text-safety hover:text-yellow-500 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Massachusetts General Laws Chapter 146, Section 53
            </a>
            , and the detailed rules are spelled out in the regulation known as 230 CMR 6.00.
            The license is administered by the Massachusetts Division of Occupational Licensure,
            specifically its Office of Public Safety and Inspections (OPSI).
          </p>
          <p className="text-slate-700 leading-relaxed">
            The most important thing to understand is the threshold test that determines whether
            a machine requires a licensed operator. It is an{' '}
            <strong>&ldquo;OR rule&rdquo;</strong>, not an &ldquo;and rule.&rdquo; A license is
            required if the machine does <em>any one</em> of the following:
          </p>
          <div className="card p-5 space-y-2">
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Lifts or lowers material <strong>more than 10 feet</strong>, or</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Handles loads <strong>over 500 pounds</strong>, or</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>
                  Uses a bucket or dipper <strong>larger than &frac14; cubic yard</strong>.
                </span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 italic pt-1">
              Meeting any single one of these three triggers the license requirement. A machine
              does not have to meet all three.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            In practice this captures most excavators, backhoes, front-end loaders, skid steers,
            telehandlers, forklifts, cranes, derricks, and overhead hoists used on construction
            and excavation sites in the Commonwealth. If you run that kind of equipment for work,
            you almost certainly need a license.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">The restriction class system</h2>
          <p className="text-slate-700 leading-relaxed">
            Massachusetts does not issue one generic hoisting license. Instead, the license is
            broken into <strong>restriction classes</strong> grouped by the type of machine. You
            apply for, test on, and carry only the classes that match the equipment you actually
            operate. Higher classes generally cover the lower, more specialized ones within the
            same family.
          </p>
          <div className="card p-5 space-y-4">
            <div>
              <h3 className="font-bold text-slate-900">Group 1 — Cranes</h3>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                <li><strong>1A</strong> — Friction (winch drum) cranes, derricks, and lattice boom machines.</li>
                <li><strong>1B</strong> — Hydraulic cranes, including telescoping-boom hydraulic cranes with wire rope.</li>
                <li><strong>1C</strong> — Telescoping-boom material handlers, loaders, and backhoes used to hoist.</li>
                <li><strong>1D</strong> — Industrial lift trucks and warehouse forklifts.</li>
                <li><strong>1E</strong> — Specialty cranes that do not fit the other Group 1 categories.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Group 2 — Excavating</h3>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                <li><strong>2A</strong> — Excavating machinery: crawler and rubber-tired excavators and backhoes.</li>
                <li><strong>2B</strong> — Specialty excavating equipment beyond the standard excavator family.</li>
                <li><strong>2C</strong> — Aerial lifts and elevating work platforms.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Group 3 — Pile Drivers &amp; Derricks</h3>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                <li><strong>3A</strong> — Pile drivers, derricks, and cableways.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Group 4 — Compact Hoisting</h3>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                <li><strong>4G</strong> — Compact hoisting machinery (smaller, lighter equipment within its own weight limits).</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Class names and groupings are defined in 230 CMR 6.00. Because the categories overlap
            and the lettering has been revised over time, always confirm the exact class for your
            machine against the current regulation before you apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">How to get licensed</h2>
          <p className="text-slate-700 leading-relaxed">
            The process is the same regardless of which class you are pursuing, and it is
            entirely state-run — there is no mandatory school, though many candidates take a
            prep course.
          </p>
          <div className="card p-5 space-y-3 text-slate-700">
            <p>
              <strong>Eligibility.</strong> You must be at least <strong>18 years old</strong>.
              There is no upper age limit and no formal education requirement to sit for the
              exam.
            </p>
            <p>
              <strong>Application.</strong> You apply through the Division of Occupational
              Licensure&rsquo;s Office of Public Safety and Inspections (OPSI). The application
              identifies which restriction class or classes you want to test on.
            </p>
            <p>
              <strong>Fee.</strong> There is a <strong>$75 non-refundable processing fee for
              each restriction class</strong> you apply for. The fee is not returned whether you
              pass or fail.
            </p>
            <p>
              <strong>The exam.</strong> You must pass a written, multiple-choice examination
              administered by OPSI. The passing score is a <strong>minimum of 70%</strong>. The
              test covers Massachusetts law and regulations alongside equipment-specific safety,
              hand signals, load handling, and inspection.
            </p>
            <p>
              <strong>If you fail.</strong> A failed exam carries a mandatory{' '}
              <strong>60-day waiting period</strong> before you may test again for that class.
            </p>
            <p>
              <strong>Term and renewal.</strong> A hoisting license is valid for{' '}
              <strong>two years</strong> and must be renewed to stay current. Renewing on time
              avoids having to re-examine.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Official application forms, current fee schedules, and exam scheduling details are
            published on the{' '}
            <a
              href="https://www.mass.gov/info-details/hoisting-statutes-and-regulations"
              className="text-safety hover:text-yellow-500 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mass.gov hoisting statutes and regulations page
            </a>
            . Because fees and procedures can change, treat Mass.gov as the source of truth.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Exemptions under MGL §53</h2>
          <p className="text-slate-700 leading-relaxed">
            The statute itself carves out several situations where a hoisting engineer license is
            not required. These exemptions are narrow — they apply only when the specific
            conditions are met:
          </p>
          <div className="card p-5">
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Operators working <strong>exclusively for agricultural purposes</strong> on agricultural land.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Workers in <strong>supervised public-utility training programs</strong> approved for that purpose.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Certain <strong>industrial lift-truck use on an employer&rsquo;s own company property</strong> under on-site supervision.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Students in <strong>vocational programs</strong> operating under a licensed instructor&rsquo;s supervision.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <span>Trainees in <strong>approved apprenticeship programs</strong> registered with the state, working under a licensed operator.</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed">
            If your work does not fall squarely inside one of these exemptions, assume the
            license is required. The full text is in{' '}
            <a
              href="https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53"
              className="text-safety hover:text-yellow-500 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MGL Chapter 146, Section 53
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Your next step</h2>
          <p className="text-slate-700 leading-relaxed">
            The fastest way to prepare is to pick the restriction class that matches the
            equipment you operate, then study only what that class requires. This site builds a{' '}
            <strong>personalized study plan</strong> around your class so you are not wasting time
            on material that will not be on your exam.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Head to the{' '}
            <Link href="/" className="text-safety hover:text-yellow-500 font-semibold underline">
              study plan generator
            </Link>{' '}
            to choose your class and get started. Each session comes with its own in-app
            reference material covering the regulations, equipment specifics, and safety
            standards you will be tested on. When you are ready to drill the field signals, the{' '}
            <Link
              href="/hand-signals"
              className="text-safety hover:text-yellow-500 font-semibold underline"
            >
              hand signals guide
            </Link>{' '}
            walks through every standard signal required for excavating and crane work.
          </p>
        </section>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 space-y-1">
          <p className="font-semibold text-slate-900">A note on accuracy</p>
          <p>
            This guide is an unofficial study aid. License classes, fees, and procedures are set
            by the Commonwealth and can change. Always verify the current requirements against{' '}
            <a
              href="https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery"
              className="text-safety hover:text-yellow-500 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              230 CMR 6.00
            </a>{' '}
            and MGL Chapter 146 on Mass.gov before you apply.
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="button-secondary inline-block">
            ← Return to study plan
          </Link>
        </div>
      </article>
    </main>
  );
}
