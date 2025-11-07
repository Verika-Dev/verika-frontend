"use client"
import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, BookOpen, Users } from "lucide-react";

const CourseLibrary = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const courses = [
    {
      id: 1,
      title: "English Language",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-orange-400 to-orange-500",
      icon: "📖",
    },
    {
      id: 2,
      title: "Physics",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-yellow-300 to-yellow-400",
      icon: "📊",
    },
    {
      id: 3,
      title: "Chemistry",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-emerald-400 to-emerald-500",
      icon: "🧪",
    },
    {
      id: 4,
      title: "Biology",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-cyan-300 to-cyan-400",
      icon: "🧬",
    },
    {
      id: 5,
      title: "Economics",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-orange-200 to-orange-300",
      icon: "📈",
    },
    {
      id: 6,
      title: "Economics",
      price: "₦5,000",
      lessons: 20,
      students: 20,
      color: "from-rose-300 to-rose-400",
      icon: "🏠",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Course Library
          </h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("explore")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "explore"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            }`}>
            Explore Courses
          </button>
          <button
            onClick={() => setActiveTab("enrolled")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "enrolled"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            }`}>
            Enrolled Courses
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by</span>
            </button>
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  All Subjects
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Science
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Arts
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Commercial
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Sort by</span>
            </button>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Most Popular
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Price: Low to High
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Price: High to Low
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                  Newest First
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Course Image */}
              <div
                className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <div className="text-7xl">{course.icon}</div>
              </div>

              {/* Course Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">
                    {course.title}
                  </h3>
                  <span className="text-lg font-bold text-gray-800">
                    {course.price}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} lesson</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{course.students} Students Enrolled</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-2">No courses found</p>
            <p className="text-gray-400 text-sm mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-purple-600 hover:text-purple-700 font-medium">
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseLibrary;
