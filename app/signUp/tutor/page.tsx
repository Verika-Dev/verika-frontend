"use client";

export default function TutorSignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-md border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-[#192BC2] mb-6 text-center">
          Tutor Signup
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
          <input
            type="text"
            placeholder="Expertise (e.g. Math, Physics)"
            className="w-full border rounded-lg p-3"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#192BC2] text-white p-3 font-medium hover:bg-[#14208a] transition">
            Register as Tutor
          </button>
        </form>
      </div>
    </div>
  );
}
