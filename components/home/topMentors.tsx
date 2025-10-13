import React from "react";
import { MapPin, Users, Star, CheckCircle } from "lucide-react";

export default function TopMentors() {
  const mentors = [
    {
      name: "Devon Lane",
      image: "DL",
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics", "More..."],
      rate: "₦8,500/hr",
      experience: "8 years",
      verified: true,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Eleanor Pena",
      image: "EP",
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics", "More..."],
      rate: "₦8,500/hr",
      experience: "8 years",
      verified: true,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "Bessie Cooper",
      image: "BC",
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics", "More..."],
      rate: "₦8,500/hr",
      experience: "8 years",
      verified: true,
      gradient: "from-orange-400 to-orange-600",
    },
    {
      name: "Devon Lane",
      image: "DL",
      rating: 4.9,
      location: "Lagos, Nigeria",
      students: 450,
      subjects: ["Mathematics", "Mathematics", "Physics", "More..."],
      rate: "₦8,500/hr",
      experience: "8 years",
      verified: true,
      gradient: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Meet Our Top
            <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
              Mentors
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Experienced educators ready to help you succeed
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Card Content */}
              <div className="p-6">
                {/* Avatar and Verified Badge */}
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${mentor.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {mentor.image}
                  </div>
                  {mentor.verified && (
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Name and Rating */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {mentor.rating}
                    </span>
                  </div>
                </div>

                {/* Location and Students */}
                <div className="flex items-center justify-center gap-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{mentor.students} students</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
                  {mentor.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Rate and Experience */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Rate</p>
                    <p className="text-sm font-bold text-gray-900">
                      {mentor.rate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                    <p className="text-sm font-bold text-gray-900">
                      {mentor.experience}
                    </p>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
