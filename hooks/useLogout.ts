/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface LogoutResponse {
  status?: string;
  message?: string;
  [key: string]: any;
}

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LogoutResponse | null>(null);
  const router = useRouter();

  const logout = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // ✅ Retrieve tokens or user info if needed
      const accessToken = localStorage.getItem("accessToken");
      const userProfile = localStorage.getItem("userProfile");
      const user = userProfile ? JSON.parse(userProfile) : null;

      // Optional: include email if API expects it
      const email = user?.email || "";

      // ✅ API call
      const response = await axios.post<LogoutResponse>(
        "http://178.128.64.203:8080/api/v1/auth/logout",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        }
      );

      setData(response.data);

      // ✅ Clear tokens & user data
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userProfile");

      // ✅ Redirect to login or home
      router.push("/login");
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Logout failed. Please try again.";

      setError(errorMessage);
      console.error("Logout error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error, data };
};
