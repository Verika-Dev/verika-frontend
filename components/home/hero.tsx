"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarouselSection from "./heroCarousel";
import Image from "next/image";
import Link from "next/link";
import student1 from "@/public/images/pryparStudent.svg";
import student2 from "@/public/images/pryparStudent1.svg";
import student3 from "@/public/images/pryparStudent2.svg";

export default function HeroSection() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["Confidently", "Effectively", "Successfully"];

  // Smooth scroll animation (background effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 0.15) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Rotate through words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);

  const currentWord = words[wordIndex];

  return (
    <section className=" py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className=" mx-auto">
        {/*Trust Badge */}
        <div className="flex items-center justify-center max-w-80 rounded-[100px] mx-auto bg-white p-3 border-2 gap-2 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center">
              <Image src={student1} alt="" width={100} height={100} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center">
              <Image src={student2} alt="" width={100} height={100} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center">
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
          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#111827] mb-4 leading-tight"
            style={{ lineHeight: 1.2 }}>
            Prepare{" "}
            <span
              className="relative inline-flex items-center align-baseline whitespace-nowrap"
              style={{ verticalAlign: "baseline" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    color: "#fff",
                    overflow: "hidden",
                    verticalAlign: "middle",
                  }}>
                  {/* background image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "url('/images/gradientText.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      zIndex: 0,
                      opacity: 0.9,
                    }}></div>

                  {/* text in front */}
                  <span
                    style={{
                      position: "relative",
                      zIndex: 1,
                      fontWeight: 700,
                    }}>
                    {currentWord}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            For Your Exams
            <br />
            With Prypar
          </h1>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Interactive lessons, quizzes, AI-powered insights, and expert
            mentorship for all levels—including WAEC, NECO, and JAMB.
          </p>
        </div>

        {/* ✅ CTA Button with Link */}
        <div className="text-center mb-12 sm:mb-16">
          <Link href="/signUp">
            <button className="px-8 py-3.5 bg-[#0A5DEC] cursor-pointer text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        <ImageCarouselSection />
      </div>
    </section>
  );
}
