"use client";

import React, { useState } from "react";
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
import AdminNav from "@/components/dashboard/header/navbar";
import Image from "next/image";
import axios from "axios";
import AssignmentSubmission from "@/components/dashboard/uploads/assignment-upload";
import UpcomingSessions from "@/components/dashboard/student/upcoming-session";
import RecentActivities from "@/components/dashboard/student/recent-activities";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const JAMBDashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<null | (() => void)>(null);
  const [showAssignmentSubmission, setShowAssignmentSubmission] =
    useState(false);

  const handleActionClick = (action: string) => {
    switch (action) {
      case "continue-lesson":
        // navigate to last lesson
        window.location.href = "/dashboard/student/course-library";
        break;
      case "practice-test":
        window.location.href = "/dashboard/student/practice-tests";
        break;
      case "book-mentor":
        window.location.href = "/dashboard/student/live-sessions";
        break;
      case "upload-assignment":
        setShowAssignmentSubmission(true);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 rounded-lg">
      {/* Header Section */}
      <div className="bg-[#E0E8FF] rounded-2xl p-6 mb-8 shadow-sm flex justify-between items-start">
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

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Course", icon: "/icons/total-course.svg", value: 0 },
          { label: "Badges Earned", icon: "/icons/badges.svg", value: 0 },
          { label: "Study Time", icon: "/icons/stop-clock.svg", value: 0 },
          { label: "Leaderboard", icon: "/icons/leaderboard.svg", value: 0 },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">{card.label}</p>
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              label: "Continue Last Lesson",
              icon: "/icons/play-purple.svg",
              bg: "bg-[#FDEBFF]",
              action: "continue-lesson",
            },
            {
              label: "Take Practice Test",
              icon: "/icons/practice-test.svg",
              bg: "bg-[#FFF3EB]",
              action: "practice-test",
            },
            {
              label: "Book Mentor Session",
              icon: "/icons/book-mentor-session.svg",
              bg: "bg-[#ECEBFF]",
              action: "book-mentor",
            },
            {
              label: "Upload Assignment",
              icon: "/icons/upload-assignment.svg",
              bg: "bg-[#EBFFF2]",
              action: "upload-assignment",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <button
                onClick={() => handleActionClick(item.action)}
                className={`${item.bg} cursor-pointer rounded-2xl p-8 transition-all duration-200 shadow-sm hover:shadow-md w-full`}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </button>
              <p className="text-sm font-medium text-gray-700 text-center mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <RecentActivities />

        {/* Upcoming Sessions */}
        <UpcomingSessions />
      </div>

      {/* Assignment Submission Modal */}
      {showAssignmentSubmission && (
        <AssignmentSubmission
          onClose={() => setShowAssignmentSubmission(false)}
        />
      )}
    </div>
  );
};

export default JAMBDashboard;
