"use client";

import React, { useState } from "react";
import type { StudentSignupData } from "@/types/auth";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  GraduationCap,
  Lock,
  MapPin,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { useSignup } from "@/hooks/useRegister"; 

function StudentRegistrationForm() {
  const { signup, loading, error, data } = useSignup();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    schoolLevel: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schoolLevelOptions = [
    {
      category: "Nursery / Preschool",
      levels: ["Playgroup/ Creche", "Nursery 1", "Nursery 2", "Kindergarten"],
    },
    {
      category: "Primary",
      levels: ["Primary 1", "Primary 2", "Primary 3", "Kindergarten"],
    },
    { category: "Junior Secondary (JSS)", levels: ["JS 1", "JS 2", "JS 3"] },
    { category: "Senior Secondary (SSS)", levels: ["SS 1", "SS 2", "SS 3"] },
    {
      category: "JAMBites (UTME Candidates)",
      levels: [
        "Science Track",
        "Arts Track",
        "Commercial Track",
        "General Studies",
      ],
    },
  ];

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const cityOptions = {
    "Akwa Ibom": ["Uyo", "Ikot Ekpene", "Eket", "Oron", "Abak"],
    Lagos: ["Lagos Island", "Ikeja", "Surulere", "Victoria Island", "Ikoyi"],
    Abuja: ["Garki", "Wuse", "Maitama", "Asokoro", "Gwarinpa"],
  };

  const getCurrentCities = () => {
    return cityOptions[formData.state as keyof typeof cityOptions] || ["Uyo"];
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "state" ? { city: "" } : {}),
    }));
  };

const handleSubmit = async () => {
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    !formData.schoolLevel
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const payload: StudentSignupData = {
    role: "student",
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    firstName: formData.firstName,
    lastName: formData.lastName,
    phoneNumber: formData.phoneNumber,
    schoolLevel: formData.schoolLevel,
    parentEmail: undefined,
    parentPhoneNumber: undefined,
  };

  await signup(payload);
};

  return (
    <div className="w-full mx-auto h-full bg-white p-6">
      <div className="space-y-5">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          {["firstName", "lastName"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-900 mb-2">
                {field === "firstName" ? "First name" : "Last name"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id={field}
                  type="text"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    handleInputChange(
                      field as keyof typeof formData,
                      e.target.value
                    )
                  }
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-[#192BC2]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Email and Phone Number */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#192BC2]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#192BC2]"
              />
            </div>
          </div>
        </div>

        {/* School Level */}
        <div>
          <label
            htmlFor="schoolLevel"
            className="block text-sm font-medium text-gray-900 mb-2">
            School Level
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              id="schoolLevel"
              value={formData.schoolLevel}
              onChange={(e) => handleInputChange("schoolLevel", e.target.value)}
              className="block w-full appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]">
              {schoolLevelOptions.map((category) => (
                <optgroup key={category.category} label={category.category}>
                  {category.levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Password Fields */}
        {["password", "confirmPassword"].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-900 mb-2">
              {field === "password" ? "Password" : "Confirm Password"}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id={field}
                type={
                  field === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={formData[field as keyof typeof formData]}
                onChange={(e) =>
                  handleInputChange(
                    field as keyof typeof formData,
                    e.target.value
                  )
                }
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
              />
              <button
                type="button"
                onClick={() =>
                  field === "password"
                    ? setShowPassword(!showPassword)
                    : setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-3">
                {field === "password" ? (
                  showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )
                ) : showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#192BC2] text-white py-3 cursor-pointer rounded-lg mt-4 hover:bg-[#101e85] flex justify-center items-center">
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> Creating
              Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        {error && (
          <p className="text-red-600 text-center text-sm mt-2">{error}</p>
        )}
        {data?.message && (
          <p className="text-green-600 text-center text-sm mt-2">
            {data.message}
          </p>
        )}

        {/* Login Link */}
        <div className="text-center mt-3">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <Link
            href="/auth/login"
            className="text-[#192BC2] font-medium text-sm hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistrationForm;
