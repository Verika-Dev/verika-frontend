"use client";

import Image from "next/image";
import verikaLogo from "@/public/verikaLogo.svg";

export default function StudentSignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-lg border border-gray-100 p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={verikaLogo} alt="Verika logo" width={60} height={60} />
        </div>

        <h1 className="text-2xl font-bold text-[#192BC2] mb-4 text-center">
          Student Signup
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#192BC2] text-white p-3 font-medium hover:bg-[#14208a] transition">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#192BC2] font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
