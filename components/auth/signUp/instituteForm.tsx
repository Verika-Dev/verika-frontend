"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Mail,
  Building2,
  Phone,
  Globe,
  MapPin,
  ChevronDown,
  Check,
  Lock,
} from "lucide-react";
import { useSignup } from "@/hooks/useSignup";

interface InstitutionRegistrationFormProps {
  onSubmit?: (data: Record<string, string>) => void;
}

export default function InstitutionRegistrationForm({
  onSubmit,
}: InstitutionRegistrationFormProps) {
  const { signup, loading, error } = useSignup();

  const [formData, setFormData] = useState({
    organizationName: "",
    typeOfOrganization: "",
    registrationNumber: "",
    officialEmail: "",
    phoneNumber: "",
    website: "",
    role: "organization",
    country: "",
    state: "",
    city: "",
    estimatedStudents: "",
    contactPerson: "",
    agreements: true,
    password: "",
    confirmPassword: "",
  });

  const [isVerified, setIsVerified] = useState(false);

  const organizationTypes = [
    "School",
    "NGO",
    "Company",
    "Training Center",
    "Other",
  ];
  const countryOptions = ["Nigeria", "Ghana", "Kenya", "South Africa"];
  const stateOptions = ["Lagos", "Abuja", "Kano", "Oyo", "Rivers"];
  const cityOptions = [
    "Ikeja",
    "Victoria Island",
    "Surulere",
    "Lekki",
    "Ibadan",
  ];

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await signup({
        ...formData,
        email: formData.officialEmail,
      });
      setIsVerified(true);
    } catch (error) {
      console.error("Institution signup error:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-5">
        {/* Organization Name */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Organization Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.organizationName}
              onChange={(e) =>
                handleInputChange("organizationName", e.target.value)
              }
              placeholder="e.g. Bright Minds Academy"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Type of Organization */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Type of Organization <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.typeOfOrganization}
              onChange={(e) =>
                handleInputChange("typeOfOrganization", e.target.value)
              }
              className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-[#192BC2]">
              <option value="">Select Type</option>
              {organizationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Registration Number */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Registration/License Number
          </label>
          <input
            type="text"
            value={formData.registrationNumber}
            onChange={(e) =>
              handleInputChange("registrationNumber", e.target.value)
            }
            placeholder="e.g. RC-102938"
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-[#192BC2]"
          />
        </div>

        {/* Official Email */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Official Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={formData.officialEmail}
              onChange={(e) =>
                handleInputChange("officialEmail", e.target.value)
              }
              placeholder="contact@organization.com"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="+234 812 345 6789"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Website
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://organization.com"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Country, State, City */}
        <div className="grid grid-cols-3 gap-4">
          <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="px-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]">
            <option value="">Country</option>
            {countryOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
            className="px-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]">
            <option value="">State</option>
            {stateOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="px-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]">
            <option value="">City</option>
            {cityOptions.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Estimated Students */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Estimated Number of Students
          </label>
          <input
            type="number"
            value={formData.estimatedStudents}
            onChange={(e) =>
              handleInputChange("estimatedStudents", e.target.value)
            }
            placeholder="e.g. 500"
            className="px-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
          />
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e) =>
                handleInputChange("contactPerson", e.target.value)
              }
              placeholder="Name of contact person"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Enter password"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="Re-enter password"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#192BC2]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-[#192BC2] text-white font-medium py-3 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-[#192BC2] mt-6 transition-all">
          {loading ? "Registering..." : "Register Institution"}
        </button>

        {isVerified && (
          <div className="flex justify-center items-center space-x-2 text-green-600 font-medium mt-3">
            <Check className="h-4 w-4" />
            <span>Registration Submitted Successfully!</span>
          </div>
        )}

        {error && (
          <p className="text-red-600 text-center text-sm mt-3">{error}</p>
        )}

        <div className="text-center">
          <span className="text-gray-600 text-sm">Already registered? </span>
          <Link
            href="/login"
            className="text-[#192BC2] hover:underline font-medium text-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
