"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (formData: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Redirect based on sanitized role
      const role = data.role;

      if (role === "student") router.push("/dashboard/student");
      else if (role === "tutor") router.push("/dashboard/tutor");
      else router.push("/dashboard/organization");
    } catch (err) {
      setError("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
