"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import verikaLogo from "@/public/verikaLogo.svg";
import checkMark from "@/public/icons/checkMarkIcon.svg";
import signUpBg from "@/public/images/signUpBg.png";

const roles = [
  {
    id: "student",
    label: "Student",
    description: "Access lessons, request help, and improve your grades.",
    emoji: "🧑‍🎓",
  },
  {
    id: "tutor",
    label: "Tutor",
    description: "Teach students, manage sessions, and earn income.",
    emoji: "🧑‍🏫",
  },
  {
    id: "institution",
    label: "Institution",
    description:
      "This is for schools with multiple students ranging from 5 and above.",
    emoji: "🧑‍💼",
  },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState("student");
  const router = useRouter();

  const handleNext = () => {
    if (selected === "student") {
      router.push("/signUp/student");
    } else if (selected === "tutor") {
      router.push("/signUp/tutor");
    } else if (selected === "institution") {
      router.push("/signUp/institution");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-8 sm:py-4">
      <div
        className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-5xl rounded-2xl bg-white border border-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.99), rgba(255,255,255,0.99)), url(${signUpBg.src})`,
        }}>
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 text-[#192BC2]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-md font-bold text-lg">
              <Image
                src={verikaLogo}
                alt="verika logo"
                width={48}
                height={48}
                className="sm:w-[60px] sm:h-[60px] w-[48px] h-[48px] object-cover "
              />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Verika
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-outfit font-medium text-xl sm:text-2xl lg:text-3xl xl:text-[32px] leading-tight sm:leading-snug lg:leading-[48px] text-[#1B1B1B] px-2 sm:px-4 py-3 rounded-lg max-w-2xl">
          Who are you signing up as?
        </h2>

        {/* Role Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-4xl">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={cn(
                "flex flex-col items-start rounded-xl border p-4 sm:p-5 text-left transition cursor-pointer hover:shadow-md min-h-[120px] sm:min-h-[140px]",
                selected === role.id
                  ? "border-[#192BC2] bg-blue-50/30 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}>
              <div className="text-xl sm:text-2xl flex justify-between items-center w-full mb-2 sm:mb-3">
                {role.emoji}
                {selected === role.id ? (
                  <div className="p-1 sm:p-1.5 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#192BC2] font-bold">
                    <Image
                      src={checkMark}
                      alt="selected checkmark"
                      className="object-cover sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]"
                      width={16}
                      height={16}
                    />
                  </div>
                ) : (
                  <div className="p-1.5 sm:p-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border border-[#D0D5DD] font-bold"></div>
                )}
              </div>
              <div className="font-outfit font-medium text-sm sm:text-base leading-tight sm:leading-[24px] text-[#1B1B1B] mb-2">
                {role.label}
              </div>
              <p className="font-outfit font-normal text-xs sm:text-sm leading-relaxed sm:leading-[20px] text-[#1B1B1B] flex-1">
                {role.description}
              </p>
            </button>
          ))}
        </div>

        {/* Login Link */}
        <p className="mt-4 sm:mt-6 text-center font-outfit font-normal text-lg sm:text-xl lg:text-[24px] leading-relaxed sm:leading-[36px] text-[#1B1B1B] max-w-sm sm:max-w-md mx-auto px-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#192BC2] font-medium hover:underline transition-all">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
