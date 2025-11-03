"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import pryparLogo from "@/public/images/pryparLogo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // get current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-transparent ">
      <div className="max-w-[90%] mx-auto  p-6   sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0  cursor-pointer">
            <Image
              src={pryparLogo}
              alt="Prypar Logo"
              width={200}
              height={100}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)); // handles subpaths

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#0A5DEC] bg-[#EBEFFF] rounded-[100px]"
                      : "text-gray-600 hover:text-[#0A5DEC] hover:bg-gray-50"
                  }`}>
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-[#0A5DEC] rounded-full"></span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/signUp"
              className="px-8 py-4 bg-[#0A5DEC] hover:bg-[#0A5DEC]/90 text-white font-semibold rounded-lg transition-colors duration-200 text-base">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#0A5DEC] hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200  items-center gap-2 ${
                  isActive
                    ? "text-[#0A5DEC] bg-purple-50"
                    : "text-gray-600 hover:text-[#0A5DEC] hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#0A5DEC] rounded-full"></span>
                )}
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/signUp"
            className="block w-full px-4 py-3 mt-3 bg-[#0A5DEC] text-white font-semibold rounded-lg transition-colors duration-200 text-base text-center"
            onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
