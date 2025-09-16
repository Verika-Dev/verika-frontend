import LoginForm from "@/components/auth/login/LoginForm";
import StudentLoginForm from "@/components/auth/login/LoginForm";
import SignUpPage from "@/components/auth/signUp";
import StudentSignupForm from "@/components/auth/signUp/studentForm";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <StudentLoginForm/>
      <StudentSignupForm/>
    </div>
  );
}
