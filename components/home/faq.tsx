"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Prypar different from other study platforms?",
      answer:
        "Prypar uses AI to predict exam questions, offers curriculum-aligned content across all major subjects, gamifies progress, and provides personalized mentorship and real-time performance tracking. Our platform is specifically designed for the Nigerian education system.",
    },
    {
      question: "Is Prypar suitable for students of all levels?",
      answer:
        "Yes, Prypar is designed to accommodate students at various academic levels, from primary to secondary education. Our adaptive learning technology adjusts to each student's pace and proficiency.",
    },
    {
      question: "How do I track my learning progress?",
      answer:
        "Prypar provides a comprehensive dashboard where you can monitor your performance across subjects, view detailed analytics, track completed lessons, and see your improvement over time through interactive charts and progress reports.",
    },
    {
      question: "Can I get live mentorship?",
      answer:
        "Yes, Prypar offers live mentorship sessions with qualified educators. Students can schedule one-on-one sessions, ask questions in real-time, and receive personalized guidance to help overcome challenging topics.",
    },
    {
      question: "What payment options do you offer?",
      answer:
        "We accept multiple payment methods including debit/credit cards, bank transfers, mobile money, and USSD. We also offer flexible subscription plans - monthly, quarterly, and annual - to suit different budgets.",
    },
    {
      question: "Is the content regularly updated for exams?",
      answer:
        "Absolutely! Our content team continuously updates materials to align with the latest curriculum changes and exam patterns. We add new practice questions, video lessons, and study materials regularly to ensure students have access to the most current information.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? index : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title and Description */}
          <div className="lg:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked
              <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Get answers to common questions about Prypar's features and
              services.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between p-4 sm:p-5 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
                  aria-expanded={openIndex === index}>
                  <span className="flex items-start gap-2 flex-1 pr-4">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex-shrink-0 text-gray-400">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
