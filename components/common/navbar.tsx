"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/about", active: true },
    { name: "Courses", href: "/courses", active: false },
    { name: "Pricing", href: "/pricing", active: false },
    { name: "Mentorship", href: "/mentorship", active: false },
    { name: "Contact Us", href: "/contact", active: false },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                Prypär
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? "text-purple-600 flex items-center gap-1.5"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                }`}>
                {link.active && (
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="/get-started"
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                link.active
                  ? "text-purple-600 bg-purple-50 flex items-center gap-2"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}>
              {link.active && (
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              )}
              {link.name}
            </Link>
          ))}
          <a
            href="/get-started"
            className="block w-full px-4 py-3 mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm text-center"
            onClick={() => setIsMenuOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
