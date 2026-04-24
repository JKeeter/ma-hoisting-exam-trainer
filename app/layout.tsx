import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MA Hoisting Exam Trainer',
  description: 'Personalized study plan for Massachusetts hoisting engineer license',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <footer className="bg-slate-50 border-t border-slate-200 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center text-sm text-slate-600 space-y-2">
            <p className="text-xs">Unofficial study aid. Not affiliated with the MA Office of Public Safety and Inspections (OPSI).</p>
            <p className="text-xs">Always verify regulatory requirements against the current 230 CMR 6.00 and MGL Chapter 146 on mass.gov.</p>
            <p className="text-xs">This tool does not substitute for hands-on operator training or supervised practical experience.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
