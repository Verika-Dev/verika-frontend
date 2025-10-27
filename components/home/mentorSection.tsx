"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";

// Mock data - replace with your actual data
const mentorsData = [
  {
    id: 1,
    name: "Devon Lane",
    image: "/images/mentor1.svg",
    rating: 4.9,
    verified: true,
    students: "1,283 Learn English students",
    subjects: ["Mathematics", "Mathematics"],
    experience: "9 years",
    location: "NG 20537+",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    image: "/images/mentor1.svg",
    rating: 4.9,
    verified: true,
    students: "428 students",
    subjects: ["Mathematics", "Mathematics"],
    experience: "8 years",
    location: "NG 20537+",
  },
  {
    id: 3,
    name: "Bessie Cooper",
    image: "/images/mentor2.svg",
    rating: 4.9,
    verified: true,
    students: "1,283 Learn English students",
    subjects: ["Mathematics", "Mathematics"],
    experience: "9 years",
    location: "NG 20537+",
  },
  {
    id: 4,
    name: "Devon Lane",
    image: "/images/mentor2.svg",
    rating: 4.9,
    verified: true,
    students: "428 students",
    subjects: ["Mathematics", "Mathematics"],
    experience: "9 years",
    location: "NG 20537+",
  },
];

export default function MentorsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Meet Our Top
            <span className="inline-block bg-cyan-400 text-white px-3 ml-1 rounded-md">
              Mentors
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Experienced educators ready to help you succeed
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentorsData.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* ✅ Verified badge at top right */}
              {mentor.verified && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border text-[#5B21B6] text-xs font-semibold">
                  <Image
                    src="/icons/verifiedMentor.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="text-[#374151]">Verified</p>
                </div>
              )}

              {/* Profile Section */}
              <div className="p-6 flex flex-col items-center mt-6">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {mentor.rating}
                    </span>
                  </div>
                </div>

                {/* Students Count */}
                <p className="text-xs text-gray-600 text-center mb-4">
                  {mentor.students}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {mentor.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Details Grid */}
                <div className="w-full grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {mentor.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {mentor.location}
                    </p>
                  </div>
                </div>

                {/* Book Session Button */}
                <button className="w-full py-2.5 bg-[#0A5DEC] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
