import React from "react";
import { Target, Lightbulb, Award } from "lucide-react";
import Image from "next/image";
import target from "@/public/icons/aboutUsmission.svg"
import vision from "@/public/icons/aboutUsVision.svg"
import solution from "@/public/icons/aboutUsSolution.svg"


export default function AboutPrypar() {
  return (
    <section className=" py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center">
            About{" "}
            <span className="relative inline-block px-2 ml-1 rounded-md align-baseline">
              <Image
                src="/images/gradientText.svg"
                alt="gradient background"
                fill
                className="object-cover rounded-md z-0"
              />
              <span className="relative z-10 text-white">Prypar</span>
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Transforming education across Africa with personalized, AI-powered
            learning experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Our Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Image src={target} alt="" className="object-cover text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To empower every African learner with personalized, predictive,
              and engaging digital education,ready for any exam or future
              career.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Image src={vision} alt="" className="object-cover text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A continent where all students have equal access to high quality
              learning, mentorship, and success opportunities.
            </p>
          </div>
        </div>

        {/* Problem We Solve Card - Full Width */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md">
            <Image src={solution} alt="" className=" object-cover text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Problem We Solve
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Millions of African students lack access to tailored study
            resources, predictive exam preparation, practical digital content,
            and a reliable support system for maximizing achievement. Prypar
            bridges these gaps with AI, mentorship, gamification, and
            easy-to-use analytics, equipping every learner for greater confidence
            and results.
          </p>
        </div>
      </div>
    </section>
  );
}
