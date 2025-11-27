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
import Image from "next/image";

const JAMBDashboard = () => {
  return (
    <div className="min-h-screen bg-white p-6 rounded-lg">
      {/* <AdminNav/> */}
      <div className="">
        {/* Header Section */}
        <div className="bg-[#E0E8FF] rounded-2xl p-6 mb-8 shadow-sm">
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

              <p className="text-3xl font-bold text-purple-600 flex items-center gap-1">
                <Image
                  src="/icons/firestreak.png"
                  alt="streak"
                  width={30}
                  height={30}
                />
                0
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Total Course</p>
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/total-course.svg"
                  alt="course"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Badges Earned</p>
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <Image
                  src="/icons/badges.svg"
                  alt="badges"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Study Time</p>
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/stop-clock.svg"
                  alt="clock"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Leaderboard</p>
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <Image
                  src="/icons/leaderboard.svg"
                  alt="leaderboard"
                  width={20}
                  height={20}
                />
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
            {/* ITEM 1 */}
            <div className="flex flex-col items-center">
              <button className="bg-[#FDEBFF] cursor-pointer hover:from-pink-200 hover:to-pink-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md w-full">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src="/icons/play-purple.svg"
                      alt="continue lesson"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </button>
              <p className="text-sm font-medium text-gray-700 text-center mt-2">
                Continue Last Lesson
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center">
              <button className="bg-[#FFF3EB] cursor-pointer hover:from-orange-200 hover:to-orange-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md w-full">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src="/icons/practice-test.svg"
                      alt="practice test"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </button>
              <p className="text-sm font-medium text-gray-700 text-center mt-2">
                Take Practice Test
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center">
              <button className="bg-[#ECEBFF] cursor-pointer hover:from-purple-200 hover:to-purple-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md w-full">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src="/icons/book-mentor-session.svg"
                      alt="book mentor"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </button>
              <p className="text-sm font-medium text-gray-700 text-center mt-2">
                Book Mentor Session
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col items-center">
              <button className="bg-[#EBFFF2] cursor-pointer hover:from-green-200 hover:to-green-300 rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md w-full">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src="/icons/upload-assignment.svg"
                      alt="upload assignment"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </button>
              <p className="text-sm font-medium text-gray-700 text-center mt-2">
                Upload Assignment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white border-[#EDEFFE] border rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Recent Activity
            </h2>
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-8 h-8 text-gray-400" />
                {/* <Image src="/icons/no-recent-activity.svg" alt="no activity" width={40} height={40}/> */}
              </div>
              <p className="text-sm text-gray-500">No recent activities yet</p>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white border border-[#EDEFFE] rounded-2xl p-6 shadow-sm">
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
