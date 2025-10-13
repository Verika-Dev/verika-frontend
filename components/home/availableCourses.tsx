"use client";
import React from "react";
import { BookOpen } from "lucide-react";
import book from "@/public/images/Book.svg";
import Image from "next/image";
import bg from "@/public/images/coursesBg.png";
// import book from "@/public/images/Book.svg"

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
      subjects: ["Commercial track", "Science Track"],
      students: "Arts Track    +2 mins",
      color: "from-orange-300 to-orange-400",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Available
            <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
              Courses
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive learning paths designed for every stage of your
            educational journey.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Book Icon Section */}
              <div className="h-40 flex relative items-center justify-center p-6 overflow-hidden rounded-t-2xl">
                {/* Background image */}
                <Image
                  src={bg}
                  alt="background"
                  fill
                  priority
                  className="object-cover absolute inset-0 z-0"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF9E58] to-[#FF9E58]/96 z-10" />

                {/* Book image (in front) */}
                <Image
                  src={book}
                  alt="Book"
                  width={100}
                  height={100}
                  className="relative z-20 object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Students Count */}
                <p className="text-gray-500 text-xs mb-4">{course.students}</p>

                {/* Explore Button */}
                <button className="w-full py-2.5 text-[#1E40AF] font-semibold text-base transition-colors cursor-pointer rounded-lg bg-[#EAF2FF]">
                  Explore Courses
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-[#0A5DEC] text-white cursor-pointer font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
}
