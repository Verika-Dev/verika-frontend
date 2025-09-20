"use client";

import { useState } from "react";
import InstitutionRegistrationForm from "@/components/auth/signUp/instituteForm";
import StudentRegistrationForm from "@/components/auth/signUp/studentForm";
import TutorRegistrationForm from "@/components/auth/signUp/tutorForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";
import UserRoleTab, { UserRole } from "@/components/ui/common/userRole";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("Student");

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 hidden md:block">
        <AuthAsideBg />
      </div>

      <div className="flex items-center flex-col justify-center md:w-1/2 w-full px-6">
        <DynamicHeader />
        <UserRoleTab onChange={setSelectedRole} />

        {selectedRole === "Student" && <StudentRegistrationForm />}
        {selectedRole === "Tutor" && <TutorRegistrationForm />}
        {selectedRole === "Institution" && <InstitutionRegistrationForm />}
      </div>
    </div>
  );
}
