"use client";

import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 text-center
                   transition-all duration-300 hover:shadow-md">
        {/* Icon */}
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center
                     rounded-full bg-[#192BC2]/10 mb-5">
          <SearchX className="h-7 w-7 text-[#192BC2]" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to a safe location.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2
                       w-full rounded-lg bg-[#192BC2] px-4 py-3
                       text-sm font-medium text-white
                       transition-all duration-200
                       hover:bg-[#0f1c85]
                       focus:outline-none focus:ring-2
                       focus:ring-[#192BC2] focus:ring-offset-1
                       active:scale-[0.98]">
            <Home className="h-4 w-4" />
            Go home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center
                       w-full rounded-lg border border-gray-300
                       px-4 py-3 text-sm font-medium text-gray-700
                       transition-all duration-200
                       hover:bg-gray-50
                       focus:outline-none focus:ring-2
                       focus:ring-[#192BC2] focus:ring-offset-1
                       active:scale-[0.98]">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
