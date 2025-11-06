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
  onSubmit?: (data: {
    fullName: string;
    email: string;
    yearsOfExperience: string;
    subjectOfExpertise: string | string[];
    location: string;
    bankName: string;
    accountNumber: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

function TutorRegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { signup, loading, error } = useSignup();
 const [formData, setFormData] = useState({
   fullName: "",
   email: "",
   yearsOfExperience: "",
   subjectOfExpertise: '',
   location: "",
   rank:"Senior",
   bankName: "",
   accountNumber: "",
   password: "",
   confirmPassword: "",
 });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAccountVerified, setIsAccountVerified] = useState(true);

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

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
const handleSubmit = async () => {
  await signup({
    ...formData,
    role: "tutor",
    subjectOfExpertise: Array.isArray(formData.subjectOfExpertise)
      ? formData.subjectOfExpertise
      : [formData.subjectOfExpertise],
  });
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-5">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-900 mb-2">
            Full name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Years of Experience and Subjects Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="yearsExperience"
              className="block text-sm font-medium text-gray-900 mb-2">
              Years of Experience
            </label>
            <div className="relative">
              <select
                id="yearsExperience"
                value={formData.yearsOfExperience}
                onChange={(e) =>
                  handleInputChange("yearsOfExperience", e.target.value)
                }
                className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
                {yearsOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="subjectsExpertise"
              className="block text-sm font-medium text-gray-900 mb-2">
              Subjects of Expertise
            </label>
            <div className="relative">
              <select
                id="subjectsExpertise"
                value={formData.subjectOfExpertise}
                onChange={(e) =>
                  handleInputChange("subjectOfExpertise", e.target.value)
                }
                className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
                {subjectOptions.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Location Field */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-900 mb-2">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="block w-full appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Bank and Account Number Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="bank"
              className="block text-sm font-medium text-gray-900 mb-2">
              Bank
            </label>
            <div className="relative">
              <select
                id="bank"
                value={formData.bankName}
                onChange={(e) => handleInputChange("bankName", e.target.value)}
                className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
                {bankOptions.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-900 mb-2">
              Account Number
            </label>
            <div className="relative">
              <input
                id="accountNumber"
                type="text"
                value={formData.accountNumber}
                onChange={(e) =>
                  handleInputChange("accountNumber", e.target.value)
                }
                className="block w-full pr-10 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
              />
              {isAccountVerified && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={showPassword ? "password123" : formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          {/* Password strength indicator */}
          <div className="flex space-x-1 mt-2">
            <div className="h-1 w-6 bg-yellow-400 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-900 mb-2">
            Confirm password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={
                showConfirmPassword ? "password123" : formData.confirmPassword
              }
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          {/* Password strength indicator */}
          <div className="flex space-x-1 mt-2">
            <div className="h-1 w-6 bg-yellow-400 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#192BC2] to-[#192BC2] text-white font-medium py-3 px-4 rounded-lg hover:from-[#192BC2] hover:to-[#192BC2] focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 transition-all duration-200 mt-6 cursor-pointer">
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <Link
            href="/login"
            className="text-[#192BC2] hover:text-[#192BC2] font-medium text-sm focus:outline-none focus:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TutorRegistrationForm;
