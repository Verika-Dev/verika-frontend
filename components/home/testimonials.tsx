"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  const testimonials = useMemo(
    () => [
      {
        name: "Annette Black",
        location: "Parent • Abuja",
        rating: 5,
        text: "Prypar's AI insights helped me focus my study and I scored higher in JAMB. The predictive questions were spot-on!",
        avatar: "/images/pryparStudent.svg",
      },
      {
        name: "Emeka O.",
        location: "Senior • Lagos",
        rating: 5,
        text: "With progress tracking, I can support my child's education more closely. The parent dashboard is excellent.",
        avatar: "/images/pryparStudent.svg",
      },
      {
        name: "Ogechi A.",
        location: "School Admin • Port Harcourt",
        rating: 5,
        text: "Mentorship sessions make tough topics easy to understand. My Physics grades improved dramatically!",
        avatar: "/images/pryparStudent.svg",
      },
      {
        name: "Ibrahim M.",
        location: "Student • Kano",
        rating: 5,
        text: "The gamified learning keeps me motivated. I've completed more lessons in 2 months than I did all last year!",
        avatar: "/images/pryparStudent1.svg",
      },
      {
        name: "Chidinma N.",
        location: "Parent • Enugu",
        rating: 5,
        text: "Best investment in my daughter's education. Her confidence and grades have improved significantly.",
        avatar: "/images/pryparStudent.svg",
      },
      {
        name: "Tunde A.",
        location: "Student • Ibadan",
        rating: 5,
        text: "The practice questions are exactly like the real exams. I felt so prepared walking into my WAEC exams!",
        avatar: "/images/pryparStudent1.svg",
      },
    ],
    []
  );

  // Duplicate the list for seamless looping
  const loopedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation effect
  useEffect(() => {
    const speed = isMobile ? 40 : 60; // smaller = faster
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        },
      });
    }
  }, [controls, isPaused, isMobile]);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-center">
            What Our{" "}
            <span className="relative inline-block px-3 ml-1 rounded-md align-baseline">
              {/* Background gradient image */}
              <Image
                src="/images/gradientText.svg"
                alt="gradient background"
                fill
                className="object-cover rounded-md z-0"
              />
              {/* Foreground text */}
              <span className="relative z-10 text-white">Students</span>
            </span>{" "}
            Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Real stories from students, parents, and educators across Nigeria
          </motion.p>
        </div>

        {/* Infinite Motion Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={controls}
            style={{ x: "0%" }}>
            {loopedTestimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[400px] bg-white rounded-2xl border-b-4 border-[#1E56AF] p-6 shadow-md hover:shadow-xl transition-all">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
