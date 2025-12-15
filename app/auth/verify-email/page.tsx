import OtpVerificationForm from "@/components/auth/verify-otp";
import AuthAsideBg from "@/components/common/authAsideBg";
import DynamicHeader from "@/components/common/dynamicHeader";

export default function Verify() {
  return (
    <div className="flex ">
      <div className="w-1/2 h-screen">
        <AuthAsideBg />
      </div>

      <div className="w-1/2 pt-48 h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verify your mail
          </h1>
          <p className="text-gray-600 text-sm">Enter 4-digit code sent to</p>
          <OtpVerificationForm />
        </div>
      </div>
    </div>
  );
}
