import LoginForm from "@/components/auth/login/LoginForm";
import StudentLoginForm from "@/components/auth/login/LoginForm";
import StudentSignupForm from "@/components/auth/signUp/studentForm";
import AuthAsideBg from "@/components/common/authAsideBg";
import Image from "next/image";
import SignupPage from "./signUp/page";
import OnboardingPage from "@/components/auth/onboarding";
import Footer from "@/components/common/footer";
import FAQ from "@/components/home/faq";
import Testimonials from "@/components/home/testimonials";
import AvailableCourses from "@/components/home/availableCourses";
import Navbar from "@/components/common/navbar";
import HeroSection from "@/components/home/hero";
import HowPryparWorks from "@/components/home/howPryparWorks";
import CTASection from "@/components/home/ctaSection";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/bgLandingpage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
        }}>
        <Navbar />
        <HeroSection />
      </div>

      {/* <HowPryparWorks/> */}
      {/* <AvailableCourses/> */}
      {/* <CTASection/> */}
      {/* <Testimonials/> */}
      {/* <FAQ/> */}
      {/* <Footer /> */}
    </div>
  );
}
