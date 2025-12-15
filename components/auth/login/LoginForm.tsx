"use client";

import React, { useState } from "react";
import { Eye, EyeOff, User, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error } = useLogin();

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    await login({
      email: formData.username,
      password: formData.password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-xl space-y-6
                 transition-shadow duration-300 hover:shadow-md">
      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-900">
          Email
        </label>

        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User
              className="h-5 w-5 text-gray-400
                         transition-colors duration-200
                         group-focus-within:text-[#192BC2]"
            />
          </span>

          <input
            id="username"
            type="email"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
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

      {/* Password Field */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-900">
          Password
        </label>

        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LockKeyhole
              className="h-5 w-5 text-gray-400
                         transition-colors duration-200
                         group-focus-within:text-[#192BC2]"
            />
          </span>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Enter password here"
            className="block w-full pl-10 pr-12 py-3
                       border border-gray-300 rounded-lg text-sm
                       placeholder-gray-500
                       transition-all duration-200
                       focus:outline-none
                       focus:ring-2 focus:ring-[#192BC2]
                       focus:shadow-sm focus:scale-[1.01]"
          />

          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute inset-y-0 cursor-pointer right-0 pr-3 flex items-center
                       text-gray-400
                       transition-transform duration-150
                       hover:text-gray-600 hover:scale-105
                       active:scale-95 focus:outline-none">
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#192BC2] text-white font-medium
                   py-3 px-4 rounded-lg cursor-pointer
                   transition-all duration-200
                   hover:bg-[#0f1c85]
                   active:scale-[0.98]
                   focus:outline-none
                   focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-1
                   disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Error Message */}
      {error && (
        <p
          className="text-red-500 text-sm text-center
                     animate-[fadeIn_0.25s_ease-out]">
          {error}
        </p>
      )}

      {/* Create Account */}
      <div className="text-center">
        <span className="text-gray-600 text-sm">Don’t have an account? </span>
        <Link
          href="/auth/register"
          className="text-[#192BC2] font-medium text-sm
                     transition-colors hover:underline">
          Create account
        </Link>
      </div>
    </form>
  );
}
