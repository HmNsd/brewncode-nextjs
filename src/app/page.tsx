import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center px-4">
      <header className="w-full flex justify-between items-center py-6 px-4 max-w-5xl">
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl font-bold text-white tracking-tight">
            Auth Next.js App
          </span>
        </div>
        <nav className="flex gap-4">
          <Link
            href="/login"
            className="text-white hover:text-indigo-300 font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-green-300 font-medium transition-colors"
          >
            Signup
          </Link>
          <Link
            href="/getstarted"
            className="text-white hover:text-purple-300 font-medium transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to{" "}
          <span className="text-indigo-400">Secure Auth</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
          A modern authentication starter built with Next.js, featuring email
          verification, password reset, and a beautiful UI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/getstarted"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg border border-white/20"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
          >
            Signup
          </Link>
        </div>
        <ol className="bg-white/10 rounded-lg p-6 text-left text-gray-200 font-mono text-sm w-full max-w-lg shadow-lg space-y-2">
          <li>
            <span className="font-bold text-indigo-300">1.</span> Register with
            your email and password.
          </li>
          <li>
            <span className="font-bold text-indigo-300">2.</span> Verify your
            email address.
          </li>
          <li>
            <span className="font-bold text-indigo-300">3.</span> Login and
            manage your profile securely.
          </li>
          <li>
            <span className="font-bold text-indigo-300">4.</span> Forgot your
            password? Easily reset it via email.
          </li>
        </ol>
      </main>
      <footer className="w-full py-6 flex flex-col items-center gap-2 text-gray-400 text-sm">
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            Learn Next.js
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            Examples
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            Next.js Home
          </a>
        </div>
        <span>© {new Date().getFullYear()} Auth Next.js App</span>
      </footer>
    </div>
  );
}
