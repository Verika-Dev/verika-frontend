import LoginForm from "@/components/auth/login/LoginForm";
import StudentLoginForm from "@/components/auth/login/LoginForm";
import StudentSignupForm from "@/components/auth/signUp/studentForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import Image from "next/image";
import SignupPage from "./signUp/page";
import OnboardingPage from "@/components/auth/onboarding";

export default function Home() {
  return (
    <div>
      <OnboardingPage />
    </div>
  );
}
