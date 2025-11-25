/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
  role: string;
}

interface Profile {
  _id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  [key: string]: any;
}

interface LoginResponse {
  status?: string;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    role?: string;
    userId?: string;
    profile?: Profile;
    [key: string]: any;
  };
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);
  const router = useRouter();

  const login = async (formData: LoginData): Promise<LoginResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = response.data;
      setData(resData);

      // ✅ Extract needed fields
      const { accessToken, refreshToken, profile, role } = resData.data || {};

      // ✅ Save to localStorage
      if (accessToken) localStorage.setItem("accessToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      if (profile) localStorage.setItem("userProfile", JSON.stringify(profile));

      // ✅ Navigate based on user role
      if (role === "student") {
        router.push("/dashboard/student");
      } else if (role === "tutor") {
        router.push("/dashboard/tutor");
      } else {
        router.push("/dashboard/institution");
      }

      return resData;
    } catch (err: unknown) {
      console.log("login error", err);

      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Login failed. Please try again.";

      setError(errorMessage);
      console.error("Login error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};
