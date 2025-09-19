import StudentRegistrationForm from "@/components/auth/signUp/studentForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";
import UserRoleTab from "@/components/ui/common/userRole";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-black w-1/2 ">
        <AuthAsideBg />
      </div>

      <div className=" flex items-center flex-col justify-center md:w-1/2 w-full px-6 ">
        <DynamicHeader />
        <UserRoleTab />
        <StudentRegistrationForm />
      </div>
    </div>
  );
}
