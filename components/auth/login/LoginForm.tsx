"use client";
import React, { useState } from "react";
import { Eye, EyeOff, User, LockKeyhole } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  onSubmit?: (data: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-6">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-900 mb-2">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder="Enter username here"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
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
              <LockKeyhole className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Enter password here"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
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
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
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
              <LockKeyhole className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="Enter password here"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
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
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
            <div className="h-1 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r cursor-pointer from-[#192BC2] to-[#192BC2] text-white font-medium py-3 px-4 rounded-lg hover:from-[#192BC2] hover:to-[#192BC2] focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 transition-all duration-200">
          Login
        </button>

        {/* Create Account Link */}
        <div className="text-center">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <Link
            href="/signUp"
            className="text-[#192BC2] hover:text-[#192BC2] cursor-pointer hover:underline font-medium text-sm focus:outline-none focus:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
