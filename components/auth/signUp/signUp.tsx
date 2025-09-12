"use client";

import { useState } from "react";
import { useSignupStore } from "@/store/useSignupStore";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const { fullName, email, password, setFullName, setEmail, setPassword } =
    useSignupStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup details:", { fullName, email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-gray-400 font-bold text-2xl">Verika</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#192BC2] mb-2">
          Get Started
        </h2>
        <p className="text-sm text-gray-500 mb-6">Create your account now</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="E.g John Doe"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E.g JohnDoe@example.com"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="E.g 1234567890#"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#192BC2] text-white py-2 font-medium hover:opacity-90 transition">
            Sign Up
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-[#192BC2] text-[#192BC2] py-2 font-medium flex items-center justify-center space-x-2 hover:bg-purple-50 transition">
            <span>Sign Up With Google</span>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-600 text-center">
          Have an account?{" "}
          <a href="/login" className="text-[#192BC2]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
