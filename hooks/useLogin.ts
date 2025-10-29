"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token?: string;
  user?: {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
  };
  message?: string;
  [key: string]: any;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async (formData: LoginData): Promise<LoginResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/api/v1/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);

      setData(response.data);
      return response.data;
    } catch (err: unknown) {
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
