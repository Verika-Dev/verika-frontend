/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  role: string; // "student" | "tutor" | "institution"
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  parentEmail?: string;
  parentPhoneNumber?: string;
  schoolLevel?: string;

  // tutor fields
  fullName?: string;
  yearsOfExperience?: string;
  subjectOfExpertise?: string[];
  location?: string;
  bankName?: string;
  rank?: string;
  accountNumber?: string;

  // institution fields
  organizationName?: string;
  officialEmail?: string;
  agreements?: boolean;
  typeOfOrganization?: string;
  registrationNumber?: string;
  phone?: string;
  estimatedStudents?: string;
  contactPerson?: string;

  website?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  minStudents?: string;
  maxStudents?: string;
}

interface SignupResponse {
  status?: string;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    role?: string;
    profile?: Record<string, any>;
    [key: string]: any;
  };
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
      // prepare payload — rename fields where necessary
      let payload = { ...formData };

      // If the user is a tutor, adapt payload to API’s expected fields
      if (formData.role === "tutor") {
        const [firstName, ...rest] = (formData.fullName || "").split(" ");
        payload = {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          role: "tutor",
          fullName: formData.fullName,
          yearsOfExperience: formData.yearsOfExperience, // ✅ correct key for backend
          subjectOfExpertise: formData.subjectOfExpertise, // ✅ correct key for backend
          location: formData.location,
          bankName: formData.bankName, // ✅ renamed
          accountNumber: formData.accountNumber,
          rank: formData.rank, // ✅ required by backend (set default or let user choose)
        };
      }

      if (formData.role === "organization") {
        payload = {
          email: "",
          role: "organization",
          organizationName: formData.organizationName,
          typeOfOrganization: formData.typeOfOrganization,
          registrationNumber: formData.registrationNumber,
          officialEmail: formData.officialEmail,
          phoneNumber: formData.phoneNumber,
          website: formData.website,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          estimatedStudents: formData.maxStudents || "0",
          contactPerson: formData.firstName || "Admin",
          agreements: true,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        };
      }

      const response = await axios.post<SignupResponse>(
        "http://178.128.64.203:8080/api/v1/auth/signup",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup response:", response.data);
      const resData = response.data;
      setData(resData);

      // For all roles, save email to localStorage for OTP verification
      if (
        formData.role === "student" ||
        formData.role === "organization" ||
        formData.role === "tutor"
      ) {
        localStorage.setItem("signupEmail", formData.email);
        router.push("/verify-otp");
      }

      return resData;
    } catch (err: unknown) {
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
