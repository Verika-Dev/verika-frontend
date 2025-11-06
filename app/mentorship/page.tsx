"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/home/faq";
import HowPryparWorks from "@/components/home/howPryparWorks";
import MentorsSection from "@/components/home/mentorSection";
import Testimonials from "@/components/home/testimonials";
import { motion } from "framer-motion";

export default function MentorshipPage() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-15 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Get Personalized Support from Top
          <span className="inline-block bg-cyan-400 text-white px-3 ml-1 rounded-md">
            Mentors
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Connect with verified tutors for 1-on-1 sessions, group classes,
          assignment help, and live support across all subjects.
        </p>
      </motion.div>
      <HowPryparWorks />
      <MentorsSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
