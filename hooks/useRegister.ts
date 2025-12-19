"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupData, SignupResponse } from "@/types/auth";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SignupResponse | null>(null);
  const router = useRouter();

  const signup = async (
    formData: SignupData
  ): Promise<SignupResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      let payload: Record<string, unknown> = { ...formData };

      /* ---------- Tutor payload normalization ---------- */
      if (formData.role === "tutor") {
        payload = {
          ...formData,
          subjectOfExpertise: Array.isArray(formData.subjectOfExpertise)
            ? formData.subjectOfExpertise
            : [],
        };
      }

      /* ---------- Organization payload normalization ---------- */
      if (formData.role === "organization") {
        payload = {
          ...formData,
          agreements: {
            termsAndConditions: true,
            dataPrivacyPolicy: true,
          },
        };
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData: SignupResponse = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || "Signup failed");
      }

      setData(responseData);

      localStorage.setItem("signupEmail", formData.email);
      router.push("/verify-otp");

      return responseData;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Signup failed. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, data };
};
