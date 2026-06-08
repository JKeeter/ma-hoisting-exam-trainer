import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Free MA Hoist',
  description:
    'Privacy policy for Free MA Hoist: what data we store, how local storage and optional sign-in work, and how third-party advertising cookies (including Google AdSense) are used.',
  alternates: { canonical: '/privacy' },
};

const EFFECTIVE_DATE = 'June 7, 2026';

export default function PrivacyPage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <article className="max-w-2xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-safety hover:text-yellow-500 font-semibold">
            ← Back to home
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: {EFFECTIVE_DATE}</p>
        </header>

        <section className="space-y-3">
          <p className="text-slate-700 leading-relaxed">
            This Privacy Policy explains what information Free MA Hoist
            (<a href="https://www.freemasshoist.com" className="text-safety hover:text-yellow-500 underline">www.freemasshoist.com</a>)
            collects, how it is used, and the choices you have. Free MA Hoist is a free, independent
            study tool for the Massachusetts hoisting engineer exam. It is not affiliated with the
            Office of Public Safety and Inspections (OPSI) or the Commonwealth of Massachusetts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Information we store</h2>
          <p className="text-slate-700 leading-relaxed">
            The site is designed to work without an account, and most data stays on your own device:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Local storage on your device.</strong> Your selected license restriction class,
              your chosen study hours per week, which sessions you have marked complete, and your
              acknowledgment of the cookie notice are stored in your browser&rsquo;s local storage.
              This data lives on your device, is scoped to this site, and is not transmitted to us
              unless you choose to sign in. Clearing your browser data removes it.
            </li>
            <li>
              <strong>Optional account (sign-in).</strong> If you choose to sign in to sync progress
              across devices, we store your email address and your study progress using Amazon Web
              Services (Amazon Cognito for authentication and a database for progress). Sign-in is
              entirely optional and is only used to restore your plan on another device.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            We do not sell your personal information. We do not run our own analytics or tracking
            beyond what is described here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Cookies and advertising</h2>
          <p className="text-slate-700 leading-relaxed">
            Free MA Hoist is supported by display advertising. We use{' '}
            <strong>Google AdSense</strong> to serve ads. To do this, Google and its partners may use
            cookies and similar technologies:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on your prior
              visits to this and other websites.
            </li>
            <li>
              Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to
              you based on your visits to this site and/or other sites on the Internet.
            </li>
            <li>
              You may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-safety hover:text-yellow-500 underline"
              >
                Google Ad Settings
              </a>
              . You can also opt out of a third-party vendor&rsquo;s use of cookies for personalized
              advertising by visiting{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-safety hover:text-yellow-500 underline"
              >
                www.aboutads.info
              </a>
              .
            </li>
            <li>
              For more on how Google uses information from sites that use its services, see{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-safety hover:text-yellow-500 underline"
              >
                How Google uses information from sites or apps that use our services
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-safety hover:text-yellow-500 underline"
              >
                Google&rsquo;s advertising policies
              </a>
              .
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            When you first visit, a notice at the bottom of the screen informs you of this use of
            cookies and local storage. Continuing to use the site indicates your acceptance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Third-party services</h2>
          <p className="text-slate-700 leading-relaxed">
            The site is hosted on Amazon Web Services (Amazon S3 and CloudFront). Advertising is
            provided by Google AdSense. Optional sign-in uses Amazon Cognito. Each of these providers
            processes data according to its own privacy policy. Outbound links to official sources
            such as Mass.gov and OSHA.gov are governed by those sites&rsquo; own privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Children&rsquo;s privacy</h2>
          <p className="text-slate-700 leading-relaxed">
            This site is intended for adults preparing for an occupational license exam (the minimum
            age for a Massachusetts hoisting license is 18). It is not directed at children under 13,
            and we do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Your choices</h2>
          <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
            <li>You can use the entire site as a guest without signing in.</li>
            <li>You can clear local storage at any time through your browser settings.</li>
            <li>You can block cookies through your browser, though some features may not persist.</li>
            <li>You can opt out of personalized ads using the Google and aboutads.info links above.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Changes to this policy</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy as the site evolves or as advertising and hosting
            providers change. The &ldquo;Last updated&rdquo; date above reflects the most recent
            revision.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p className="text-slate-700 leading-relaxed">
            Questions about this policy? See the{' '}
            <Link href="/contact" className="text-safety hover:text-yellow-500 font-semibold underline">
              contact page
            </Link>
            .
          </p>
        </section>

        <div className="text-center">
          <Link href="/" className="button-secondary inline-block">← Return to home</Link>
        </div>
      </article>
    </main>
  );
}
