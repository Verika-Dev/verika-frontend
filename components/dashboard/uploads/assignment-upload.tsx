"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

// Assignment Submission Component
export default function AssignmentSubmission({
  onClose,
}: {
  onClose: () => void;
}) {
  const [subjects, setSubjects] = useState<{ id: string; name: string }[]>([]);
  const [topics, setTopics] = useState<{ id: string; name: string }[]>([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [questions, setQuestions] = useState(1);
  const [questionsText, setQuestionsText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [cost, setCost] = useState(500);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch subjects
    axios.get("/api/subjects").then((res) => setSubjects(res.data));
  }, []);

  useEffect(() => {
    if (!selectedSubject) return;
    axios
      .get(`/api/topics?subjectId=${selectedSubject}`)
      .then((res) => setTopics(res.data));
  }, [selectedSubject]);

  useEffect(() => {
    setCost(questions * 500);
  }, [questions]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedSubject || !selectedTopic || !file || !deadline) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      // Simulate payment (replace with real payment API)
      await axios.post("/api/payments/submit", { amount: cost });

      // Upload assignment after payment
      const formData = new FormData();
      formData.append("subjectId", selectedSubject);
      formData.append("topicId", selectedTopic);
      formData.append("questions", questions.toString());
      formData.append("deadline", deadline);
      formData.append("file", file);
      formData.append("questionsText", questionsText);
      await axios.post("/api/assignments/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Payment or upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
          <X className="w-6 h-6" />
        </button>

        {!success ? (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Submit Assignment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                className="p-3 border rounded-lg"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}>
                <option value="">Select Subject</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>

              <select
                className="p-3 border rounded-lg"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                disabled={!selectedSubject}>
                <option value="">Select Topic</option>
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                min={1}
                value={questions}
                onChange={(e) => setQuestions(Number(e.target.value))}
                className="p-3 border rounded-lg"
                placeholder="Number of Questions"
              />

              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="p-3 border rounded-lg"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="col-span-2 cursor-pointer"
              />
              <textarea
                className="col-span-2 p-3 border rounded-lg"
                placeholder="Or type your questions here..."
                value={questionsText}
                onChange={(e) => setQuestionsText(e.target.value)}
              />
            </div>

            <p className="text-gray-700 font-medium mb-4">
              Total Cost: ₦{cost}
            </p>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-xl hover:bg-blue-700 transition">
              {loading ? "Processing..." : "Pay & Submit"}
            </button>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Submission Successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Your assignment has been submitted successfully.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 cursor-pointer py-3 rounded-xl hover:bg-blue-700 transition">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
