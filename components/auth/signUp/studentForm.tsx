"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  GraduationCap,
} from "lucide-react";

interface StudentSignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  schoolLevel: string;
  password: string;
  confirmPassword: string;
  state: string;
  city: string;
}

export default function StudentSignupForm() {
  const [formData, setFormData] = useState<StudentSignupFormData>({
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

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4 text-sm">
      {/* First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">First name</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name here"
              className="w-full outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Last name</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name here"
              className="w-full outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email here"
              className="w-full outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number here"
              className="w-full outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* School Level */}
      <div>
        <label className="block mb-1 font-medium">School Level/ Class</label>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
          <select
            name="schoolLevel"
            value={formData.schoolLevel}
            onChange={handleChange}
            className="w-full outline-none bg-transparent"
            required>
            <option value="">Select school level/ Class</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="university">University</option>
          </select>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Lock className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password here"
            className="w-full outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="ml-2 text-gray-500">
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block mb-1 font-medium">Confirm password</label>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Lock className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter password here"
            className="w-full outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="ml-2 text-gray-500">
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* State & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">State</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required>
              <option value="">Select state</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">City</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required>
              <option value="">Select city</option>
              <option value="ikeja">Ikeja</option>
              <option value="gwarimpa">Gwarimpa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#192BC2] text-white cursor-pointer py-3 rounded-lg font-medium hover:bg-[#3A00B5] transition">
        Create Account
      </button>
    </form>
  );
}
