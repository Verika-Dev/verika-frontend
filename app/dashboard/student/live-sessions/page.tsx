"use client";
import React, { useState } from "react";
import { Search, MapPin, Users, Star, ChevronDown } from "lucide-react";

const LiveClasses = () => {
  const [activeTab, setActiveTab] = useState("findTutor");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const tutors = [
    {
      id: 1,
      name: "Devon Lane",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 3,
      name: "Eleanor Pena",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 4,
      name: "Eleanor Pena",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 5,
      name: "Eleanor Pena",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 6,
      name: "Eleanor Pena",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
  ];

  const subjects = [
    "All Subjects",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
  ];
  const priceRanges = [
    "All Prices",
    "Under ₦5,000",
    "₦5,000 - ₦10,000",
    "Over ₦10,000",
  ];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesSubject =
      selectedSubject === "all" ||
      selectedSubject === "All Subjects" ||
      tutor.subjects.some((sub) => sub === selectedSubject);

    const matchesPrice =
      selectedPrice === "all" || selectedPrice === "All Prices";

    return matchesSearch && matchesSubject && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Live Classes
          </h1>
          <p className="text-gray-600">
            Join interactive sessions with expert instructors
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("findTutor")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "findTutor"
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}>
            Find Tutor
          </button>
          <button
            onClick={() => setActiveTab("mySessions")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === "mySessions"
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}>
            My Sessions
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
              8
            </span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutor by name or subject"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white cursor-pointer">
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white cursor-pointer">
              {priceRanges.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                {tutor.verified && (
                  <div className="flex items-center gap-1 text-purple-600 text-xs font-medium">
                    <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Verified
                  </div>
                )}
              </div>

              {/* Name and Rating */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    {tutor.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-800">
                      {tutor.rating}
                    </span>
                  </div>
                </div>

                {/* Location and Students */}
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{tutor.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{tutor.students} students</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {subject}
                    </span>
                  ))}
                  <button className="px-3 py-1 text-gray-500 text-xs hover:text-gray-700">
                    More...
                  </button>
                </div>

                {/* Rate and Experience */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Rate</p>
                    <p className="font-semibold text-gray-800">{tutor.rate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs mb-1">Experience</p>
                    <p className="font-semibold text-gray-800">
                      {tutor.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-lg transition-all">
                Book Session
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No tutors found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSubject("all");
                setSelectedPrice("all");
              }}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClasses;
