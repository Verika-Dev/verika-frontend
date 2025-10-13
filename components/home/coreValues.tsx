import React from "react";
import { Users, Brain, Trophy, MessageCircle } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Access For All",
      description:
        "Affordable, curriculum-aligned learning resources accessible to every student, regardless of background or location.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive AI Insights",
      description:
        "Real-time, personalized predictions for likely exam topics and mastery gaps—so students always focus where it matters most.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Motivation Through Gamification",
      description:
        "Badges, points, and learner leaderboards turn hard work into an engaging journey that celebrates progress.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Mentorship & Support",
      description:
        "Live 1-on-1 or group support ensures every student gets practical help, assignment feedback, and expert guidance.",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Laptop Mockup */}
          <div className="relative order-2 lg:order-1">
            {/* Purple Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 rounded-[3rem] transform -rotate-3 scale-105"></div>

            {/* Laptop Container */}
            <div className="relative z-10">
              {/* Laptop Screen */}
              <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                <div
                  className="bg-white rounded-lg overflow-hidden"
                  style={{ aspectRatio: "16/10" }}>
                  {/* Dashboard Content */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-16 sm:w-20 bg-purple-700 p-2 sm:p-3 flex flex-col items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-2">
                        <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      </div>
                      <div className="space-y-2 w-full">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="w-full h-8 bg-purple-600 rounded-lg"></div>
                        ))}
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="h-4 w-32 bg-gray-800 rounded mb-2 font-semibold"></div>
                          <div className="h-3 w-24 bg-purple-300 rounded"></div>
                        </div>
                        <div className="h-8 w-20 bg-purple-200 rounded-lg"></div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          {
                            color:
                              "bg-gradient-to-br from-purple-400 to-purple-600",
                          },
                          {
                            color:
                              "bg-gradient-to-br from-pink-400 to-pink-600",
                          },
                          {
                            color:
                              "bg-gradient-to-br from-blue-400 to-blue-600",
                          },
                          {
                            color:
                              "bg-gradient-to-br from-green-400 to-green-600",
                          },
                        ].map((stat, idx) => (
                          <div
                            key={idx}
                            className={`${stat.color} rounded-xl p-2 sm:p-3 text-white shadow-md`}>
                            <div className="h-2 w-8 bg-white/50 rounded mb-1"></div>
                            <div className="h-3 w-12 bg-white rounded"></div>
                          </div>
                        ))}
                      </div>

                      {/* Course Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl p-3 shadow-md">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white">
                              <div className="w-4 h-4 bg-white rounded"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                          </div>
                          <button className="w-full mt-2 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-semibold">
                            Start
                          </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl p-3 shadow-md">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white">
                              <div className="w-4 h-4 bg-white rounded"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                          </div>
                          <button className="w-full mt-2 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-semibold">
                            Start
                          </button>
                        </div>

                        {/* Bottom Section Cards */}
                        <div className="col-span-2 bg-white rounded-xl p-3 shadow-md">
                          <div className="h-3 w-24 bg-gray-800 rounded mb-2"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div className="h-2 w-16 bg-gray-300 rounded"></div>
                                <div className="h-6 w-16 bg-purple-600 rounded"></div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div className="h-2 w-16 bg-gray-300 rounded"></div>
                                <div className="h-6 w-16 bg-purple-600 rounded"></div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div className="h-2 w-16 bg-gray-300 rounded"></div>
                                <div className="h-6 w-16 bg-purple-600 rounded"></div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div className="h-2 w-16 bg-gray-300 rounded"></div>
                                <div className="h-6 w-16 bg-purple-600 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-xl"></div>
              <div className="h-2 bg-gray-600 rounded-b-3xl mx-auto w-2/3"></div>
            </div>
          </div>

          {/* Right Side - Core Values */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our Core
              <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              The principles that guide everything we do at Prypar
            </p>

            {/* Values List */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white shadow-md`}>
                      {value.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
