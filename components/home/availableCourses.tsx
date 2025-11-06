"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import book from "@/public/images/Book.svg";
import bg from "@/public/images/coursesBg.png";

export default function AvailableCourses() {
  const courses = [
    {
      title: "Nursery",
      description: "Foundational learning for early childhood development.",
      subjects: ["Literacy", "Numeracy", "Early Science"],
      students: "+2 mins",
      color: "from-orange-300 to-orange-400",
    },
    {
      title: "Primary",
      description: "Essential subjects for primary school students.",
      subjects: ["English", "Mathematics", "Basic Science"],
      students: "+2 mins",
      color: "from-orange-300 to-orange-400",
    },
    {
      title: "JSS",
      description: "Junior Secondary School comprehensive curriculum.",
      subjects: ["English", "Mathematics", "Sciences"],
      students: "+2 mins",
      color: "from-orange-300 to-orange-400",
    },
    {
      title: "SSS",
      description: "Senior Secondary School with specialized tracks.",
      subjects: ["Commercial track", "Science Track", "Arts Track"],
      students: "+2 mins",
      color: "from-orange-300 to-orange-400",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // variants={fadeUp}
          className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-center">
            Available{" "}
            <span className="relative inline-block px-2 ml-1 rounded-md align-baseline">
              {/* Background gradient image */}
              <Image
                src="/images/gradientText.svg"
                alt="gradient background"
                fill
                className="object-cover rounded-md z-0"
              />

              {/* Foreground text */}
              <span className="relative z-10 text-white">Courses</span>
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive learning paths designed for every stage of your
            educational journey.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              // variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Top Section with Image */}
              <div className="h-40 relative flex items-center justify-center overflow-hidden rounded-t-2xl">
                {/* Background Image */}
                <Image
                  src={bg}
                  alt="background"
                  fill
                  priority
                  className="object-cover absolute inset-0 z-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF9E58] to-[#FF9E58]/95 z-10" />
                {/* Book Image */}
                <Image
                  src={book}
                  alt="Book"
                  width={100}
                  height={100}
                  className="relative z-20 object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Students */}
                <p className="text-gray-500 text-xs mb-4">{course.students}</p>

                {/* Explore Button */}
                <button className="mt-auto w-full py-2.5 cursor-pointer bg-[#EAF2FF] text-[#1E40AF] font-semibold text-base rounded-lg hover:bg-[#D9E8FF] transition-colors">
                  Explore Courses
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center">
          <button className="px-8 py-3 bg-[#0A5DEC] cursor-pointer text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#094cd6] transition-all duration-200">
            Explore More Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
}
