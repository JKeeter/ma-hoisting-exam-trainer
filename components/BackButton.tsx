'use client';

import { useRouter } from 'next/navigation';

export default function BackButton({ label = '← Back', className = '' }: { label?: string; className?: string }) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={`text-safety hover:text-yellow-500 font-semibold text-sm ${className}`}>
      {label}
    </button>
  );
}
