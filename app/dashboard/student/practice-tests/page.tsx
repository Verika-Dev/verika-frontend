"use client"
import React, { useState } from "react";
import { Brain, Award, Clock, Trophy, BookOpen, Timer } from "lucide-react";

const PracticeTest = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Overall Readiness",
      value: "0",
      change: "+12%",
      icon: Brain,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Badges Earned",
      value: "0",
      change: "+3 New",
      icon: Award,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Study Time",
      value: "0",
      change: "This week",
      icon: Clock,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Leaderboard",
      value: "0",
      change: "#247",
      icon: Trophy,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const quizzes = [
    {
      id: 1,
      title: "JAMB Mathematics Mock Test 2024",
      questions: 60,
      duration: 100,
      color: "from-orange-400 to-orange-500",
    },
    {
      id: 2,
      title: "Physics Fundamentals Assessment",
      questions: 60,
      duration: 100,
      color: "from-orange-400 to-orange-500",
    },
    {
      id: 3,
      title: "Organic Chemistry Challenge",
      questions: 60,
      duration: 120,
      color: "from-orange-400 to-orange-500",
    },
  ];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Practice Test
          </h1>
          <p className="text-gray-600">
            Take quizzes to test your understanding and prepare for your exams
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <div
                  className={`w-8 h-8 ${stat.iconBg} rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Quiz Icon */}
              <div
                className={`h-40 bg-gradient-to-br ${quiz.color} flex items-center justify-center p-8`}>
                <div className="relative">
                  {/* Book Icon */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="w-16 h-20 relative">
                      {/* Book pages */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-r-lg"></div>
                      {/* Book spine */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 to-blue-700 rounded-l-lg"></div>
                      {/* Bookmark */}
                      <div
                        className="absolute top-0 right-4 w-3 h-16 bg-gradient-to-b from-pink-400 to-pink-500"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                        }}></div>
                      {/* Pages detail */}
                      <div className="absolute right-1 top-2 bottom-2 left-3 space-y-2">
                        <div className="h-1 bg-blue-200 rounded"></div>
                        <div className="h-1 bg-blue-200 rounded w-4/5"></div>
                        <div className="h-1 bg-blue-200 rounded"></div>
                        <div className="h-1 bg-blue-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quiz Details */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3rem]">
                  {quiz.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Timer className="w-4 h-4" />
                    <span>{quiz.duration} minutes</span>
                  </div>
                </div>

                {/* Start Quiz Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all">
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-2">No quizzes found</p>
            <p className="text-gray-400 text-sm">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeTest;
