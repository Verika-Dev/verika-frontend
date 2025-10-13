"use client";
import React from "react";
import { BookOpen } from "lucide-react";

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
              <div
                className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center p-6`}>
                <div className="relative">
                  <div className="w-24 h-28 bg-white rounded-lg shadow-lg relative overflow-hidden">
                    {/* Book pages effect */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 border-r-2 border-gray-200"></div>
                      <div className="w-1/2"></div>
                    </div>
                    {/* Book binding */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2"></div>
                  </div>
                  {/* Bookmark */}
                  <div className="absolute top-0 right-2 w-4 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-b-sm shadow-md"></div>
                </div>
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
                <button className="w-full py-2.5 text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors border-2 border-purple-600 rounded-lg hover:bg-purple-50">
                  Explore Courses
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
}
