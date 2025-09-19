"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

type UserRole = "Student" | "Tutor" | "Institution";
function UserRoleTab() {
  const [activeTab, setActiveTab] = useState<UserRole>("Student");
  return (
    <div className="flex gap-2 w-full  mb-6 rounded-lg p-1">
      {(["Student", "Tutor", "Institution"] as UserRole[]).map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-2 px-3 cursor-pointer text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === tab
              ? "bg-[#192BC2] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}>
          {tab}
        </button>
      ))}
    </div>
  );
}

export default UserRoleTab;
