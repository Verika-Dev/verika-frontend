"use client";
import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function HeroSection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 0.15) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      id: 1,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      alt: "Student learning",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      alt: "Student studying",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      alt: "Books and glasses",
    },
    {
      id: 4,
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      alt: "Mentorship session",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              A
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              B
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              C
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Trusted by{" "}
            <span className="font-semibold text-gray-900">5000+</span> students.
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Prepare
            <span className="inline-block bg-cyan-400 text-white px-2 mx-1">
              Confidently
            </span>
            For Your Exams
            <br />
            With Prypar
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Interactive lessons, quizzes, AI-powered insights, and expert
            mentorship for all levels—including WAEC, NECO, and JAMB.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16">
          <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Curved Carousel */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          {/* Perspective container for 3D effect */}
          <div
            className="absolute inset-0"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}>
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}>
              {duplicatedImages.map((image, index) => {
                // Calculate position in carousel
                const totalImages = duplicatedImages.length;
                const position = (index / totalImages + scrollOffset / 100) % 1;

                // Horizontal position (-1 to 1, left to right)
                const horizontalPos = (position - 0.5) * 2;

                // X position spreads across screen
                const x = horizontalPos * 400;

                // Z position creates concave curve (depth into screen)
                // Center cards go deeper (away from viewer), edge cards come forward
                const maxDepth = 150;
                const z = -Math.pow(horizontalPos, 2) * maxDepth;

                // Scale based on depth (further = smaller)
                const depthScale = 1 + z / 500;
                const scale = Math.max(0.7, Math.min(1.1, depthScale));

                // Opacity based on depth
                const opacity = 0.5 + (1 - Math.abs(horizontalPos)) * 0.5;

                // Rotation for 3D effect
                const rotateY = horizontalPos * 25;

                return (
                  <div
                    key={`${image.id}-${index}`}
                    className={`absolute top-1/2 left-1/2 w-44 h-52 sm:w-52 sm:h-64 rounded-xl shadow-2xl ${image.color} flex items-center justify-center text-white font-semibold`}
                    style={{
                      transform: `
                        translate(-50%, -50%) 
                        translateX(${x}px) 
                        translateZ(${z}px) 
                        rotateY(${rotateY}deg) 
                        scale(${scale})
                      `,
                      opacity: opacity,
                      zIndex: Math.round((1 - Math.abs(z) / maxDepth) * 100),
                      transition: "none",
                    }}>
                    <div className="text-center p-4">
                      <Users className="w-14 h-14 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">{image.alt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
