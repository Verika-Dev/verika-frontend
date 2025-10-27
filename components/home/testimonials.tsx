"use client";
import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
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
  ];

  // Triple the testimonials for smoother infinite loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth auto-scroll with frame-by-frame animation
  useAnimationFrame((time, delta) => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    // Responsive scroll speed
    const scrollSpeed = isMobile ? 0.03 : 0.05;

    container.scrollLeft += delta * scrollSpeed;

    // Reset when scrolled through one set of testimonials
    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft >= singleSetWidth) {
      container.scrollLeft = 0;
    }
  });

  // Touch/drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 500);
  };

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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our{" "}
            <span className="inline-block bg-cyan-400 text-white px-3 ml-1 rounded-md">
              Students
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

        {/* Carousel Container */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            onMouseEnter={() => setIsPaused(true)}
            // onMouseLeave={() => !isDragging && setIsPaused(false)}
            className={`
              flex gap-4 sm:gap-5 lg:gap-6 
              overflow-x-auto scrollbar-hide
              px-4 sm:px-0
              ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}
            `}
            style={{
              scrollBehavior: isDragging ? "auto" : "smooth",
            }}>
            {allTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="
                  flex-shrink-0 
                  w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[400px]
                  bg-white rounded-2xl 
                  border-b-4 border-[#1E56AF] 
                  p-5 sm:p-6 lg:p-7
                  shadow-md hover:shadow-xl 
                  transition-all duration-300
                  select-none
                "
                whileHover={{
                  scale: isMobile ? 1 : 1.02,
                  y: isMobile ? 0 : -8,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                viewport={{ once: true, margin: "-50px" }}>
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 sm:gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional: Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
