"use client";

import Image from "next/image";
import React from "react";
import logoipsum from "@/public/icons/logo-ipsuim.svg";
import logoipsum1 from "@/public/icons/logo-ipsum-1.svg";
import logoipsum2 from "@/public/icons/logo-ipsum-2.svg";
import logoipsum3 from "@/public/icons/logo-ipsum-3.svg";
import logoipsum4 from "@/public/icons/logo-ipsum-4.svg";
import laptop from "@/public/images/laptop-how-prypar-works.svg";
import bg from "@/public/images/signUpBg.png";
import TrustedBy from "./trustedBy";

export default function HowPryparWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Track",
      description:
        "Select from Arts, Science, Commercial, Tech, or Vocational to start your personalized learning journey.",
    },
    {
      number: 2,
      title: "Engage and Learn",
      description:
        "Dive into interactive modules, quizzes, and AI-guided practice tailored to your exam requirements.",
    },
    {
      number: 3,
      title: "Track Your Progress",
      description:
        "Monitor achievements and readiness with real-time analytics and achievement badges.",
    },
    {
      number: 4,
      title: "Get Mentorship",
      description:
        "Connect with mentors for 1-on-1 or group support, live classes, and assignment help.",
    },
  ];

  const trustedLogos = [
    logoipsum,
    logoipsum1,
    logoipsum2,
    logoipsum3,
    logoipsum4,
  ];

  return (
    <section className="bg-[#F3F5FF] py-12 sm:py-16 ">
      <div className="max-w-full mx-auto">
        {/* Trusted By Section */}

        <TrustedBy />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Laptop Mockup with Background */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            {/* Purple background block */}
            <div className="absolute hidden md:block -top-4 sm:top-0 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 w-[85%] sm:w-[70%] lg:w-[65%] h-[300px] sm:h-[380px] lg:h-[420px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
              <Image
                src={bg}
                alt="background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C145C] via-[#192BC2] to-[#192BC2]/90 opacity-95" />
            </div>

            {/* Laptop Image */}
            <div className="relative z-10 w-[85%] hidden md:block sm:w-[75%] lg:w-[90%] md:mt-10 max-w-[480px] mx-auto drop-shadow-2xl">
              <Image
                src={laptop}
                alt="laptop mockup"
                width={500}
                height={420}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-center lg:text-left">
              How Prypar{" "}
              <span className="relative inline-block px-2 ml-1 rounded-md align-baseline">
                {/* Background gradient */}
                <Image
                  src="/images/gradientText.svg"
                  alt="gradient background"
                  fill
                  className="object-cover rounded-md z-0"
                />

                {/* Foreground text */}
                <span className="relative z-10 text-white">Works</span>
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed text-center lg:text-left">
              Our streamlined approach helps you prepare for exams with
              confidence through personalized learning paths.
            </p>

            {/* Steps List */}
            <div className="space-y-6 px-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 max-w-lg mx-auto lg:mx-0 items-start">
                  {/* Number Badge + Line */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#06B6D4] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="h-12 w-px border-l-4 border-dotted border-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
