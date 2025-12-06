"use client";

import { useState } from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  Users,
  MessageSquare,
  Send,
  Settings,
  X,
  Share2,
  Radio,
} from "lucide-react";

export default function LiveSession() {
  const [isLive, setIsLive] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [chatMessage, setChatMessage] = useState("");
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionSubject, setSessionSubject] = useState("");
  const [viewers, setViewers] = useState(0);

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      user: "Chidera Onyeka",
      message: "Hello! Excited for this session",
      time: "2:30 PM",
    },
    {
      id: 2,
      user: "John Doe",
      message: "Can you explain the topic again?",
      time: "2:31 PM",
    },
    {
      id: 3,
      user: "Jane Smith",
      message: "This is really helpful, thank you!",
      time: "2:32 PM",
    },
  ]);

  const handleStartSession = () => {
    if (sessionTitle && sessionSubject) {
      setIsLive(true);
      setShowStartModal(false);
      setViewers(Math.floor(Math.random() * 20) + 5);
    }
  };

  const handleEndSession = () => {
    setIsLive(false);
    setSessionTitle("");
    setSessionSubject("");
    setViewers(0);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          user: "You (Tutor)",
          message: chatMessage,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        },
      ]);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Live Session</h1>
          <p className="text-gray-600 text-sm mt-1">
            Start a live streaming session for your students.
          </p>
        </div>

        {!isLive ? (
          // Pre-Session View
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video size={48} className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Go Live?
              </h2>
              <p className="text-gray-600 mb-8">
                Start a live session to teach and interact with your students in
                real-time.
              </p>

              <button
                onClick={() => setShowStartModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                <Radio size={20} />
                Start Live Session
              </button>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Video size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">HD Video</h3>
                  <p className="text-sm text-gray-600">
                    Crystal clear video streaming
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageSquare size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Live Chat
                  </h3>
                  <p className="text-sm text-gray-600">
                    Interact with students
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Monitor size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Screen Share
                  </h3>
                  <p className="text-sm text-gray-600">
                    Share your screen easily
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Live Session View
          <div className="space-y-6">
            {/* Live Indicator */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900">LIVE</span>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={18} />
                  <span className="font-medium">{viewers} viewers</span>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div>
                  <p className="font-semibold text-gray-900">{sessionTitle}</p>
                  <p className="text-sm text-gray-600">{sessionSubject}</p>
                </div>
              </div>
              <button
                onClick={handleEndSession}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                End Session
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Video Area */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {videoEnabled ? (
                      <div className="text-center">
                        <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-5xl text-white font-bold">
                            You
                          </span>
                        </div>
                        <p className="text-white text-lg">Your camera feed</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <VideoOff
                          size={64}
                          className="text-gray-500 mx-auto mb-4"
                        />
                        <p className="text-gray-400">Camera is off</p>
                      </div>
                    )}
                  </div>

                  {/* Screen Share Indicator */}
                  {screenSharing && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Monitor size={16} />
                      Sharing Screen
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className={`p-4 rounded-full transition-colors ${
                        videoEnabled
                          ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}>
                      {videoEnabled ? (
                        <Video size={24} />
                      ) : (
                        <VideoOff size={24} />
                      )}
                    </button>
                    <button
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      className={`p-4 rounded-full transition-colors ${
                        audioEnabled
                          ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}>
                      {audioEnabled ? <Mic size={24} /> : <MicOff size={24} />}
                    </button>
                    <button
                      onClick={() => setScreenSharing(!screenSharing)}
                      className={`p-4 rounded-full transition-colors ${
                        screenSharing
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}>
                      <Monitor size={24} />
                    </button>
                    <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
                      <Settings size={24} />
                    </button>
                    <button className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                      <Share2 size={24} />
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-center text-xs text-gray-600 mt-2">
                    <span>Camera</span>
                    <span>Microphone</span>
                    <span>Screen</span>
                    <span>Settings</span>
                    <span>Share</span>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-[600px]">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={20} className="text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    {chatMessages.length} messages
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            msg.user.includes("Tutor")
                              ? "text-purple-600"
                              : "text-gray-900"
                          }`}>
                          {msg.user}
                        </span>
                        <span className="text-xs text-gray-400">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{msg.message}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Start Session Modal */}
      {showStartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowStartModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Start Live Session
              </h2>
              <p className="text-gray-600 text-sm">
                Set up your session details before going live.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Title
                </label>
                <input
                  type="text"
                  value={sessionTitle}
                  onChange={(e) => setSessionTitle(e.target.value)}
                  placeholder="e.g., Introduction to Algebra"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  value={sessionSubject}
                  onChange={(e) => setSessionSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                  <option value="">Select a subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English">English</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Camera</span>
                  <span
                    className={`text-sm font-medium ${
                      videoEnabled ? "text-green-600" : "text-red-600"
                    }`}>
                    {videoEnabled ? "On" : "Off"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Microphone</span>
                  <span
                    className={`text-sm font-medium ${
                      audioEnabled ? "text-green-600" : "text-red-600"
                    }`}>
                    {audioEnabled ? "On" : "Off"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowStartModal(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg border border-gray-300 transition-colors">
                Cancel
              </button>
              <button
                onClick={handleStartSession}
                disabled={!sessionTitle || !sessionSubject}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
                Go Live
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
