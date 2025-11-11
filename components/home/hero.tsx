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
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const words = ["Confidently", "Effectively", "Successfully"];

  // Typewriter animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (typing) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100); // typing speed
      } else {
        setTyping(false);
        timeout = setTimeout(() => {
          setTyping(false);
        }, 5000); // pause before deleting
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 200); // deleting speed
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, wordIndex, words]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Trust Badge */}
        <div className="flex items-center justify-center max-w-xs sm:max-w-sm rounded-full mx-auto bg-white p-3 border-2 gap-2 mb-10 shadow-sm">
          <div className="flex -space-x-2">
            {[student1, student2, student3].map((img, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500">
                <Image
                  src={img}
                  alt={`student-${i}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Trusted by{" "}
            <span className="font-semibold text-gray-900">5000+</span> students.
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#111827] leading-tight mb-4">
            Prepare{" "}
            <span className="relative inline-flex items-center align-baseline whitespace-nowrap">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative font-bold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  color: "#fff",
                }}>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  style={{
                    backgroundImage: "url('/images/gradientText.svg')",
                  }}
                />
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "inherit",
                    textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    minWidth: "8ch",
                  }}>
                  {displayedText}
                  <motion.span
                    className="inline-block bg-white ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{
                      width: "2px",
                      height: "1.2em",
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              </motion.span>
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

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16">
          <Link href="/signUp">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-8 py-3.5 bg-[#0A5DEC] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Hero Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <ImageCarouselSection />
        </motion.div>
      </div>
    </section>
  );
}
