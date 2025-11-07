import React from "react";
import {
  BookOpen,
  Award,
  Clock,
  Trophy,
  Play,
  FileText,
  Video,
  Upload,
  X,
} from "lucide-react";
import AdminNav from "@/components/dashboard/admin/navbar";

const JAMBDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* <AdminNav/> */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Welcome, Janel! 👋
              </h1>
              <p className="text-gray-600 text-sm">
                Ready to continue your JAMB preparation journey?
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Current Streak</p>
              <p className="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Total Course</p>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Badges Earned</p>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Study Time</p>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Leaderboard</p>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <button className="bg-gradient-to-br from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Play className="w-7 h-7 text-white" fill="white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Continue Last Lesson
                </p>
              </div>
            </button>

            <button className="bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Take Practice Test
                </p>
              </div>
            </button>

            <button className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Book Mentor Session
                </p>
              </div>
            </button>

            <button className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                  <Upload className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Upload Assignment
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Recent Activity
            </h2>
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">No recent activities yet</p>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Upcoming Sessions
            </h2>
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">
                You haven't book any sessions yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JAMBDashboard;
