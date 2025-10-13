"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "JSS/SSS",
      subtitle: "Comprehensive secondary education",
      price: "₦8,000",
      featured: true,
      gradient: "from-purple-700 via-purple-600 to-indigo-700",
      features: [
        "AI-powered study insights",
        "Mock exams and practice tests",
        "Advanced progress analytics",
        "Live chat support",
        "Assignment uploads",
      ],
    },
    {
      name: "JAMB/WAEC/NECO",
      subtitle: "Exam-focused preparation",
      price: "₦8,000",
      featured: false,
      gradient: "from-purple-100 to-purple-50",
      textColor: "text-purple-700",
      features: [
        "All exam prep courses",
        "AI question predictions",
        "Past paper analysis",
        "Personalized study plans",
        "Priority mentor access",
        "Performance guarantees",
      ],
    },
    {
      name: "Tech & Vocational",
      subtitle: "Exam-focused preparation",
      price: "₦8,000",
      featured: false,
      gradient: "from-purple-100 to-purple-50",
      textColor: "text-purple-700",
      features: [
        "All exam prep courses",
        "AI question predictions",
        "Past paper analysis",
        "Personalized study plans",
        "Priority mentor access",
        "Performance guarantees",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Simple, Transparent
            <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
              Pricing
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Choose the perfect plan for your learning journey. No hidden fees,
            cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}>
              Pay Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label="Toggle pricing">
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isYearly ? "transform translate-x-7" : ""
                }`}></div>
            </button>
            <span
              className={`text-sm font-medium ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}>
              Pay Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.featured ? "transform md:scale-105 md:-mt-4" : "bg-white"
              }`}>
              {/* Card Content */}
              <div
                className={`${
                  plan.featured
                    ? `bg-gradient-to-br ${plan.gradient}`
                    : "bg-white"
                } p-8`}>
                {/* Header */}
                <div
                  className={`mb-6 ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-purple-100" : "text-gray-600"
                    }`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div
                  className={`mb-6 ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-purple-100" : "text-gray-600"
                      }`}>
                      / Month
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.featured ? "bg-white/20" : "bg-purple-100"
                        }`}>
                        <Check
                          className={`w-3.5 h-3.5 ${
                            plan.featured ? "text-white" : "text-purple-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-white" : "text-gray-700"
                        }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    plan.featured
                      ? "bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl"
                      : "bg-purple-600 text-white hover:bg-purple-700 border-2 border-purple-600 hover:border-purple-700"
                  }`}>
                  Get Started Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
