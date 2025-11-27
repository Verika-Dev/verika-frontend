"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  MapPin,
  Lock,
  Check,
  ChevronDown,
} from "lucide-react";
import { useSignup } from "@/hooks/useSignup";

interface RegistrationFormProps {
  onSubmit?: (data: any) => void;
}

export default function TutorRegistrationForm({
  onSubmit,
}: RegistrationFormProps) {
  const { signup, loading, error } = useSignup();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearsOfExperience: "",
    subjectOfExpertise: "",
    location: "",
    rank: "Senior",
    bankName: "",
    accountNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAccountVerified] = useState(true);

  const yearsOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15+",
  ];

  const subjectOptions = [
    "Math, English, Physics, Chem...",
    "Mathematics, Science",
    "Languages, Literature",
    "Social Studies, History",
    "Arts, Music, Drama",
  ];

  const locationOptions = [
    "Agege/Lagos",
    "Victoria Island/Lagos",
    "Ikeja/Lagos",
    "Surulere/Lagos",
    "Abuja/FCT",
  ];

  const bankOptions = [
    "Zenith Bank",
    "GTBank",
    "First Bank",
    "UBA",
    "Access Bank",
    "Fidelity Bank",
  ];

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    await signup({
      ...formData,
      role: "tutor",
      subjectOfExpertise: [formData.subjectOfExpertise],
    });
  };

  const baseInput =
    "block w-full border border-gray-300 rounded-lg text-sm text-gray-900 px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent";

  const baseSelect =
    "block w-full border border-gray-300 rounded-lg text-sm text-gray-900 px-3 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent";

  const renderInput = (
    id: string,
    label: string,
    icon: React.ReactNode,
    type: string = "text",
    value?: string,
    onInput?: any
  ) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onInput}
          className={baseInput}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-6">
        {/* Error Display */}
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        )}

        {renderInput(
          "fullName",
          "Full Name",
          <User className="h-5 w-5 text-gray-400" />,
          "text",
          formData.fullName,
          (e: any) => handleChange("fullName", e.target.value)
        )}

        {renderInput(
          "email",
          "Email Address",
          <Mail className="h-5 w-5 text-gray-400" />,
          "email",
          formData.email,
          (e: any) => handleChange("email", e.target.value)
        )}

        {/* Experience + Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Years of Experience
            </label>
            <div className="relative">
              <select
                value={formData.yearsOfExperience}
                onChange={(e) =>
                  handleChange("yearsOfExperience", e.target.value)
                }
                className={baseSelect}>
                <option value="">Select</option>
                {yearsOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Subject of Expertise
            </label>
            <div className="relative">
              <select
                value={formData.subjectOfExpertise}
                onChange={(e) =>
                  handleChange("subjectOfExpertise", e.target.value)
                }
                className={baseSelect}>
                <option value="">Select</option>
                {subjectOptions.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Location</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </span>
            <select
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="block w-full border border-gray-300 rounded-lg text-sm text-gray-900 py-3 pl-10 pr-10 appearance-none focus:ring-2 focus:ring-[#192BC2]">
              <option value="">Select</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Bank + Account */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bank */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Bank</label>
            <div className="relative">
              <select
                value={formData.bankName}
                onChange={(e) => handleChange("bankName", e.target.value)}
                className={baseSelect}>
                <option value="">Select</option>
                {bankOptions.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Account Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Account Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value)}
                className="block w-full py-3 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
              />
              {isAccountVerified && (
                <Check className="absolute top-3 right-3 h-4 w-4 text-green-600" />
              )}
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className={baseInput}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">
            Confirm Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className={baseInput}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#192BC2] text-white font-medium py-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#192BC2] transition-all">
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link
            href="/login"
            className="text-[#192BC2] font-medium ml-1 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
