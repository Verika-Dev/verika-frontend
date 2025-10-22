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
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By Section */}
        <div className="text-center mb-12 px-4">
          <p className="text-gray-500 text-sm sm:text-base mb-4">
            We Are Trusted By
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {trustedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0">
                <Image
                  src={logo}
                  alt="logo brand"
                  height={40}
                  width={140}
                  className="object-contain opacity-80 hover:opacity-100 transition
                     w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Laptop Mockup with Background */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            {/* Purple background block */}
            <div className="absolute -top-4 sm:top-0 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 w-[85%] sm:w-[70%] lg:w-[65%] h-[300px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden">
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
            <div className="relative z-10 w-[85%] sm:w-[75%] lg:w-[90%] md:mt-10 max-w-[480px] mx-auto drop-shadow-2xl">
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
              How Prypar
              <span className="inline-block bg-cyan-400 text-white px-2 ml-1 rounded-md">
                Works
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed text-center lg:text-left">
              Our streamlined approach helps you prepare for exams with
              confidence through personalized learning paths.
            </p>

            {/* Steps List */}
            <div className="space-y-6">
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
