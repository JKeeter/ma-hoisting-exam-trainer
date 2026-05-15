import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { AuthProvider } from '@/components/AuthProvider';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MA Hoisting Exam Trainer',
  description: 'Personalized study plan for Massachusetts hoisting engineer license',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1783264454378473"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
            <Link href="/" className="font-bold text-slate-900 hover:text-safety transition-colors">
              Free MA Hoist
            </Link>
            <nav className="flex gap-4 text-sm text-slate-600">
              <Link href="/guide" className="hover:text-safety transition-colors">Licensing Guide</Link>
              <Link href="/hand-signals" className="hover:text-safety transition-colors">Hand Signals</Link>
              <Link href="/about" className="hover:text-safety transition-colors">About</Link>
            </nav>
          </div>
        </header>
        <AuthProvider>
          <div className="min-h-screen bg-white">
            {children}
          </div>
        </AuthProvider>
        <footer className="bg-slate-50 border-t border-slate-200 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center text-sm text-slate-600 space-y-2">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs pb-2 border-b border-slate-200 mb-2">
              <Link href="/" className="hover:text-safety transition-colors">Home</Link>
              <Link href="/guide" className="hover:text-safety transition-colors">Licensing Guide</Link>
              <Link href="/hand-signals" className="hover:text-safety transition-colors">Hand Signals</Link>
              <Link href="/about" className="hover:text-safety transition-colors">About / FAQ</Link>
            </div>
            <p className="text-xs">Unofficial study aid. Not affiliated with the MA Office of Public Safety and Inspections (OPSI).</p>
            <p className="text-xs">Always verify regulatory requirements against the current 230 CMR 6.00 and MGL Chapter 146 on mass.gov.</p>
            <p className="text-xs">This tool does not substitute for hands-on operator training or supervised practical experience.</p>
            <p className="text-xs text-slate-400 pt-1">Homepage photos by Dadam Eri, FLY&amp;I, Adrian Sulyok, and Kseniia Ilinykh on Unsplash.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
