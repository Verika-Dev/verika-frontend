"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Clock } from "lucide-react";
import { useTutorAvailability } from "@/hooks/useTutorAvailability";
// ---- TYPES ----
type TimeSlot = string;
import { buildISO } from "@/utils/buildISO";
interface AvailabilityPayload {
  startTime: string;
  endTime: string;
  isRecurring: boolean;
  recurrence: "weekly" | "monthly" | "daily";
  exceptionDates: string[];
  overrideSlots: {
    date: string;
    startTime: string;
    endTime: string;
  }[];
}

interface AvailabilityMap {
  [dateKey: string]: TimeSlot[];
}

export default function TutorSchedule() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<TimeSlot[]>([]);
  const [availability, setAvailability] = useState<AvailabilityMap>({});
  const { checkAvailability, loading, error, data } = useTutorAvailability();

  const timeSlots: TimeSlot[] = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const getDaysInMonth = (date: Date): (Date | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const formatDateKey = (date: Date): string => {
    return date.toISOString().split("T")[0];
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

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const key = formatDateKey(date);
    setSelectedTimeSlots(availability[key] || []);
    setShowModal(true);
  };

  const toggleTimeSlot = (time: TimeSlot): void => {
    setSelectedTimeSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const saveAvailability = async (): Promise<void> => {
    if (!selectedDate || selectedTimeSlots.length === 0) {
      setShowModal(false);
      return;
    }

    const dateKey = formatDateKey(selectedDate);

    // Convert each selected time into 1-hour blocks
    const blocks = selectedTimeSlots.map((t) => {
      const startISO = buildISO(selectedDate, t);

      const oneHourLater = new Date(startISO);
      oneHourLater.setHours(oneHourLater.getHours() + 1);

      return {
        startTime: startISO,
        endTime: oneHourLater.toISOString(),
      };
    });

    const startTime = blocks[0].startTime;
    const endTime = blocks[blocks.length - 1].endTime;

    // Explicit type
    const recurrence: "weekly" | "monthly" | "daily" = "weekly";

    const payload: AvailabilityPayload = {
      startTime,
      endTime,
      isRecurring: false,
      recurrence,
      exceptionDates: [],
      overrideSlots: blocks.map((b) => ({
        date: selectedDate.toISOString().split("T")[0] + "T00:00:00Z",
        startTime: b.startTime,
        endTime: b.endTime,
      })),
    };

    const res = await checkAvailability(payload);

    setAvailability((prev) => ({
      ...prev,
      [dateKey]: selectedTimeSlots,
    }));

    setShowModal(false);
    setSelectedDate(null);
    setSelectedTimeSlots([]);
  };

  const hasAvailability = (date: Date | null): boolean => {
    if (!date) return false;
    const dateKey = formatDateKey(date);
    return availability[dateKey] && availability[dateKey].length > 0;
  };

  const isToday = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth(currentDate);

  // ---- UI ----
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Schedule Availability
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Set your available time slots for students to book sessions.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {formatDate(currentDate)}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((date, index) => (
              <div key={index} className="aspect-square">
                {date ? (
                  <button
                    onClick={() => handleDateClick(date)}
                    className={`w-full h-full rounded-lg border transition-all flex flex-col items-center justify-center relative ${
                      isToday(date)
                        ? "border-blue-600 bg-purple-50"
                        : hasAvailability(date)
                        ? "border-blue-300 bg-blue-50 hover:bg-blue-100"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}>
                    <span
                      className={`text-sm font-medium ${
                        isToday(date) ? "text-blue-600" : "text-gray-900"
                      }`}>
                      {date.getDate()}
                    </span>

                    {hasAvailability(date) && (
                      <div className="absolute bottom-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      </div>
                    )}
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-blue-600 bg-blue-50"></div>
              <span className="text-sm text-gray-600">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-blue-300 bg-blue-50 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-sm text-gray-600">Has Availability</span>
            </div>
          </div>
        </div>

        {/* Availability Summary */}
        {Object.keys(availability).length > 0 && (
          <div className="mt-6 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Your Scheduled Availability
            </h3>

            <div className="space-y-3">
              {Object.entries(availability)
                .filter(([_, slots]) => slots.length > 0)
                .map(([dateKey, slots]) => {
                  const date = new Date(dateKey);
                  return (
                    <div
                      key={dateKey}
                      className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">
                          {date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {slots.length} time slot
                          {slots.length > 1 ? "s" : ""} available
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 max-w-md justify-end">
                        {slots.map((slot) => (
                          <span
                            key={slot}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedDate && (
        <div className="fixed inset-0 bg-white/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedDate(null);
                setSelectedTimeSlots([]);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Set Availability
              </h2>
              <p className="text-gray-600 text-sm">
                Select time slots for{" "}
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {selectedTimeSlots.length} time slot
                  {selectedTimeSlots.length !== 1 ? "s" : ""} selected
                </span>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => toggleTimeSlot(time)}
                    className={`py-3 px-4 rounded-lg border-2 transition-all text-sm font-medium ${
                      selectedTimeSlots.includes(time)
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                    }`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedDate(null);
                  setSelectedTimeSlots([]);
                }}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg border border-gray-300">
                Cancel
              </button>
              <button
                onClick={saveAvailability}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg">
                Save Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
