"use client";
import React, { useState } from "react";
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
} from "lucide-react";

interface StudentRegistrationFormProps {
  onSubmit?: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    schoolLevel: string;
    password: string;
    confirmPassword: string;
    state: string;
    city: string;
  }) => void;
}

function StudentRegistrationForm({ onSubmit }: StudentRegistrationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "Jane",
    lastName: "James",
    email: "jane@gmail.com",
    phoneNumber: "",
    schoolLevel: "SS 1",
    password: "●●●●●●",
    confirmPassword: "●●●●●●",
    state: "Akwa Ibom",
    city: "Uyo",
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
    }));

    // Reset city when state changes
    if (field === "state") {
      const newCities = cityOptions[value as keyof typeof cityOptions] || [""];
      setFormData((prev) => ({
        ...prev,
        city: newCities[0] || "",
      }));
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full mx-auto h-full bg-white p-6 ">
      <div className="space-y-5">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-900 mb-2">
              First name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-900 mb-2">
              Last name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring[#192BC2] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Email and Phone Number Row */}
        <div className="grid grid-cols-2 gap-4">
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

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-900 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                placeholder="Enter phone number here"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* School Level Field */}
        <div>
          <label
            htmlFor="schoolLevel"
            className="block text-sm font-medium text-gray-900 mb-2">
            School Level/ Class
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <GraduationCap className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="schoolLevel"
              value={formData.schoolLevel}
              onChange={(e) => handleInputChange("schoolLevel", e.target.value)}
              className="block w-full appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
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
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
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

        {/* State and City Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-900 mb-2">
              State
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="block w-full appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
                {nigerianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
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
              htmlFor="city"
              className="block text-sm font-medium text-gray-900 mb-2">
              City
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="block w-full appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent">
                {getCurrentCities().map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-gradient-to-r from-[#192BC2] to-[#192BC2] text-white font-medium py-3 px-4 rounded-lg hover:from-[#192BC2] hover:to-[#192BC2] focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 transition-all duration-200 mt-6">
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <button
            type="button"
            className="text-[#192BC2] hover:text-[#192BC2] font-medium text-sm focus:outline-none focus:underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistrationForm;
