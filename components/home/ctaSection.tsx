"use client";
import React from "react";
import Image from "next/image";
import laptop from "@/public/images/laptop.svg";
import bg from "@/public/images/signUpBg.png";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background image */}
          <Image
            src={bg}
            alt="background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#192BC2] to-[#0C145C]/95" />

          {/* Main content grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
            {/* Left Side - Text */}
            <div className="p-8 sm:p-12 lg:p-16 text-white z-10 relative text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Ace Your Exams!
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book a live session with a trusted mentor for personalized
                guidance and fast answers. Get the support you need to excel in
                your studies.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="px-8 py-4 bg-[#1E40AF] cursor-pointer text-white font-bold rounded-lg hover:bg-[#1E3A8A] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book A Session
                </button>
              </div>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="relative flex justify-center items-center px-6 sm:px-10 lg:px-0 z-10 order-first lg:order-last">
              <div className="relative w-64 sm:w-80 md:w-[22rem] lg:w-[26rem] xl:w-[30rem]">
                <Image
                  src={laptop}
                  alt="Laptop mockup"
                  width={500}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Decorative glow elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
