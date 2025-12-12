"use client";

import React, { useEffect, useState } from "react";
import { X, Calendar, Clock } from "lucide-react";
import axios from "axios";

interface Session {
  id: string;
  title: string;
  date: string; // ISO string
  time: string; // e.g., "14:00"
  status: string; // "upcoming", "completed", etc.
}

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/sessions/upcoming"); // Replace with your actual endpoint
        setSessions(res.data || []);
      } catch (err: any) {
        console.error(err);
        setError("Failed to fetch upcoming sessions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  if (loading) {
    return (
      <div className="bg-white border border-[#EDEFFE] rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center py-12">
        <p className="text-gray-500 text-sm">Loading upcoming sessions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white border border-[#EDEFFE] rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center py-12">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="bg-white border border-[#EDEFFE] rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <X className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500">
          You haven't booked any sessions yet
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EDEFFE] rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Upcoming Sessions
      </h2>
      <ul className="flex flex-col gap-3">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="border rounded-xl p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div className="flex flex-col">
              <p className="font-medium text-gray-700">{session.title}</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(session.date).toLocaleDateString()}</span>
                <Clock className="w-4 h-4" />
                <span>{session.time}</span>
              </div>
            </div>
            <span
              className={`mt-2 md:mt-0 px-2 py-1 rounded-full text-xs font-medium ${
                session.status === "upcoming"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-500"
              }`}>
              {session.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
