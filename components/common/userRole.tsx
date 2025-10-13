"use client";
import React, { useState } from "react";

export type UserRole = "Student" | "Tutor" | "Institution";

interface UserRoleTabProps {
  onChange: (role: UserRole) => void;
}

function UserRoleTab({ onChange }: UserRoleTabProps) {
  const [activeTab, setActiveTab] = useState<UserRole>("Student");

  const handleTabClick = (tab: UserRole) => {
    setActiveTab(tab);
    onChange(tab); // notify parent
  };

  return (
    <div className="flex gap-2 px-6 md:px-0 w-full mb-6 rounded-lg p-1">
      {(["Student", "Tutor", "Institution"] as UserRole[]).map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => handleTabClick(tab)}
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
