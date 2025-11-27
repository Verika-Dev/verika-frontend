"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Users,
  Star,
  ChevronDown,
  Calendar,
  Clock,
  Video,
} from "lucide-react";
import Image from "next/image";
import SessionDetails from "@/components/dashboard/live-session/sessionDetails";

const LiveClasses = () => {
  const [activeTab, setActiveTab] = useState("findTutor");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sessionTab, setSessionTab] = useState("upcoming");
  const [selectedSession, setSelectedSession] = useState<any>(null); // Track session for modal

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
      subjects: ["Mathematics", "Physics"],
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
      subjects: ["Mathematics", "Chemistry", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Biology", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 4,
      name: "Jessica Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["English", "Literature"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 5,
      name: "Amanda Lee",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Physics"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
    {
      id: 6,
      name: "Maria Garcia",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      verified: true,
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Chemistry", "Biology"],
      rate: "₦8,500/hr",
      experience: "8 years",
    },
  ];
  const sessions = [
    {
      id: 1,
      instructor: "Courtney Henry",
      subject: "Mathematics",
      date: "22 Oct, 2020",
      time: "8:20 am",
      price: "₦8,500",
      type: "individual",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      status: "upcoming",
    },
    {
      id: 2,
      instructor: "Darrell Steward",
      subject: "Mathematics",
      date: "22 Oct, 2020",
      time: "8:20 am",
      price: "₦6,500",
      type: "individual",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      status: "upcoming",
    },
    {
      id: 3,
      instructor: "Kristin Watson",
      subject: "Mathematics",
      date: "22 Oct, 2020",
      time: "8:20 am",
      price: "₦8,500",
      type: "individual",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      status: "upcoming",
    },

    // Completed sessions
    {
      id: 4,
      instructor: "Cody Fisher",
      subject: "Physics",
      date: "10 Sep, 2020",
      time: "2:00 pm",
      price: "₦7,000",
      type: "group",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
      status: "completed",
    },
    {
      id: 5,
      instructor: "Arlene McCoy",
      subject: "Chemistry",
      date: "05 Aug, 2020",
      time: "10:00 am",
      price: "₦5,500",
      type: "individual",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      status: "completed",
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

  const stats = [
    {
      label: "Upcoming",
      value: "0",
      icon: "/icons/upcoming-classes.svg",
      color: "text-black",
    },
    {
      label: "Completed",
      value: "0",
      icon: "/icons/completed-classes.svg",
      color: "text-black",
    },
    {
      label: "Total Hours",
      value: "0",
      icon: "/icons/totalhours-classes.svg",
      color: "text-black",
    },
    {
      label: "Avg Rating",
      value: "0",
      icon: "/icons/avgrating-classes.svg",
      color: "text-black",
    },
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

  const filteredSessions = sessions.filter(
    (session) => session.status === sessionTab
  );

  return (
    <div className="min-h-screen bg-white p-6 rounded-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Live Classes</h1>
        <p className="text-gray-600">
          Join interactive sessions with expert instructors
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("findTutor")}
          className={`px-6 py-2.5 cursor-pointer border rounded-lg font-medium transition-all ${
            activeTab === "findTutor"
              ? "bg-gray-200 text-gray-800 shadow-sm border-gray-300"
              : "text-gray-600 hover:text-gray-800 border-gray-200"
          }`}>
          Find Tutor
        </button>
        <button
          onClick={() => setActiveTab("mySessions")}
          className={`px-6 py-2.5 rounded-lg cursor-pointer border font-medium transition-all flex items-center gap-2 ${
            activeTab === "mySessions"
              ? "bg-gray-200 text-gray-800 shadow-sm border-gray-300"
              : "text-gray-600 hover:text-gray-800 border-gray-200"
          }`}>
          My Sessions
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === "mySessions"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            8
          </span>
        </button>
      </div>

      {/* Find Tutor Tab Content */}
      {activeTab === "findTutor" && (
        <>
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
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
                    <div className="flex items-center gap-1 text-blue-600 text-xs border rounded-3xl p-1.5 font-medium">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
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
                      <p className="font-semibold text-gray-800">
                        {tutor.rate}
                      </p>
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
                <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all">
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
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Clear all filters
              </button>
            </div>
          )}
        </>
      )}

      {/* My Sessions Tab Content */}
      {activeTab === "mySessions" && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">{stat.label}</span>
                  {/* <span className="text-xl">{stat.icon}</span> */}
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={24}
                    height={24}
                  />
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Session Tabs */}
          <div className="flex gap-6 border-gray-200 mb-6">
            <button
              onClick={() => setSessionTab("upcoming")}
              className={` p-2 cursor-pointer rounded-lg text-sm border font-medium relative ${
                sessionTab === "upcoming"
                  ? "text-blue-600 bg-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Upcoming
              <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                0
              </span>
            </button>
            <button
              onClick={() => setSessionTab("completed")}
              className={`  p-2 cursor-pointer rounded-lg  border text-sm font-medium ${
                sessionTab === "completed"
                  ? "text-blue-600 bg-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Completed
            </button>
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Card Header */}
                <div className="p-4  border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      <Image
                        src={session.image}
                        alt={session.instructor}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="inline-flex items-center border gap-1 text-gray-500 text-sm font-medium bg-gray-50 px-2 py-1 rounded-full">
                      {session.status === "completed" ? (
                        <Image
                          src="/icons/completed-classes.svg"
                          alt="Completed"
                          width={25}
                          height={25}
                        />
                      ) : (
                        <Image
                          src="/icons/upcoming.svg"
                          alt="Upcoming"
                          width={25}
                          height={25}
                        />
                      )}
                      {session.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {session.instructor}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {session.subject}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar size={14} />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock size={14} />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
                    <Video size={14} />
                    <span className="capitalize">{session.type} session</span>
                  </div>

                  <div className="text-2xl font-bold text-gray-900">
                    {session.price}
                  </div>
                </div>

                {/* Card Footer */}
                <div>
                  {session.status === "upcoming" ? (
                    <div className="p-4 flex gap-2">
                      <button className="flex-1 bg-blue-600 cursor-pointer text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Join Session
                      </button>
                      <button className="flex-1 bg-white border cursor-pointer border-gray-300 text-blue-700 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        Message
                      </button>
                    </div>
                  ) : (
                    <div className="p-4">
                      <button
                        onClick={() => setSelectedSession(session)}
                        className="
      w-full 
      bg-blue-600 
      text-white 
      py-3 
      px-4 
      cursor-pointer
      rounded-xl 
      text-sm 
      font-semibold 
      shadow-sm 
      hover:bg-blue-700 
      active:scale-[0.98] 
      focus:ring-2 
      focus:ring-blue-300 
      transition-all
      duration-200
    ">
                        View Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Sessions */}
          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No {sessionTab} sessions found
              </p>
            </div>
          )}
        </>
      )}

      {/* Session Details Modal */}
      {selectedSession && (
        <SessionDetails
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </div>
  );
};

export default LiveClasses;
