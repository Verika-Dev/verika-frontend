"use client";

import { useState } from "react";
import {
  Users,
  BookOpen,
  Upload,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Wallet,
} from "lucide-react";

interface Stats {
  totalStudents: number;
  upcomingLessons: number;
  walletBalance: number;
}

interface ScheduleItem {
  time: string;
  student: string;
  subject: string;
}

interface QuickAction {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  color: string;
}

export default function TutorDashboard() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2023, 6)); // July 2023

  const stats: Stats = {
    totalStudents: 12,
    upcomingLessons: 12,
    walletBalance: 24000,
  };

  const todaySchedule: ScheduleItem[] = [
    {
      time: "09:18PM",
      student: "Bessie Cooper",
      subject: "Communication Studies",
    },
    { time: "06:07AM", student: "Jerome Bell", subject: "Religious Studies" },
    { time: "12:14PM", student: "Esther Howard", subject: "Astronomy" },
  ];

  const quickActions: QuickAction[] = [
    { icon: BookOpen, label: "Add New Lesson", color: "purple" },
    { icon: Wallet, label: "View Earnings", color: "purple" },
    { icon: Upload, label: "Upload Assignment", color: "purple" },
    { icon: UserPlus, label: "Student Request", color: "purple" },
  ];

  const daysOfWeek: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (date: Date): (number | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7;

    const days: (number | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const formatMonth = (date: Date): string => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const previousMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const days = getDaysInMonth(currentDate);
  const highlightedDays: number[] = [4, 11];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 text-sm mt-1">
            Here's a quick summary of your teaching stats
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Students */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Total Students</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalStudents}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Actively learning with you
                </p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users size={20} className="text-purple-600" />
              </div>
            </div>
          </div>

          {/* Upcoming Lessons */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Upcoming Lessons</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.upcomingLessons}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  First lesson at 10:00 AM
                </p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-purple-600" />
              </div>
            </div>
          </div>

          {/* Wallet Balance */}
          <div className="bg-gradient-to-br from-purple-700 to-purple-600 rounded-lg shadow-sm p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-2">Wallet Balance</p>
                <p className="text-3xl font-bold">
                  ₦{stats.walletBalance.toLocaleString()}
                </p>
                <p className="text-purple-100 text-sm mt-1">
                  Available for payout
                </p>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Wallet size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {/* <action.icon size={24} className="text-purple-600" /> */}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {action.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Today's Schedule
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm font-semibold text-gray-900 pb-3 pr-4">
                      TIME
                    </th>
                    <th className="text-left text-sm font-semibold text-gray-900 pb-3 pr-4">
                      STUDENT NAME
                    </th>
                    <th className="text-left text-sm font-semibold text-gray-900 pb-3 pr-4">
                      SUBJECT
                    </th>
                    <th className="text-left text-sm font-semibold text-gray-900 pb-3">
                      ACTION
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {todaySchedule.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0">
                      <td className="py-4 pr-4 text-sm text-gray-900">
                        {item.time}
                      </td>
                      <td className="py-4 pr-4 text-sm text-gray-900">
                        {item.student}
                      </td>
                      <td className="py-4 pr-4 text-sm text-gray-900">
                        {item.subject}
                      </td>
                      <td className="py-4">
                        <button className="text-sm text-purple-600 font-medium hover:text-purple-700 underline">
                          Join Class
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  {formatMonth(currentDate)}
                  <ChevronDown size={16} />
                </button>

                <div className="flex gap-1">
                  <button
                    onClick={previousMonth}
                    className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <ChevronLeft size={20} className="text-gray-600" />
                  </button>

                  <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <ChevronRight size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <div key={index} className="aspect-square">
                    {day ? (
                      <button
                        className={`w-full h-full rounded-lg text-sm font-medium transition-colors ${
                          highlightedDays.includes(day)
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}>
                        {day}
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
