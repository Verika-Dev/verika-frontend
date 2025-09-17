import SignUpPage from "@/components/auth/signUp";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import DynamicHeader from "@/components/ui/common/dynamicHeader";

export default function LoginPage() {
  return (
    <div className="flex">
      <AuthAsideBg />
      <div>
        <DynamicHeader />
      </div>
    </div>
  );
}
