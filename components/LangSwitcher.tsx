'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ORIGIN = 'https://www.freemasshoist.com';
const TRANSLATE_ORIGIN = 'https://www-freemasshoist-com.translate.goog';
const TRANSLATE_PARAMS = '?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es';

export function LangSwitcher() {
  const pathname = usePathname();
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onTranslate = window.location.hostname.endsWith('translate.goog');
    setIsTranslated(onTranslate);
    if (!onTranslate) return;

    // On translate.goog, intercept same-origin link clicks and force a full
    // navigation so Google re-translates the next page (Next.js client-side
    // routing would otherwise replace the DOM with untranslated content).
    const handler = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = href;
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  const path = pathname || '/';
  const enHref = `${ORIGIN}${path}`;
  const esHref = `${TRANSLATE_ORIGIN}${path}${TRANSLATE_PARAMS}`;

  return (
    <div className="flex items-center gap-1 text-xs" role="group" aria-label="Language">
      <a
        href={enHref}
        className={`px-2 py-1 rounded transition-colors ${
          !isTranslated
            ? 'bg-safety text-slate-900 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-label="View site in English"
        aria-current={!isTranslated ? 'true' : undefined}
      >
        EN
      </a>
      <span className="text-slate-300" aria-hidden>|</span>
      <a
        href={esHref}
        className={`px-2 py-1 rounded transition-colors ${
          isTranslated
            ? 'bg-safety text-slate-900 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-label="Ver sitio en español (traducción automática)"
        aria-current={isTranslated ? 'true' : undefined}
      >
        ES
      </a>
    </div>
  );
}
