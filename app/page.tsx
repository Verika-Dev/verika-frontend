import LoginForm from "@/components/auth/login/studentForm";
import StudentLoginForm from "@/components/auth/login/studentForm";
import SignUpPage from "@/components/auth/signUp";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <StudentLoginForm /> */}
      <LoginForm/>
    </div>
  );
}
