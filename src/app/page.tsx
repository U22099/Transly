import Link from "next/link";

export default function Home() {
  return (
    <main
      className="anim flex flex-col justify-center items-center gap-4 text-center bg-slate-100 dark:bg-gray-900 h-screen"
    >
      <h1 className="text-5xl md:text-7xl font-mono dark:text-white text-bold">
        Welcome to Transly
      </h1>
      <p className="font-mono dark:text-white max-w-3/4">
        A language translator with support for over 150+ languages and voice
        feature
      </p>
      <Link
        href="/home"
        className="animate-bounce bg-none border-black border-2 p-5 px-16 rounded-full text-bold font-mono dark:text-black dark:bg-white dark:border-none mt-5 text-2xl md:text-4xl hover:transform hover:animate-none hover:scale-[1.02] active:transform active:animate-none active:scale-[0.8] transition-transform duration-500"
      >
        Enter
      </Link>
    </main>
  );
}