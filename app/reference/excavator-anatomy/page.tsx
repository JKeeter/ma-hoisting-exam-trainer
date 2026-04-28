'use client';

// This page redirects to the dynamic reference route for 2a-m2-s1
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExcavatorAnatomyRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/reference/2a-m2-s1');
  }, [router]);
  return null;
}
