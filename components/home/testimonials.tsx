"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Annette Black",
      location: "Parent • Abuja",
      rating: 5,
      text: "Prypar's AI insights helped me focus my study and I scored higher in JAMB. The predictive questions were spot-on!",
      avatar: "AB",
    },
    {
      name: "Emeka O.",
      location: "Senior • Lagos",
      rating: 5,
      text: "With progress tracking, I can support my child's education more closely. The parent dashboard is excellent.",
      avatar: "EO",
    },
    {
      name: "Ogechi A.",
      location: "School Admin • Port Harcourt",
      rating: 5,
      text: "Mentorship sessions make tough topics easy to understand. My Physics grades improved dramatically!",
      avatar: "OA",
    },
    {
      name: "Ibrahim M.",
      location: "Student • Kano",
      rating: 5,
      text: "The gamified learning keeps me motivated. I've completed more lessons in 2 months than I did all last year!",
      avatar: "IM",
    },
    {
      name: "Chidinma N.",
      location: "Parent • Enugu",
      rating: 5,
      text: "Best investment in my daughter's education. Her confidence and grades have improved significantly.",
      avatar: "CN",
    },
    {
      name: "Tunde A.",
      location: "Student • Ibadan",
      rating: 5,
      text: "The practice questions are exactly like the real exams. I felt so prepared walking into my WAEC exams!",
      avatar: "TA",
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    let lastTime = Date.now();

    const scroll = () => {
      const now = Date.now();
      const delta = now - lastTime;
      lastTime = now;

      const scrollSpeed = 0.03; // pixels per millisecond
      const newPosition = scrollPosition + delta * scrollSpeed;

      // Reset position when we've scrolled through one set
      const resetPoint = scrollContainer.scrollWidth / 3;
      if (newPosition >= resetPoint) {
        setScrollPosition(0);
        scrollContainer.scrollLeft = 0;
      } else {
        setScrollPosition(newPosition);
        scrollContainer.scrollLeft = newPosition;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [scrollPosition]);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our
            <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
              Students
            </span>
            Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive learning paths designed for every stage of your
            educational journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}>
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
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

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
