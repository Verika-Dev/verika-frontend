"use client";

import React, { useState, useEffect } from "react";
import { Mail, Building2, Phone, Check, Lock } from "lucide-react";
import { useSignup } from "@/hooks/useSignup";
import type { OrganizationSignupData } from "@/types/auth";

export default function InstitutionRegistrationForm() {
  const { signup, loading, error } = useSignup();
  const [studentRange, setStudentRange] = useState({ min: "", max: "" });
  const [rangeError, setRangeError] = useState("");

  const [formData, setFormData] = useState<OrganizationSignupData>({
    role: "organization",
    email: "",
    password: "",
    confirmPassword: "",
    organizationName: "",
    typeOfOrganization: "",
    officialEmail: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    estimatedStudents: "",
    contactPerson: {
      fullName: "",
      officialRole: "",
      emailAddress: "",
      phoneNumber: "",
      alternateContact: { email: "", phone: "" },
    },
    agreements: { termsAndConditions: false, dataPrivacyPolicy: false },
  } as OrganizationSignupData);

  const [isVerified, setIsVerified] = useState(false);

  // Nested input helper
  const handleInputChange = (path: string, value: any) => {
    setFormData((prev) => {
      const keys = path.split(".");
      const updated: any = { ...prev };
      let obj: any = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  // Update estimatedStudents dynamically
  useEffect(() => {
    const { min, max } = studentRange;
    if (min && max) {
      if (Number(min) >= Number(max)) {
        setRangeError("Min should be less than Max");
        handleInputChange("estimatedStudents", "");
      } else {
        setRangeError("");
        handleInputChange("estimatedStudents", `${min}-${max}`);
      }
    } else {
      handleInputChange("estimatedStudents", "");
    }
  }, [studentRange]);

  const handleSubmit = async () => {
    if (
      !formData.organizationName ||
      !formData.officialEmail ||
      !formData.password
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!formData.estimatedStudents) {
      setRangeError("Please enter a valid student range.");
      return;
    }
    const payload: OrganizationSignupData = {
      ...formData,
      email: formData.officialEmail, // backend expects email
      agreements: {
        termsAndConditions: true,
        dataPrivacyPolicy: true,
      },
    } as const;

    await signup(payload as any);
    setIsVerified(true);
  };

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

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-5">
        {/* Organization Name */}
        <div>
          <label className="font-medium text-gray-900">Organization Name</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.organizationName}
              onChange={(e) =>
                handleInputChange("organizationName", e.target.value)
              }
              placeholder="e.g. Tech Academy"
              className="block w-full pl-10 pr-3 py-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Type of Organization */}
        <div>
          <label className="font-medium text-gray-900">
            Type of Organization
          </label>
          <select
            value={formData.typeOfOrganization}
            onChange={(e) =>
              handleInputChange("typeOfOrganization", e.target.value)
            }
            className="block w-full px-3 py-3 border rounded-lg">
            <option value="">Select Type</option>
            {organizationTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Official Email */}
        <div>
          <label className="font-medium text-gray-900">Official Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={formData.officialEmail}
              onChange={(e) =>
                handleInputChange("officialEmail", e.target.value)
              }
              placeholder="org@example.com"
              className="block w-full pl-10 pr-3 py-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Estimated Students */}
        <div>
          <label className="font-medium text-gray-900">
            Estimated Students
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={studentRange.min}
              onChange={(e) =>
                setStudentRange((prev) => ({ ...prev, min: e.target.value }))
              }
              className="px-3 py-3 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Max"
              value={studentRange.max}
              onChange={(e) =>
                setStudentRange((prev) => ({ ...prev, max: e.target.value }))
              }
              className="px-3 py-3 border rounded-lg"
            />
          </div>
          {rangeError && (
            <p className="text-sm text-red-500 mt-1">{rangeError}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="font-medium text-gray-900">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="+234 801 234 5678"
              className="block w-full pl-10 pr-3 py-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Country / State / City */}
        <div className="grid grid-cols-3 gap-4">
          <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="px-3 py-3 border rounded-lg">
            <option value="">Country</option>
            {countryOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
            className="px-3 py-3 border rounded-lg">
            <option value="">State</option>
            {stateOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="px-3 py-3 border rounded-lg">
            <option value="">City</option>
            {cityOptions.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Contact Person */}
        <div className="border-t pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Contact Person</h3>
          <input
            type="text"
            value={formData.contactPerson?.fullName || ""}
            onChange={(e) =>
              handleInputChange("contactPerson.fullName", e.target.value)
            }
            placeholder="Full Name"
            className="block w-full mb-3 px-3 py-3 border rounded-lg"
          />
          <input
            type="text"
            value={formData.contactPerson?.officialRole || ""}
            onChange={(e) =>
              handleInputChange("contactPerson.officialRole", e.target.value)
            }
            placeholder="Official Role"
            className="block w-full mb-3 px-3 py-3 border rounded-lg"
          />
          <input
            type="email"
            value={formData.contactPerson?.emailAddress || ""}
            onChange={(e) =>
              handleInputChange("contactPerson.emailAddress", e.target.value)
            }
            placeholder="Email"
            className="block w-full mb-3 px-3 py-3 border rounded-lg"
          />
          <input
            type="tel"
            value={formData.contactPerson?.phoneNumber || ""}
            onChange={(e) =>
              handleInputChange("contactPerson.phoneNumber", e.target.value)
            }
            placeholder="Phone Number"
            className="block w-full mb-3 px-3 py-3 border rounded-lg"
          />
        </div>

        {/* Password */}
        <div>
          <label className="font-medium text-gray-900">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Enter password"
              className="block w-full pl-10 pr-3 py-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="font-medium text-gray-900">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Re-enter password"
            className="block w-full px-3 py-3 border rounded-lg"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-[#192BC2] text-white py-3 rounded-lg mt-4">
          {loading ? "Registering..." : "Register Institution"}
        </button>

        {isVerified && (
          <div className="flex justify-center items-center text-green-600 font-medium mt-3">
            <Check className="h-4 w-4 mr-1" />
            Registration Submitted Successfully!
          </div>
        )}

        {error && (
          <p className="text-red-600 text-center text-sm mt-3">{error}</p>
        )}
      </div>
    </div>
  );
}
