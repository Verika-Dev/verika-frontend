"use client";

import React, { useState, useRef, useEffect } from "react";
import { useVerifyOtp } from "@/hooks/useVerifyOtp"; // <-- import your hook

function OtpVerificationForm({
  expirationTime = 15,
}: {
  expirationTime?: number;
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(expirationTime * 60); // Convert to seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // from hook
  const { verifyOtp,  loading, error, response } = useVerifyOtp();

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format time as minutes and seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      return `${mins}m${secs > 0 ? ` ${secs}s` : ""}`;
    }
    return `${secs}s`;
  };

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const digits = pasteData.replace(/\D/g, "").slice(0, 6).split("");

    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);

    // Focus on next empty field or last field
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (otpCode: string) => {
    await verifyOtp(otpCode);
  };

  const handleCreateAccount = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      handleVerify(otpCode);
    }
  };

  const handleResend = async () => {
    setTimeLeft(expirationTime * 60);
    setOtp(["", "", "", ""]);
    inputRefs.current[0]?.focus();
    // await resendOtp();
  };

  const isExpired = timeLeft <= 0;
  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="space-y-6">
        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-xl font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent transition-colors"
              autoComplete="one-time-code"
            />
          ))}
        </div>

        {/* Timer and Resend */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">
            Code expires after{" "}
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </p>
          <div className="text-sm">
            <span className="text-gray-600">Didn't get code? </span>
            <button
              type="button"
              onClick={handleResend}
              disabled={!isExpired && timeLeft > 0}
              className={`font-medium focus:outline-none focus:underline ${
                isExpired || timeLeft <= 0
                  ? "text-[#192BC2] cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}>
              Resend
            </button>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleCreateAccount}
          disabled={!isComplete || loading}
          className={`w-full font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 ${
            isComplete && !loading
              ? "bg-[#192BC2] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}>
          {loading ? "Verifying..." : "Create Account"}
        </button>

        {/* Feedback */}
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        {response?.success && (
          <p className="text-center text-sm text-green-600">
            {response.message || "OTP verified successfully!"}
          </p>
        )}

        {/* Login Link */}
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <button
            type="button"
            className="text-[#192BC2] font-medium text-sm focus:outline-none focus:underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationForm;
