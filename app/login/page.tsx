"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/login/LoginForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";
import UserRoleTab, { UserRole } from "@/components/ui/common/userRole";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("Student");

  return (
    <div className="flex min-h-screen">
      {/* Left Aside */}
      <div className="w-1/2 hidden md:block">
        <AuthAsideBg />
      </div>

      {/* Right Content */}
      <div className="flex items-center flex-col justify-center md:w-1/2 w-full px-6">
        <DynamicHeader />
        <UserRoleTab onChange={setSelectedRole} />
        <LoginForm />
      </div>
    </div>
  );
}
