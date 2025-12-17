"use client";

import { X } from "lucide-react";

export default function StartSessionModal({
  title,
  subject,
  setTitle,
  setSubject,
  onStart,
  onClose,
}: any) {
  return (
    <div className="fixed inset-0 bg-white/90 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl relative w-full max-w-md">
        <button onClick={onClose} className="absolute  top-4 right-4">
          <X className="text-black" />
        </button>

        <input
          placeholder="Session title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select subject</option>
          <option>Mathematics</option>
          <option>Physics</option>
        </select>

        <button onClick={onStart} disabled={!title || !subject}>
          Go Live
        </button>
      </div>
    </div>
  );
}
