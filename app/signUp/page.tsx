// app/signup/page.tsx
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

export default function SignupPage() {
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
    <div className="flex min-h-screen items-center justify-center bg-white px-4  ">
      <div
        className="flex flex-col items-center gap-8  w-full max-w-5xl rounded-2xl bg-white border border-gray-100 py-16 px-16  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.99), rgba(255,255,255,0.99)), url(${signUpBg.src})`,
        }}>
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 text-[#192BC2]">
            <div className="  w-16 h-16 flex items-center justify-center rounded-md font-bold text-lg">
              <Image
                src={verikaLogo}
                alt="verika logo"
                className="object-cover"
                width={60}
                height={60}
              />
            </div>
            <span className="text-4xl font-bold">Verika</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-outfit font-medium text-2xl sm:text-3xl md:text-[32px] leading-snug sm:leading-[40px] md:leading-[48px] text-[#1B1B1B] px-4 py-3 rounded-lg">
          Who are you signing up as?
        </h2>

        {/* Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={cn(
                "flex flex-col items-start rounded-xl border p-4 text-left transition cursor-pointer",
                selected === role.id ? "border" : "border--border bg-white"
              )}>
              <div className="text-2xl flex justify-between items-center w-full mb-2">
                {role.emoji}

                {selected === role.id ? (
                  <div className="p-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-[#192BC2] font-bold">
                    <Image
                      src={checkMark}
                      alt="selected checkmark"
                      className="object-cover"
                      width={20}
                      height={20}
                    />
                  </div>
                ) : (
                  <div className=" p-2 w-6 h-6 flex items-center justify-center rounded-full border border-[#D0D5DD] font-bold"></div>
                )}
              </div>
              <div className="font-outfit font-medium text-[16px] leading-[24px] text-[#1B1B1B] text-center">
                {role.label}
              </div>

              <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#1B1B1B]">
                {role.description}
              </p>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="rounded-lg bg-[#192BC2] px-6 py-2 text-white font-medium hover:bg-[#192BC2] cursor-pointer transition">
            Continue
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center font-outfit font-normal text-[24px] leading-[36px] text-[#1B1B1B] w-[343px] h-[36px] mx-auto">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#192BC2] font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
