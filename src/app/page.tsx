import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-4 transition-colors duration-300">
      <header className="w-full flex justify-between items-center py-6 px-4 max-w-5xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            BnC Auth
          </span>
        </div>
        <nav className="flex gap-4">
          <Link
            href="/login"
            className="text-gray-900 text-xl dark:text-white hover:text-indigo-400 font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-gray-900 text-xl dark:text-white hover:text-green-400 font-medium transition-colors"
          >
            Signup
          </Link>
          
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          Welcome to{" "}
          <span className="text-indigo-600 dark:text-indigo-400">BnC Auth</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl">
          A modern authentication starter built with Next.js, featuring email
          verification, password reset, and a beautiful UI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
        
          <Link
            href="/login"
            className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg border border-gray-200 dark:border-gray-700"
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
        <ol className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-left text-gray-700 dark:text-gray-200 font-mono text-sm w-full max-w-lg shadow-lg space-y-2">
          <li>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              1.
            </span>{" "}
            Register with your email and password.
          </li>
          <li>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              2.
            </span>{" "}
            Verify your email address.
          </li>
          <li>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              3.
            </span>{" "}
            Login and manage your profile securely.
          </li>
          <li>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              4.
            </span>{" "}
            Forgot your password? Easily reset it via email.
          </li>
        </ol>
      </main>
      <footer className="w-full py-6 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/hmnsd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HmNsd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href="https://hmnsd.github.io/hmnsd-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-400"
          >
            About
          </a>
        </div>
        <span>
          © {new Date().getFullYear()} Secure Auth Next.js App by Brewncode
        </span>
      </footer>
    </div>
  );
}
