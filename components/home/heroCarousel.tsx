"use client";

import React from "react";
import Image from "next/image";

import img1 from "@/public/images/image1.svg";
import img2 from "@/public/images/image2.svg";
import img3 from "@/public/images/image3.svg";
import img4 from "@/public/images/image4.svg";

export default function ImageShowcaseSection() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="relative py-20 overflow-hidden ">
      <div className="text-center">
        <div className="flex justify-between flex-wrap">
          {images.map((img, index) => {
          
            const isEdge = index === 0 || index === images.length - 1;
            const scaleClass = isEdge ? "scale-140" : "scale-120";

            return (
              <div
                key={index}
                className={`relative sm:w-72  sm:h-80 overflow-hidden rounded  transition-all duration-500 ease-in-out ${scaleClass}`}
                style={{
                  transformOrigin: "center",
                }}>
                <Image
                  src={img}
                  alt={`image-${index}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
