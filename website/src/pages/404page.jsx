import React from "react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-6 py-12 dark:bg-slate-900">
      <div className="text-center max-w-xl">
        {/* Animated 404 Header */}
        <h1 className="text-9xl font-black text-indigo-600 animate-bounce dark:text-indigo-400">
          404
        </h1>

        {/* Error Message */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Page not found
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or perhaps it never existed in the first place.
        </p>

        {/* Playful Visual Asset (CSS-based Graphic) */}
        <div className="my-8 flex justify-center">
          <div className="relative w-48 h-48 bg-indigo-100 rounded-full flex items-center justify-center animate-pulse dark:bg-slate-800">
            <svg
              className="w-24 h-24 text-indigo-500 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375-.336.375-.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375-.336.375-.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            {/* Question marks decoration */}
            <span className="absolute top-4 left-6 text-2xl font-bold text-indigo-400 rotate-12 animate-ping">
              ?
            </span>
            <span className="absolute bottom-6 right-6 text-3xl font-bold text-indigo-300 -rotate-12">
              ?
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
          >
            Go back home
          </a>
          <button
            onClick={() => window.history.back()}
            className="rounded-md px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-100 transition-colors duration-200 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800"
          >
            Previous page
          </button>
        </div>
      </div>
    </div>
  );
}
