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
    <footer className="relative bg-blue-600 text-white py-12 px-5 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#192BC2] to-[#0C145C]/95" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-14 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-purple-200 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Sign up for monthly insights, tips, success stories, and exclusive
            offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto">
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
              className="w-full sm:w-auto px-8 py-3 bg-[#1E40AF] hover:bg-[#0D1B49] cursor-pointer rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D1B49] focus:ring-offset-2 focus:ring-offset-transparent">
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500/60 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white flex justify-center items-center rounded-full px-4 py-2">
              <Image
                src="/images/pryparLogo.svg"
                alt="Prypar logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <span className="text-base text-white font-medium">Follow Us</span>
            <div className="flex items-center gap-3">
              {[facebook, twitter, instagram, linkedIn].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#1E40AF] p-3 rounded-full hover:bg-[#0D1B49] transition-colors">
                  <Image
                    src={icon}
                    alt="social icon"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm mt-8 ">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
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

          <p className="text-xs text-purple-100 mt-2 md:mt-0">
            © {new Date().getFullYear()} Prypar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
