import React from "react";

export default function HowPryparWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Track",
      description:
        "Select from Arts, Science, Commercial, Tech, or Vocational to start your personalized learning journey.",
    },
    {
      number: 2,
      title: "Engage and Learn",
      description:
        "Dive into interactive modules, quizzes, and AI-guided practice tailored to your exam requirements.",
    },
    {
      number: 3,
      title: "Track Your Progress",
      description:
        "Monitor achievements and readiness with real-time analytics and achievement badges.",
    },
    {
      number: 4,
      title: "Get Mentorship",
      description:
        "Connect with mentors for 1-on-1 or group support, live classes, and assignment help.",
    },
  ];

  const trustedLogos = [
    "LogoIpsum",
    "LogoIpsum",
    "LOGO",
    "LogoIpsum",
    "LogoIpsum",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-4">We Are Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {trustedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                </div>
                <span className="text-lg font-semibold">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Laptop Mockup */}
          <div className="relative order-2 lg:order-1">
            {/* Purple Background Blob */}
            <div className="absolute -left-8 -top-8 w-64 h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl -z-10 blur-sm"></div>
            <div className="absolute -right-4 bottom-0 w-48 h-48 bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl -z-10 blur-sm"></div>

            {/* Laptop Frame */}
            <div className="relative">
              {/* Screen */}
              <div className="bg-gray-900 rounded-t-2xl p-2 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                  {/* Dashboard Content */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-20 bg-purple-600 p-3 flex flex-col items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      </div>
                      <div className="space-y-3 w-full">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div
                            key={item}
                            className="w-full h-8 bg-purple-700 rounded-lg"></div>
                        ))}
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4 bg-gradient-to-br from-purple-50 to-white">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="h-8 w-24 bg-purple-200 rounded-lg"></div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="h-3 w-12 bg-gray-200 rounded mb-1"></div>
                          <div className="h-4 w-16 bg-purple-300 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="h-3 w-12 bg-gray-200 rounded mb-1"></div>
                          <div className="h-4 w-16 bg-pink-300 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="h-3 w-12 bg-gray-200 rounded mb-1"></div>
                          <div className="h-4 w-16 bg-green-300 rounded"></div>
                        </div>
                      </div>

                      {/* Content Sections */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                              <div className="h-6 w-16 bg-purple-500 rounded"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                              <div className="h-6 w-16 bg-purple-500 rounded"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                              <div className="h-6 w-16 bg-purple-500 rounded"></div>
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

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              How Prypar
              <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
                Works
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              Our streamlined approach helps you prepare for exams with
              confidence through personalized learning paths.
            </p>

            {/* Steps List */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-300 mx-auto mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
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
