"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import bg from "@/public/images/signUpBg.png";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import twitter from "@/public/icons/twitter.svg";
import linkedIn from "@/public/icons/linkedin.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#192BC2] to-[#0C145C]/98" />
      </div>

      {/* Main content above background */}
      <div className="relative z-10 max-w-full">
        {/* Newsletter Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-purple-200 text-sm sm:text-base mb-6">
            Sign up for monthly insights, tips, success stories, and exclusive
            offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <div className="relative w-full sm:flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-t from-[#1E40AF] to-[#1E40AF] hover:bg-[#0D1B49] cursor-pointer rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D1B49] focus:ring-offset-2 focus:ring-offset-[#0D1B49]">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-600">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white flex justify-center items-center rounded-full px-4 py-2">
              <Image
                src="/images/pryparLogo.svg"
                alt="prypar logo"
                width={150}
                height={50}
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4 order-2 md:order-3">
            <div className="flex items-center gap-4">
              <span className="text-base text-white font-medium mr-2">
                Follow Us
              </span>
              {[facebook, twitter, instagram, linkedIn].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#1E40AF] p-3 rounded-full hover:bg-[#0D1B49] transition-colors">
                  <Image src={icon} alt="social icon" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Policy section */}
        <div className="w-full flex flex-col md:flex-row justify-between mt-5 items-center text-center md:text-left">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base">
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a
              href="mailto:support@prypar.com"
              className="text-purple-200 hover:text-white transition-colors">
              Contact us: support@prypar.com
            </a>
          </div>

          <p className="text-xs text-white mt-4 md:mt-0">
            © 2025 Prypar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
