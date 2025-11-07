"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const coursesData = [
  {
    id: 1,
    title: "JSS/SSS",
    subtitle: "Comprehensive secondary education",
    price: "₦8,000",
    period: "/Month",
    features: [
      "All approved study program",
      "Mock exams and practice tests",
      "Personalized study plans",
      "Live chat support",
      "Assignment uploads",
    ],
    category: "secondary",
    isActive: true,
  },
  {
    id: 2,
    title: "JAMB/WAEC/NECO",
    subtitle: "Exam-focused preparation",
    price: "₦8,000",
    period: "/Month",
    features: [
      "All exam prep courses",
      "All question predictors",
      "Past paper analysis",
      "Personalized study plans",
      "Priority mentor access",
      "Performance guarantees",
    ],
    category: "exams",
    isActive: false,
  },
  {
    id: 3,
    title: "Tech & Vocational",
    subtitle: "Professional skill development",
    price: "₦8,000",
    period: "/Month",
    features: [
      "All tech & vocational courses",
      "Project-based learning",
      "Mentor sessions",
      "Job-ready projects",
      "Career guidance",
    ],
    category: "tech",
    isActive: false,
  },
];

const categories = [
  "All Courses",
  "Nursery",
  "Primary",
  "Secondary",
  "Exams",
  "Tech",
];

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [activePlan, setActivePlan] = useState<number>(1);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All Courses") return coursesData;
    return coursesData.filter(
      (course) => course.category === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

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
            Simple, Transparent{" "}
            <span className="relative inline-block px-3 ml-1 rounded-md align-baseline">
              {/* Gradient background */}
              <Image
                src="/images/gradientText.svg"
                alt="gradient background"
                fill
                className="object-cover rounded-md z-0"
              />
              {/* Foreground text */}
              <span className="relative z-10 text-white">Pricing</span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Choose the perfect plan for your learning journey. No hidden fees,
            cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className={`text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}>
              Pay Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billingCycle === "yearly" ? "bg-cyan-400" : "bg-gray-300"
              }`}
              aria-label="Toggle billing cycle">
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
              }`}>
              Pay Yearly
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => {
              const isActive = activePlan === course.id;

              return (
                <motion.div
                  key={course.id}
                  custom={index}
                  //   variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => setActivePlan(course.id)}
                  className={`
                    flex flex-col rounded-2xl overflow-hidden 
                    shadow-lg hover:shadow-2xl 
                    transition-all duration-300 cursor-pointer
                    transform hover:scale-[1.02]
                    ${
                      isActive
                        ? "bg-gradient-to-b from-[#1E56AF] to-[#1E56AF] text-white"
                        : "bg-white border-2 border-gray-200 "
                    }
                  `}>
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors ${
                        isActive ? "text-white" : "text-gray-900"
                      }`}>
                      {course.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className={`text-sm mb-6 transition-colors ${
                        isActive ? "text-purple-100" : "text-gray-600"
                      }`}>
                      {course.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span
                        className={`text-4xl font-bold transition-colors ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}>
                        {course.price}
                      </span>
                      <span
                        className={`text-base transition-colors ${
                          isActive ? "text-purple-100" : "text-gray-600"
                        }`}>
                        {course.period}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={`
                              w-5 h-5 rounded-full flex items-center justify-center 
                              flex-shrink-0 mt-0.5 transition-colors duration-300
                              ${isActive ? "bg-[#34C759]" : "bg-[#1E40AF]"}
                            `}>
                            <Check
                              className="w-3 h-3 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span
                            className={`text-sm leading-relaxed transition-colors ${
                              isActive ? "text-purple-50" : "text-gray-700"
                            }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      className={`
                        w-full py-3 font-semibold text-base rounded-lg 
                        transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg
                        ${
                          isActive
                            ? "bg-[#0A5DEC] text-white"
                            : "bg-[#EAF2FF] text-[#1E40AF]"
                        }
                      `}>
                      Get Started Now
                    </button>
                  </div>

                  {/* Popular Badge for Active Plan */}
                  {/* {isActive && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#34C759] text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )} */}
                </motion.div>
              );
            })
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
                No plans found
              </h3>
              <p className="text-gray-500 mb-6">
                No courses available in this category at the moment.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
