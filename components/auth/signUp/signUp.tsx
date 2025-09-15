"use client";

// import { useState } from "react";
// import { useSignupStore } from "@/store/useSignupStore";

// export default function SignupForm() {
//   const { role, setRole } = useSignupStore();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitting as:", role, formData);
//   };

//   const tabs = ["student", "tutor", "institution"];

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-10">
//       {/* --- Role Tabs --- */}
//       <div className="flex justify-between border-b mb-6">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setRole(tab)}
//             className={`flex-1 text-center py-2 font-medium capitalize transition-colors ${
//               role === tab
//                 ? "border-b-2 border-blue-600 text-blue-600"
//                 : "text-gray-500 hover:text-gray-800"
//             }`}>
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- Forms --- */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name / Institution Name */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             {role === "institution" ? "Institution Name" : "Full Name"}
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder={
//               role === "institution"
//                 ? "Enter institution name"
//                 : "Enter your full name"
//             }
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className={`w-full py-2 rounded-md text-white font-semibold transition-colors ${
//             role === "student"
//               ? "bg-blue-600 hover:bg-blue-700"
//               : role === "tutor"
//               ? "bg-green-600 hover:bg-green-700"
//               : "bg-purple-600 hover:bg-purple-700"
//           }`}>
//           Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    school: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("Student");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Active tab:", activeTab);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create an account
          </h1>
          <p className="text-gray-500 text-sm">
            Let us help you develop the account
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          {["Student", "Tutor", "Institution"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}>
              {tab}
            </button>
          ))}
        </div>

     

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
              onClick={() => console.log("Navigate to login")}>
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}