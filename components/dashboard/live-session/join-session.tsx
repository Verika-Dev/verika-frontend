"use client";
import React, { useState } from "react";
import { Send, Users, MessageSquare } from "lucide-react";

export default function LiveSessionVideoChat() {
  const [activeTab, setActiveTab] = useState("chats");
  const [message, setMessage] = useState("");

  const participants = [
    {
      id: 1,
      name: "Esther Howard",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      message:
        "Lorem ipsum dolor sit amet consectetur. Eleifend mauris neque quis quis consectetur nis. Eius amet sit netus aliquet eu imperdiet ut.",
      time: "10:34 am",
    },
    {
      id: 2,
      name: "Jerome Bell",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      message:
        "Lorem ipsum dolor sit amet consectetur. Eleifend mauris neque quis quis consectetur nis. Eius amet sit netus aliquet eu imperdiet ut.",
      time: "10:35 am",
    },
    {
      id: 3,
      name: "Sarah Cooper",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      message:
        "Lorem ipsum dolor sit amet consectetur. Eleifend mauris neque quis quis consectetur nis. Eius amet sit netus aliquet eu imperdiet ut.",
      time: "10:36 am",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex bg-gray-900 h-full min-h-[600px] rounded-xl overflow-hidden shadow-xl">
      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent z-10">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-white text-xl font-semibold mb-1">
                Mathematics Class
              </h1>
              <p className="text-white/80 text-sm">20 April 2025</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white/70 text-xs mb-1">Session Duration</p>
              <p className="text-white text-xl font-bold">02:30:50</p>
            </div>
          </div>
        </div>

        {/* Video Content */}
        <div className="w-full h-full bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 flex items-center justify-center">
          {/* Instructor Video Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Full Screen Toggle */}
            <button className="absolute -top-12 -right-12 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Instructor Name Tag */}
        <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-white text-sm font-medium">Esther James</p>
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="w-96 bg-gray-800 flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab("chats")}
            className={`flex-1 px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === "chats"
                ? "text-white bg-gray-700/50"
                : "text-gray-400 hover:text-white"
            }`}>
            Chats
          </button>
          <button
            onClick={() => setActiveTab("participants")}
            className={`flex-1 px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === "participants"
                ? "text-white bg-gray-700/50"
                : "text-gray-400 hover:text-white"
            }`}>
            Participants
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeTab === "chats" ? (
            participants.map((participant) => (
              <div key={participant.id} className="flex gap-3">
                <img
                  src={participant.avatar}
                  alt={participant.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">
                      {participant.name}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    {participant.message}
                  </p>
                  <span className="text-gray-500 text-xs">
                    {participant.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-3">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center gap-3 p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                  <img
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      {participant.name}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message here"
              className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
