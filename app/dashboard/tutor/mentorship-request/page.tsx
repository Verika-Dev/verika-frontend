"use client";

import { useState } from "react";
import { X } from "lucide-react";

// Types
interface MentorshipRequest {
  id: number;
  studentName: string;
  subject: string;
  requestNote: string;
  preferredTime: string;
  location: string;
}

export default function MentorshipRequests() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRequest, setSelectedRequest] =
    useState<MentorshipRequest | null>(null);

  const [requests, setRequests] = useState<MentorshipRequest[]>([
    {
      id: 1,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
    {
      id: 3,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
    {
      id: 4,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
    {
      id: 5,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
    {
      id: 6,
      studentName: "Chidera Onyeka",
      subject: "English",
      requestNote: "I need help understanding ...",
      preferredTime: "April 30, 4:00PM",
      location: "Lagos, Nigeria",
    },
  ]);

  // Handlers
  const handleAccept = (request: MentorshipRequest) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleDecline = (id: number) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const confirmAccept = () => {
    if (selectedRequest) {
      setRequests((prev) =>
        prev.filter((req) => req.id !== selectedRequest.id)
      );
      setShowModal(false);
      setSelectedRequest(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Mentorship Requests
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Review and respond to student requests for personalized help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Student Name</span>
                  <span className="text-gray-900 font-medium text-sm text-right">
                    {request.studentName}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">
                    Subject Requested:
                  </span>
                  <span className="text-gray-900 font-medium text-sm text-right">
                    {request.subject}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Request Note:</span>
                  <span className="text-gray-900 font-medium text-sm text-right">
                    {request.requestNote}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Preferred Time:</span>
                  <span className="text-gray-900 font-medium text-sm text-right">
                    {request.preferredTime}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Location:</span>
                  <span className="text-gray-900 font-medium text-sm text-right">
                    {request.location}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleAccept(request)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                  Accept Request
                </button>
                <button
                  onClick={() => handleDecline(request.id)}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg border border-gray-300 transition-colors text-sm">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Accept Request
              </h2>
              <p className="text-gray-600 text-sm">
                You are about to accept this mentorship request.
              </p>
            </div>

            {selectedRequest && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Student:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {selectedRequest.studentName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Subject:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {selectedRequest.subject}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Time:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {selectedRequest.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Location:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {selectedRequest.location}
                  </span>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg border border-gray-300 transition-colors">
                Cancel
              </button>
              <button
                onClick={confirmAccept}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium py-3 rounded-lg transition-colors">
                Confirm Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
