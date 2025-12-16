"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optional: log error to monitoring service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 text-center
                   transition-all duration-300 hover:shadow-md">
        {/* Icon */}
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center
                     rounded-full bg-[#192BC2]/10 mb-5">
          <AlertTriangle className="h-7 w-7 text-[#192BC2]" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          An unexpected error occurred while processing your request. Please try
          again. If the problem persists, contact support.
        </p>

        {/* Action */}
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2
                     w-full rounded-lg bg-[#192BC2] px-4 py-3
                     text-sm font-medium text-white
                     transition-all duration-200
                     hover:bg-[#0f1c85]
                     focus:outline-none focus:ring-2
                     focus:ring-[#192BC2] focus:ring-offset-1
                     active:scale-[0.98]">
          <RefreshCcw className="h-4 w-4" />
          Try again
        </button>

        {/* Optional debug info (hidden in production if needed) */}
        {process.env.NODE_ENV === "development" && (
          <p className="mt-4 text-xs text-gray-400 break-all">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}
