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

  const togglePasswordVisibility = () => setShowPassword((p) => !p);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-xl space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-900">
          Email
        </label>

        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#192BC2]" />
          </span>

          <input
            id="username"
            type="email"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            placeholder="Enter your email"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-[#192BC2] transition-all"
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
            <LockKeyhole className="h-5 w-5 text-gray-400 group-focus-within:text-[#192BC2]" />
          </span>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Enter password here"
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-[#192BC2] transition-all"
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none">
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
            )}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#192BC2] text-white cursor-pointer font-medium py-3 px-4 rounded-lg 
          hover:bg-[#0f1c85] transition-all duration-200 focus:outline-none 
          focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-1 
          disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm text-center animate-fadeIn">
          {error}
        </p>
      )}

      {/* Create Account Link */}
      <div className="text-center">
        <span className="text-gray-600 text-sm">Don’t have an account? </span>
        <Link
          href="/signUp"
          className="text-[#192BC2] hover:underline font-medium text-sm">
          Create account
        </Link>
      </div>
    </form>
  );
}
