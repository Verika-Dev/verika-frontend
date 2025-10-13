import React from "react";
import { Star, Calendar } from "lucide-react";
import Image from "next/image";
import laptop from "@/public/images/laptop.svg";
import bg from "@/public/images/signUpBg.png"

export default function CTASection() {
  const mentors = [
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      rating: 4.9,
      students: "200+",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "David Chen",
      subject: "Physics",
      rating: 4.8,
      students: "180+",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Amina Ibrahim",
      subject: "Chemistry",
      rating: 5.0,
      students: "250+",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Michael Obi",
      subject: "English",
      rating: 4.9,
      students: "220+",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Grace Eze",
      subject: "Biology",
      rating: 4.7,
      students: "190+",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "John Adebayo",
      subject: "Economics",
      rating: 4.8,
      students: "210+",
      color: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto  relative">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background image */}
          <Image
            src={bg}
            alt="background"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#192BC2] to-[#0C145C]/98" />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="p-8 sm:p-12 lg:p-16 text-white z-10 relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Ace Your Exams!
              </h2>
              <p className="text-white text-base sm:text-md lg:text-lg mb-8 leading-relaxed max-w-lg">
                Book a live session with a trusted mentor for personalized
                guidance and fast answers. Get the support you need to excel in
                your studies.
              </p>
              <button className="px-8 py-4 bg-[#1E40AF] cursor-pointer text-white font-bold rounded-lg hover:bg-[#1E40AF] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book A Session
              </button>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="absolute left-1/2 px-8 pb-8 lg:pb-0 lg:pr-12 flex items-center justify-center">
              <Image src={laptop} alt="laptop" width={400} height={900} />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
