/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  role: "student" | "tutor" | "organization";
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  parentEmail?: string;
  parentPhoneNumber?: string;
  schoolLevel?: string;

  // Tutor fields
  fullName?: string;
  yearsOfExperience?: string;
  subjectOfExpertise?: string[]; 
  location?: string;
  bankName?: string;
  rank?: string;
  accountNumber?: string;

  // Organization fields
  organizationName?: string;
  officialEmail?: string;
  agreements?: {
    termsAndConditions: boolean;
    dataPrivacyPolicy: boolean;
  };

  typeOfOrganization?: string;
  registrationNumber?: string;
  phone?: string;
  estimatedStudents?: string;
  contactPerson?: {
    fullName: string;
    officialRole: string;
    emailAddress: string;
    phoneNumber: string;
    alternateContact: {
      email: string;
      phone: string;
    };
  };
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
      let payload: Record<string, any> = { ...formData };

      /**
       * 🧩 Tutor signup
       * Backend expects:
       * - subjectOfExpertise: string[]
       * - rank, bankName, etc.
       */
      if (formData.role === "tutor") {
        payload = {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          role: "tutor",
          fullName: formData.fullName,
          yearsOfExperience: formData.yearsOfExperience,
          subjectOfExpertise: Array.isArray(formData.subjectOfExpertise)
            ? formData.subjectOfExpertise
            : formData.subjectOfExpertise
            ? [formData.subjectOfExpertise]
            : [],
          location: formData.location,
          bankName: formData.bankName,
          accountNumber: formData.accountNumber,
          rank: formData.rank,
        };
      }

      /**
       * 🏫 Organization signup
       * Matches the expected structure exactly
       */
      if (formData.role === "organization") {
        payload = {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
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
          estimatedStudents: formData.estimatedStudents,
          contactPerson: {
            fullName: formData.firstName || "Admin",
            officialRole: formData.rank || "Administrator",
            emailAddress: formData.officialEmail || formData.email,
            phoneNumber: formData.phoneNumber,
            alternateContact: {
              email: formData.parentEmail || "",
              phone: formData.parentPhoneNumber || "",
            },
          },
          agreements: {
            termsAndConditions: true,
            dataPrivacyPolicy: true,
          },
        };
      }

      console.log("🟩 Final signup payload:", JSON.stringify(payload, null, 2));

      const response = await axios.post<SignupResponse>(
        "http://178.128.64.203:8080/api/v1/auth/signup",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("✅ Signup response:", response.data);
      const resData = response.data;
      setData(resData);

      // Save email for OTP verification redirect
      if (["student", "organization", "tutor"].includes(formData.role)) {
        localStorage.setItem("signupEmail", formData.email);
        router.push("/auth/verify-email");
      }

      return resData;
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
      console.error("❌ Signup error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, data };
};
