"use client";
import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "@/public/images/profileimg.png";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPaused = useRef(false);

  const testimonials = [
    {
      name: "Annette Black",
      location: "Parent • Abuja",
      rating: 5,
      text: "Prypar's AI insights helped me focus my study and I scored higher in JAMB. The predictive questions were spot-on!",
      avatar: profileImage,
    },
    {
      name: "Emeka O.",
      location: "Senior • Lagos",
      rating: 5,
      text: "With progress tracking, I can support my child's education more closely. The parent dashboard is excellent.",
      avatar: profileImage,
    },
    {
      name: "Ogechi A.",
      location: "School Admin • Port Harcourt",
      rating: 5,
      text: "Mentorship sessions make tough topics easy to understand. My Physics grades improved dramatically!",
      avatar: profileImage,
    },
    {
      name: "Ibrahim M.",
      location: "Student • Kano",
      rating: 5,
      text: "The gamified learning keeps me motivated. I've completed more lessons in 2 months than I did all last year!",
      avatar: profileImage,
    },
    {
      name: "Chidinma N.",
      location: "Parent • Enugu",
      rating: 5,
      text: "Best investment in my daughter's education. Her confidence and grades have improved significantly.",
      avatar: profileImage,
    },
    {
      name: "Tunde A.",
      location: "Student • Ibadan",
      rating: 5,
      text: "The practice questions are exactly like the real exams. I felt so prepared walking into my WAEC exams!",
      avatar: profileImage,
    },
  ];

  // Duplicate for infinite scroll illusion
  const allTestimonials = [...testimonials, ...testimonials];

  // Smooth auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let position = 0;
    const scrollSpeed = 0.08; // pixels per millisecond
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused.current) {
        position += delta * scrollSpeed;
        if (position >= container.scrollWidth / 2) {
          // Reset seamlessly
          position = 0;
        }
        container.scrollLeft = position;
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our{" "}
            <span className="inline-block bg-cyan-400 text-white px-2 ml-1 rounded-md">
              Students
            </span>{" "}
            Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive learning paths designed for every stage of your
            educational journey.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {allTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border-b-4 border-[#1E56AF] p-6 shadow-sm hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}>
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  “{testimonial.text}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
