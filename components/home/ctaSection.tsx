import React from "react";
import { Star, Calendar } from "lucide-react";

export default function CTASection() {
  const mentors = [
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      rating: 4.9,
      students: "200+",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "David Chen",
      subject: "Physics",
      rating: 4.8,
      students: "180+",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Amina Ibrahim",
      subject: "Chemistry",
      rating: 5.0,
      students: "250+",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Michael Obi",
      subject: "English",
      rating: 4.9,
      students: "220+",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Grace Eze",
      subject: "Biology",
      rating: 4.7,
      students: "190+",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "John Adebayo",
      subject: "Economics",
      rating: 4.8,
      students: "210+",
      color: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="p-8 sm:p-12 lg:p-16 text-white z-10 relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Ace Your Exams!
              </h2>
              <p className="text-purple-100 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg">
                Book a live session with a trusted mentor for personalized
                guidance and fast answers. Get the support you need to excel in
                your studies.
              </p>
              <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book A Session
              </button>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="relative px-8 pb-8 lg:pb-0 lg:pr-12 flex items-center justify-center">
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>

              {/* Laptop */}
              <div className="relative z-10 transform lg:scale-110 lg:translate-x-8">
                {/* Laptop Screen */}
                <div className="bg-gray-900 rounded-t-2xl p-2 sm:p-3 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-gray-800 rounded-t-xl p-1">
                    {/* Camera */}
                    <div className="flex justify-center mb-1">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ aspectRatio: "16/10" }}>
                    {/* Browser Header */}
                    <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-400">
                        prypar.com/mentors
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-white h-full overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="h-3 w-24 bg-purple-600 rounded mb-1"></div>
                          <div className="h-2 w-32 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-6 w-6 bg-purple-200 rounded-full"></div>
                      </div>

                      {/* Categories */}
                      <div className="flex gap-2 mb-4">
                        <div className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                          Live Classes
                        </div>
                        <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">
                          All Mentors
                        </div>
                      </div>

                      {/* Mentor Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {mentors.map((mentor, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow">
                            {/* Avatar */}
                            <div
                              className={`w-full aspect-square bg-gradient-to-br ${mentor.color} rounded-lg mb-2 flex items-center justify-center text-white font-bold text-sm`}>
                              {mentor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>

                            {/* Info */}
                            <div className="text-xs">
                              <p className="font-bold text-gray-800 truncate mb-0.5">
                                {mentor.name}
                              </p>
                              <p className="text-gray-500 text-xs truncate mb-1">
                                {mentor.subject}
                              </p>

                              {/* Rating */}
                              <div className="flex items-center gap-1 mb-1">
                                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                                <span className="text-gray-700 font-semibold">
                                  {mentor.rating}
                                </span>
                              </div>

                              {/* Students */}
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                <span>{mentor.students}</span>
                              </div>

                              {/* Book Button */}
                              <button className="w-full mt-2 py-1 bg-purple-600 text-white rounded text-xs font-semibold hover:bg-purple-700 transition-colors">
                                Book
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-xl"></div>
                <div className="h-1.5 bg-gray-600 rounded-b-3xl mx-auto w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
