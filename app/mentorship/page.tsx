"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/home/faq";
import HowPryparWorks from "@/components/home/howPryparWorks";
import MentorsSection from "@/components/home/mentorSection";
import Testimonials from "@/components/home/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MentorshipPage() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/bgLandingpage.png"
          alt="Landing background"
          fill
          className="object-cover opacity-10 -z-10"
          priority
        />
        <Navbar />
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-15 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Get Personalized Support from Top{" "}
            <span className="relative block w-fit mx-auto mt-2">
              {/* Gradient background */}
              <span className="absolute inset-0">
                <Image
                  src="/images/gradientText.svg"
                  alt="gradient background"
                  fill
                  className="object-cover rounded-md"
                />
              </span>
              {/* Foreground text */}
              <span className="relative z-10 text-white px-3">Mentors</span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Connect with verified tutors for 1-on-1 sessions, group classes,
            assignment help, and live support across all subjects.
          </p>
        </motion.div>
        <MentorsSection />
      </div>
      {/* <HowPryparWorks /> */}

      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
