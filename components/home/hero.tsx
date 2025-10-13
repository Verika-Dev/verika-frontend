"use client";
import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import ImageCarouselSection from "./heroCarousel";
import student1 from "@/public/images/pryparStudent.svg";
import student2 from "@/public/images/pryparStudent1.svg";
import student3 from "@/public/images/pryparStudent2.svg";
import Image from "next/image";

export default function HeroSection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 0.15) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      id: 1,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      alt: "Student learning",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      alt: "Student studying",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      alt: "Books and glasses",
    },
    {
      id: 4,
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      alt: "Mentorship session",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              <Image src={student1} alt="" width={100} height={100} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              <Image src={student2} alt="" width={100} height={100} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              <Image src={student3} alt="" width={100} height={100} />
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Trusted by{" "}
            <span className="font-semibold text-gray-900">5000+</span> students.
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Prepare
            <span className="inline-block bg-cyan-400 text-white px-2 mx-1">
              Confidently
            </span>
            For Your Exams
            <br />
            With Prypar
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Interactive lessons, quizzes, AI-powered insights, and expert
            mentorship for all levels—including WAEC, NECO, and JAMB.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16">
          <button className="px-8 py-3.5 bg-[#0A5DEC] cursor-pointer text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </div>

        <ImageCarouselSection />
      </div>
    </section>
  );
}
