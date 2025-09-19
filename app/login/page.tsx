import LoginForm from "@/components/auth/login/LoginForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";

export default function LoginPage() {
  return (
    <div className="flex">
      <AuthAsideBg />
      <div className=" flex items-center flex-col justify-center md:w-1/2 w-full" >
        <DynamicHeader />
        <LoginForm/>
      </div>
    </div>
  );
}
