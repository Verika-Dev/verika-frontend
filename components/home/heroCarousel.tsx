"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/images/image1.svg";
import img2 from "@/public/images/image2.svg";
import img3 from "@/public/images/image3.svg";
import img4 from "@/public/images/image4.svg";

export default function ImageShowcaseSection() {
  const images = [img1, img2, img3, img4];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
      <div className="w-full ">
     

        {/* Images Container - Full Width */}
        <div className="relative w-full">
          {/* Desktop View - Horizontal Layout */}
          <div className="hidden md:flex items-center justify-between  w-full">
            {images.map((img, index) => {
              const isFirst = index === 0;
              const isLast = index === images.length - 1;
            

              return (
                <div
                  key={index}
                  className="relative group flex-1 max-w-[400px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}>
                  <div
                    className={`
                      relative w-full overflow-hidden
                      transition-all duration-500 ease-out
                    
                      ${
                        isFirst || isLast
                          ? "scale-113  z-10"
                          : "scale-100 "
                      }
                    `}
                    style={{
                      aspectRatio: "3/4",
                      transformOrigin: "center",
                    }}>
                    {/* Image */}
                    <Image
                      src={img}
                      alt={`Showcase image ${index + 1}`}
                      fill
                      className={`
                        object-cover transition-transform duration-500
                      
                      `}
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />

              

                
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet View - Vertical/Grid Layout */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4">
            {images.map((img, index) => {
              const isFirst = index === 0;
              const isLast = index === images.length - 1;

              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    transition: "all 0.3s ease",
                  }}>
                  <div
                    className={`
                      relative w-full overflow-hidden
                      transition-all duration-300
                                          `}
                    style={{
                      aspectRatio: "3/4",
                    }}>
                    <Image
                      src={img}
                      alt={`Showcase image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />

            
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Navigation Dots */}
        {/* <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setHoveredIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }
              `}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
  );
}
