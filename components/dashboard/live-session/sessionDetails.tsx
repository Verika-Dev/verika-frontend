import React, { useState } from "react";
import { X, Download, PlayCircle, Star } from "lucide-react";
import Image from "next/image";

interface SessionDetailsProps {
  session: {
    instructor: string;
    image: string;
    subject: string;
    type: string;
    date: string;
    time: string;
  } | null;
  onClose: () => void;
}

export default function SessionDetails({ session, onClose }: SessionDetailsProps) {
    if (!session) return null;

  const sessionData = {
    instructor: {
      name: session.instructor,
      avatar: session.image,
      subject: session.subject,
      sessionType: session.type + " session",
      date: session.date,
      time: session.time,
    },
    rating: 5.0,
    review:
      "Excellent session! Dr. Adebayo explained electromagnetic induction very clearly.",
    materials: [
      { name: "physics_notes.pdf", size: "2.3 MB" },
      { name: "practice_problems.pdf", size: "1.8 MB" },
    ],
  };



  return (
    <div className="fixed inset-0 bg-white/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl  shadow-xl p-6 max-w-1/3 w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Session Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
        
            <Image src="/icons/cancel.svg" alt="close" width={50} height={50} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Instructor Info */}
          <div className="flex items-start gap-4 mb-6">
            <Image
              src={sessionData.instructor.avatar}
              alt={sessionData.instructor.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {sessionData.instructor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {sessionData.instructor.subject} •{" "}
                {sessionData.instructor.sessionType}
              </p>
              <p className="text-sm text-gray-600">
                {sessionData.instructor.date} • {sessionData.instructor.time}
              </p>
            </div>
          </div>

          {/* Your Rating */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Your Rating
            </h4>
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= sessionData.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm font-semibold text-gray-900 ml-1">
                {sessionData.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-sm text-gray-500 italic">
              "{sessionData.review}"
            </p>
          </div>

          {/* Session Materials */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Session Materials
            </h4>
            <div className="space-y-2">
              {sessionData.materials.map((material, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    
                      <Image src="/icons/session-material.svg" alt="material" width={20} height={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {material.name}
                      </p>
                      <p className="text-xs text-gray-500">{material.size}</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Session Recording */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Session Recording
            </h4>
            <button className="w-full flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <PlayCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Watch Recording
              </span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 cursor-pointer text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Book Again
            </button>
            <button className="flex-1 bg-blue-50 cursor-pointer text-blue-600 py-3 px-4 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
              Message Tutor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
