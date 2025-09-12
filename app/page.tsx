import StudentLoginForm from "@/components/auth/login/student";
import SignUpPage from "@/components/auth/signUp/signUp";
import AuthAsideBg from "@/components/ui/common/authAsideBg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <StudentLoginForm/>
    </div>
  );
}
