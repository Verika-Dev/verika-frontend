"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useResetPassword } from "@/hooks/useResetPassword";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { resetPassword, loading, error } = useResetPassword();

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    await resetPassword({ email });
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-xl space-y-6
                 transition-shadow duration-300 hover:shadow-md">
      {/* Header */}
      <div className="space-y-1 text-center">
        <h1 className="text-lg font-semibold text-gray-900">
          Reset your password
        </h1>
        <p className="text-sm text-gray-600">
          Enter your email and we’ll send you reset instructions.
        </p>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900">
          Email
        </label>

        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail
              className="h-5 w-5 text-gray-400
                         transition-colors duration-200
                         group-focus-within:text-[#192BC2]"
            />
          </span>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="block w-full pl-10 pr-3 py-3
                       border border-gray-300 rounded-lg text-sm
                       placeholder-gray-500
                       transition-all duration-200
                       focus:outline-none
                       focus:ring-2 focus:ring-[#192BC2]
                       focus:shadow-sm focus:scale-[1.01]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || submitted}
        className="w-full bg-[#192BC2] text-white font-medium
                   py-3 px-4 rounded-lg
                   transition-all duration-200
                   hover:bg-[#0f1c85]
                   active:scale-[0.98]
                   focus:outline-none
                   focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-1
                   disabled:opacity-50 disabled:cursor-not-allowed">
        {loading
          ? "Sending link..."
          : submitted
          ? "Email sent"
          : "Send reset link"}
      </button>

      {/* Success State */}
      {submitted && !error && (
        <p
          className="text-green-600 text-sm text-center
                      animate-[fadeIn_0.25s_ease-out]">
          If an account exists for this email, a reset link has been sent.
        </p>
      )}

      {/* Error State */}
      {error && (
        <p
          className="text-red-500 text-sm text-center
                      animate-[fadeIn_0.25s_ease-out]">
          {error}
        </p>
      )}

      {/* Back to Login */}
      <div className="text-center">
        <Link
          href="/auth/login"
          className="text-[#192BC2] font-medium text-sm
                     transition-colors hover:underline">
          Back to login
        </Link>
      </div>
    </form>
  );
}
