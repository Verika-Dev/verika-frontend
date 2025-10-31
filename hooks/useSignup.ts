"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";


interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  parentEmail: string;
  parentPhoneNumber: string;
  schoolLevel: string;
}

interface SignupResponse {
  message?: string;
  token?: string;
  user?: Record<string, any>;
  [key: string]: any;
}

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
      const response = await axios.post<SignupResponse>(
        "http://178.128.64.203:8080/api/v1/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("sign up res", response);
      localStorage.setItem("signupEmail", formData.email);
      router.push("/verify-otp");

      setData(response.data);
      return response.data;
    } catch (err: unknown) {
      console.log("error", err);

      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Signup failed. Please try again.";

      setError(errorMessage);
      console.error("Signup error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, data };
};
