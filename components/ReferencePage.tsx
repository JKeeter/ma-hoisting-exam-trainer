'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp, AlertTriangle, Search, Zap } from 'lucide-react';

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

// Renders bold, italic, bullets, and checkboxes from a markdown-lite body string
function renderBody(text: string) {
  return text.split('\n').map((line, i) => {
    const key = i;

    if (line.startsWith('### ')) {
      return <p key={key} className="font-bold text-slate-800 text-sm mt-4 mb-1 uppercase tracking-wide">{line.slice(4)}</p>;
    }
    if (line.startsWith('## ')) {
      return <p key={key} className="font-bold text-slate-900 mt-4 mb-1">{line.slice(3)}</p>;
    }
    if (/^\*\*.*\*\*$/.test(line.trim())) {
      return <p key={key} className="font-bold text-slate-900 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
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
    return <p key={key} className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: mdInline(line) }} />;
  });
}

function mdInline(s: string) {
  return s
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 rounded text-xs font-mono">$1</code>');
}

export default function ReferencePage({
  title,
  subtitle,
  criticalAlert,
  sections,
  quickFacts,
  defaultOpenSections = [],
}: ReferencePageProps) {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(defaultOpenSections));
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map(s => ({
        ...s,
        content: s.content.filter(
          c => c.heading.toLowerCase().includes(q) || c.body.toLowerCase().includes(q)
        ),
      }))
      .filter(s => s.content.length > 0 || s.title.toLowerCase().includes(q));
  }, [query, sections]);

  const expandAll = () => {
    setOpenSections(new Set(sections.map(s => s.id)));
    setOpenItems(new Set(sections.flatMap(s => s.content.map((_, i) => `${s.id}-${i}`))));
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const toggleItem = (key: string) => {
    setOpenItems(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });
  };

  return (
    <main className="px-4 py-8 md:py-12 max-w-3xl mx-auto space-y-6">
      <div>
        <button onClick={() => router.back()} className="text-safety hover:text-yellow-500 font-semibold text-sm">
          ← Back
        </button>
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
            <p className="text-red-800 text-sm mt-1"
              dangerouslySetInnerHTML={{ __html: mdInline(criticalAlert.body) }} />
          </div>
        </div>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); if (e.target.value) expandAll(); }}
          placeholder="Search regulations, procedures, specs…"
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety text-sm"
        />
      </div>

      {!query && (
        <div className="flex flex-wrap gap-2">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => { setOpenSections(p => new Set([...p, s.id])); setTimeout(() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${s.critical ? 'border-red-400 text-red-700 bg-red-50 hover:bg-red-100' : 'border-slate-300 text-slate-600 bg-white hover:bg-slate-50'}`}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {filtered.map(section => {
          const isOpen = openSections.has(section.id);
          return (
            <div key={section.id} id={section.id} className={`rounded-xl border-2 overflow-hidden ${section.color}`}>
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex justify-between items-center px-5 py-4 ${section.headerBg} hover:brightness-95 transition-all`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{section.icon}</span>
                  <h2 className={`font-bold text-left ${section.critical ? 'text-red-900' : 'text-slate-900'}`}>
                    {section.title}
                    {section.critical && (
                      <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full align-middle">CRITICAL</span>
                    )}
                  </h2>
                </div>
                {isOpen ? <ChevronUp size={20} className="text-slate-600 flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-600 flex-shrink-0" />}
              </button>

              {isOpen && (
                <div className="divide-y divide-slate-100">
                  {section.content.map((item, idx) => {
                    const itemKey = `${section.id}-${idx}`;
                    const itemOpen = openItems.has(itemKey);
                    return (
                      <div key={idx}>
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full flex justify-between items-center px-5 py-3 bg-white hover:bg-slate-50 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-slate-800 text-sm">{item.heading}</h3>
                          {itemOpen
                            ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0" />
                            : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />}
                        </button>
                        {itemOpen && (
                          <div className="px-5 pb-5 bg-white">
                            <div className="space-y-1 border-l-4 border-slate-200 pl-4">
                              {renderBody(item.body)}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No results for "<span className="font-semibold">{query}</span>"
        </div>
      )}

      {quickFacts && quickFacts.length > 0 && !query && (
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
        <button onClick={() => router.back()} className="button-secondary">← Return to session</button>
      </div>
    </main>
  );
}
