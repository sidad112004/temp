"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/start');
  }, [router]);

  return null; // Since you're redirecting, there's nothing to render
}
