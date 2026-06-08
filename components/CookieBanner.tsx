'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cookieConsent';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setShow(true);
      }
    } catch {
      // localStorage unavailable (private mode, blocked storage, etc.) — silently skip
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie and storage notice"
      className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-slate-100 px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
        <p className="text-sm leading-relaxed flex-1">
          This site uses cookies and your browser&rsquo;s local storage to remember your selected
          study class and track which sessions you have completed — local storage is required for
          progress tracking without an account. We also serve advertising that may set its own
          cookies. By continuing to use Free MA Hoist, you accept this. See our{' '}
          <Link
            href="/privacy"
            className="underline text-safety hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <button
          onClick={accept}
          className="button-primary text-sm whitespace-nowrap px-6"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
