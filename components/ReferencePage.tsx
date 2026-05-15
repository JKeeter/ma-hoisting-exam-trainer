/**
 * ReferencePage — server component.
 *
 * All section and item bodies are rendered into the static HTML using native
 * <details>/<summary> elements so the content is crawlable by search engines
 * without any JavaScript.  The search box is a separate client island
 * (ReferenceSearch) that hides/shows sections dynamically when a query is typed.
 */

import { Zap, AlertTriangle } from 'lucide-react';
import BackButton from '@/components/BackButton';

export type ReferenceItem = {
  heading: string;
  body: string;
};

export type ReferenceSection = {
  id: string;
  title: string;
  icon: string;
  color: string;       // Tailwind border color class
  headerBg: string;   // Tailwind bg class
  critical?: boolean;
  content: ReferenceItem[];
};

export type QuickFact = {
  label: string;
  value: string;
};

export type ReferencePageProps = {
  title: string;
  subtitle: string;
  criticalAlert?: { heading: string; body: string; targetSectionId?: string };
  sections: ReferenceSection[];
  quickFacts?: QuickFact[];
  defaultOpenSections?: string[];
};

// ─── Markdown-lite renderer (runs server-side) ──────────────────────────────

function mdInline(s: string) {
  return s
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 rounded text-xs font-mono">$1</code>');
}

function renderBody(text: string) {
  return text.split('\n').map((line, i) => {
    const key = i;

    if (line.startsWith('### ')) {
      return (
        <p key={key} className="font-bold text-slate-800 text-sm mt-4 mb-1 uppercase tracking-wide">
          {line.slice(4)}
        </p>
      );
    }
    if (line.startsWith('## ')) {
      return (
        <p key={key} className="font-bold text-slate-900 mt-4 mb-1">
          {line.slice(3)}
        </p>
      );
    }
    if (/^\*\*.*\*\*$/.test(line.trim())) {
      return (
        <p key={key} className="font-bold text-slate-900 mt-3 mb-1">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    }
    if (line.startsWith('• ') || line.startsWith('- ')) {
      const raw = line.replace(/^[•\-] /, '');
      return (
        <li key={key} className="flex gap-2 text-slate-700 text-sm leading-relaxed">
          <span className="text-safety font-bold flex-shrink-0 mt-0.5">•</span>
          <span dangerouslySetInnerHTML={{ __html: mdInline(raw) }} />
        </li>
      );
    }
    if (line.startsWith('☐ ')) {
      const raw = line.slice(2);
      return (
        <li key={key} className="flex gap-2 text-slate-700 text-sm leading-relaxed">
          <span className="text-indigo-500 font-bold flex-shrink-0 mt-0.5">☐</span>
          <span dangerouslySetInnerHTML={{ __html: mdInline(raw) }} />
        </li>
      );
    }
    if (line.startsWith('✅ ') || line.startsWith('🟡 ') || line.startsWith('🔴 ')) {
      return (
        <li key={key} className="flex gap-2 text-slate-700 text-sm leading-relaxed">
          <span className="flex-shrink-0">{line.slice(0, 2)}</span>
          <span dangerouslySetInnerHTML={{ __html: mdInline(line.slice(3)) }} />
        </li>
      );
    }
    if (line === '' || line === '\n') return <div key={key} className="h-2" />;
    return (
      <p
        key={key}
        className="text-slate-700 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: mdInline(line) }}
      />
    );
  });
}

// ─── Server component ────────────────────────────────────────────────────────

export default function ReferencePage({
  title,
  subtitle,
  criticalAlert,
  sections,
  quickFacts,
  defaultOpenSections = [],
}: ReferencePageProps) {
  return (
    <main className="px-4 py-8 md:py-12 max-w-3xl mx-auto space-y-6">
      <div>
        <BackButton label="← Back" />
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>

      {criticalAlert && (
        <div className="flex gap-3 p-4 bg-red-50 border-2 border-red-400 rounded-lg">
          <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-bold text-red-900 text-sm">{criticalAlert.heading}</p>
            <p
              className="text-red-800 text-sm mt-1"
              dangerouslySetInnerHTML={{ __html: mdInline(criticalAlert.body) }}
            />
          </div>
        </div>
      )}

      {/*
        All sections and item bodies are rendered into the DOM using native
        <details>/<summary> elements.  This means every word of regulatory prose
        is in the static HTML and fully crawlable, while the UI still collapses
        by default so the page doesn't feel overwhelming on first load.
      */}
      <div className="space-y-4">
        {sections.map(section => {
          const isDefaultOpen = defaultOpenSections.includes(section.id);
          return (
            <details
              key={section.id}
              id={section.id}
              open={isDefaultOpen}
              className={`rounded-xl border-2 overflow-hidden ${section.color}`}
            >
              <summary
                className={`w-full flex justify-between items-center px-5 py-4 cursor-pointer list-none ${section.headerBg} hover:brightness-95 transition-all`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{section.icon}</span>
                  <h2 className={`font-bold text-left ${section.critical ? 'text-red-900' : 'text-slate-900'}`}>
                    {section.title}
                    {section.critical && (
                      <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full align-middle">
                        CRITICAL
                      </span>
                    )}
                  </h2>
                </div>
                {/* CSS-only chevron that flips when open */}
                <span className="text-slate-600 flex-shrink-0 select-none details-chevron">▼</span>
              </summary>

              <div className="divide-y divide-slate-100">
                {section.content.map((item, idx) => (
                  <details key={idx} className="group/item">
                    <summary className="w-full flex justify-between items-center px-5 py-3 bg-white hover:bg-slate-50 transition-colors cursor-pointer list-none">
                      <h3 className="font-semibold text-slate-800 text-sm">{item.heading}</h3>
                      <span className="text-slate-400 flex-shrink-0 select-none details-chevron text-xs">▼</span>
                    </summary>
                    <div className="px-5 pb-5 bg-white">
                      <div className="space-y-1 border-l-4 border-slate-200 pl-4">
                        {renderBody(item.body)}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          );
        })}
      </div>

      {quickFacts && quickFacts.length > 0 && (
        <div className="rounded-xl border-2 border-safety bg-yellow-50 p-5 space-y-4">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <Zap size={18} className="text-yellow-600" /> Exam Quick-Reference
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <div>
                  <span className="text-slate-600">{label}: </span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center pt-4">
        <BackButton label="← Return to session" className="button-secondary" />
      </div>
    </main>
  );
}
