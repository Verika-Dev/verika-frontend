"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import book from "@/public/images/Book.svg";
import bg from "@/public/images/coursesBg.png";

// Mock data - replace with your actual data
const coursesData = [
  {
    id: 1,
    title: "Nursery",
    description: "Foundational learning for early childhood development",
    subjects: ["Literacy", "Numeracy", "Early Science"],
    duration: "+2 mins",
    category: "nursery",
    image: "/images/Book.svg",
  },
  {
    id: 2,
    title: "Primary",
    description: "Essential subjects for primary school students",
    subjects: ["English", "Mathematics", "Basic Science"],
    duration: "+2 mins",
    category: "primary",
    image: "/images/Book.svg",
  },
  {
    id: 3,
    title: "JSS",
    description: "Junior Secondary School comprehensive curriculum",
    subjects: ["English", "Mathematics", "Sciences"],
    duration: "+2 mins",
    category: "jss",
    image: "/images/Book.svg",
  },
  {
    id: 4,
    title: "SSS",
    description: "Senior Secondary School with specialized tracks",
    subjects: ["Commercial Track", "Science Track", "Arts Track"],
    duration: "+2 mins",
    category: "sss",
    image: "/images/Book.svg",
  },
  {
    id: 5,
    title: "JAMB/WAEC/NECO",
    description: "Comprehensive exam preparation with practice tests",
    subjects: ["English", "Mathematics", "Arts Track"],
    duration: "+2 mins",
    category: "jamb",
    image: "/images/Book.svg",
  },
  {
    id: 6,
    title: "Coding & Tech",
    description: "Modern technical skills for the digital age",
    subjects: ["Arts Track", "+2 more"],
    duration: "+2 mins",
    category: "coding",
    image: "/images/Book.svg",
  },
  {
    id: 7,
    title: "Vocational",
    description: "Practical skills for career readiness",
    subjects: ["Arts Track", "+2 more"],
    duration: "+2 mins",
    category: "vocational",
    image: "/images/Book.svg",
  },
  {
    id: 8,
    title: "Vocational",
    description: "Practical skills for career readiness",
    subjects: ["Arts Track", "+2 more"],
    duration: "+2 mins",
    category: "vocational",
    image: "/images/Book.svg",
  },
];

const categories = [
  "All Courses",
  "Nursery",
  "Primary",
  "JSS",
  "SSS",
  "JAMB",
  "Coding & Tech",
  "Vocational",
];

export default function CoursesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  // Filter courses based on search and category
  const filteredCourses = useMemo(() => {
    let filtered = coursesData;

    // Filter by category
    if (activeCategory !== "All Courses") {
      filtered = filtered.filter(
        (course) => course.title === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((course) => {
        const query = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.subjects.some((subject) =>
            subject.toLowerCase().includes(query)
          )
        );
      });
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className=" py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Explore Our{" "}
            <span className="relative inline-block px-2 ml-1 rounded-md align-baseline">
              {/* Gradient background */}
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
            Interactive lessons, AI insights, and expert mentorship across all
            subject streams—from nursery to career-ready.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 max-w-2xl mx-auto">
          <div className="relative bg-white  rounded-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 overflow-x-auto">
          <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center min-w-max sm:min-w-0 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-medium text-base cursor-pointer whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "border-b-[#0A5DEC] border-b-4 text-[#0A5DEC] shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        {searchQuery && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mb-6">
            Found {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""}
          </motion.p>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
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

                  {/* Duration */}
                  <p className="text-gray-500 text-xs mb-4">
                    {course.duration}
                  </p>

                  {/* Explore Button */}
                  <button className="mt-auto w-full py-2.5 cursor-pointer bg-[#EAF2FF] text-[#1E40AF] font-semibold text-base rounded-lg hover:bg-[#D9E8FF] transition-colors">
                    Explore Courses
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you're looking
                for
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Courses");
                }}
                className="px-6 py-2 bg-[#0A5DEC] text-white font-medium rounded-lg hover:bg-[#094cd6] transition-colors">
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Explore More Button */}
        {filteredCourses.length > 0 && (
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
        )}
      </div>
    </section>
  );
}