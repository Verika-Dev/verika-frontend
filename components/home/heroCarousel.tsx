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
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto text-center">
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-64 h-72 sm:w-72 sm:h-80 overflow-hidden rounded shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src={img}
                alt={`image-${index}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
