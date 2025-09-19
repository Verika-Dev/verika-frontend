import LoginForm from "@/components/auth/login/LoginForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";
import UserRoleTab from "@/components/ui/common/userRole";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className=" w-1/2 ">
        <AuthAsideBg />
      </div>
      <div className=" flex items-center flex-col justify-center md:w-1/2 w-full px-6 ">
        <DynamicHeader />
        <UserRoleTab />
        <LoginForm />
      </div>
    </div>
  );
}
