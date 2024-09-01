"use client"
import Link from 'next/link';

export default function Home() {
  return (
    <main
     className="flex flex-col justify-center items-center backdrop-blur-md gap-4 text-center bg-slate-100 dark:bg-violet-950">
      <h1 className="text-5xl md:text-7xl font-monospace dark:invert text-bold">Welcome to Transly</h1>
      <p className="font-monospace dark:invert"> A language translator with support for over 50+ languages and voice feature </p>
      <Link href="/home" className="animate-bounce bg-none border-black border-2 p-5 rounded-full text-bold font-monospace dark:invert dark:bg-white dark:border-none">Enter</Link>
    </main>
  );
}
