"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { UserCircleIcon, ArrowRightOnRectangleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <header className="w-full p-4 bg-white shadow">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            Task Manager
          </h1>
          <div>
            {session ? (
              <span className="flex items-center gap-2 text-gray-700">
                <UserCircleIcon className="h-6 w-6 text-gray-500" />
                Welcome, {session.user?.name || session.user?.email}
              </span>
            ) : (
              <button
                onClick={() => signIn()}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                Sign In
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center text-center p-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Organize Your Tasks Effortlessly
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Welcome to Task Manager, the ultimate tool to streamline your daily
          tasks and boost productivity. Stay on top of your projects with
          intuitive task management.
        </p>

        <div className="mt-8">
          {session ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Go to Dashboard
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Get Started
            </button>
          )}
        </div>
      </main>

      <footer className="w-full py-4 bg-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </footer>
    </div>
  );
}
