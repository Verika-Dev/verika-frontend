/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface VerifyOtpResponse {
  message?: string;
  success?: boolean;
  token?: string;
  user?: Record<string, any>;
  [key: string]: any;
}

export const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<VerifyOtpResponse | null>(null);
  const router = useRouter();

  const verifyOtp = async (otp: string): Promise<VerifyOtpResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      const email = localStorage.getItem("signupEmail");

      if (!email) {
        throw new Error(
          "No email found in local storage. Please sign up again."
        );
      }

      const res = await axios.post(
        "http://178.128.64.203:8080/api/v1/auth/verify-otp",
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(res.data);

      // ✅ clear localStorage after successful verification
      localStorage.removeItem("signupEmail");

      // optional: redirect to login or dashboard
      router.push("/login");

      return res.data;
    } catch (err: any) {
      console.error("Verify OTP error:", err);
      const message =
        err.response?.data?.message ||
        "Failed to verify OTP. Please try again.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading, error, response };
};
