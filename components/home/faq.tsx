"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        "We accept multiple payment methods including debit/credit cards, bank transfers, mobile money, and USSD. We also offer flexible subscription plans — monthly, quarterly, and annual — to suit different budgets.",
    },
    {
      question: "Is the content regularly updated for exams?",
      answer:
        "Absolutely! Our content team continuously updates materials to align with the latest curriculum changes and exam patterns. We add new practice questions, video lessons, and study materials regularly to ensure students have access to the most current information.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Framer Motion variants for smooth scroll animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-16 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}>
          {/* Left Column - Title and Description */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Frequently Asked{" "}
              <span className="inline-block bg-cyan-400 text-white px-2 rounded-md">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Get answers to common questions about Prypar’s features and
              services.
            </p>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            className="space-y-4 w-full"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="visible"
                initial="hidden"
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-5 sm:p-6 focus:outline-none  focus:ring-offset-2"
                  aria-expanded={openIndex === index}>
                  <span className="flex items-start gap-3 flex-1 pr-4">
                    {/* <span className="text-cyan-500 mt-1">•</span> */}
                    <span className="font-medium text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                  <div className="px-5 sm:px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
