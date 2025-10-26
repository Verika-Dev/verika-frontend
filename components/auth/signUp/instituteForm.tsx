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
  Users,
} from "lucide-react";

interface InstitutionRegistrationFormProps {
  onSubmit?: (data: {
    organizationName: string;
    organizationType: string;
    registrationNumber: string;
    email: string;
    phone: string;
    website: string;
    country: string;
    state: string;
    city: string;
    address: string;
    minStudents: string;
    maxStudents: string;
  }) => void;
}

export default function InstitutionRegistrationForm({
  onSubmit,
}: InstitutionRegistrationFormProps) {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    state: "",
    city: "",
    address: "",
    minStudents: "",
    maxStudents: "",
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

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    setIsVerified(true);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-5">
        {/* Organization Name */}
        <div>
          <label
            htmlFor="organizationName"
            className="block text-sm font-medium text-gray-900 mb-2">
            Organization Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="organizationName"
              type="text"
              value={formData.organizationName}
              onChange={(e) =>
                handleInputChange("organizationName", e.target.value)
              }
              placeholder="e.g. Bright Minds Academy"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Organization Type */}
        <div>
          <label
            htmlFor="organizationType"
            className="block text-sm font-medium text-gray-900 mb-2">
            Organization Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="organizationType"
              value={formData.organizationType}
              onChange={(e) =>
                handleInputChange("organizationType", e.target.value)
              }
              className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
              <option value="">Select Type</option>
              {organizationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Registration Number */}
        <div>
          <label
            htmlFor="registrationNumber"
            className="block text-sm font-medium text-gray-900 mb-2">
            Registration/License Number
          </label>
          <input
            id="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={(e) =>
              handleInputChange("registrationNumber", e.target.value)
            }
            placeholder="e.g. RC-102938"
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 mb-2">
            Official Email Address <span className="text-red-500">*</span>
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
              placeholder="contact@organization.com"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+234 812 345 6789"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-900 mb-2">
            Website
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://organization.com"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Country, State, City */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-900 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]">
              <option value="">Select Country</option>
              {countryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-900 mb-2">
              State/Region <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]">
              <option value="">Select State</option>
              {stateOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-900 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="block w-full appearance-none px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]">
              <option value="">Select City</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900 mb-2">
            Physical Address
          </label>
          <textarea
            id="address"
            rows={2}
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="e.g. 24 Obafemi Awolowo Way, Ikeja, Lagos"
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
          />
        </div>

        {/* Min-Max Students */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="minStudents"
              className="block text-sm font-medium text-gray-900 mb-2">
              Minimum Number of Students
            </label>
            <div className="relative">
              <input
                id="minStudents"
                type="number"
                value={formData.minStudents}
                onChange={(e) =>
                  handleInputChange("minStudents", e.target.value)
                }
                placeholder="e.g. 50"
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Users className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="maxStudents"
              className="block text-sm font-medium text-gray-900 mb-2">
              Maximum Number of Students
            </label>
            <div className="relative">
              <input
                id="maxStudents"
                type="number"
                value={formData.maxStudents}
                onChange={(e) =>
                  handleInputChange("maxStudents", e.target.value)
                }
                placeholder="e.g. 500"
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#192BC2]"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Users className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#192BC2] to-[#192BC2] text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 transition-all duration-200 mt-6 cursor-pointer">
          Register Institution
        </button>

        {/* Success Indicator */}
        {isVerified && (
          <div className="flex justify-center items-center space-x-2 text-green-600 font-medium mt-3">
            <Check className="h-4 w-4" />
            <span>Registration Submitted Successfully!</span>
          </div>
        )}

        {/* Login Link */}
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
