"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatPanel() {
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState("");

  function send() {
    if (!text) return;
    setMessages((m) => [...m, text]);
    setText("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={send}>
          <Send />
        </button>
      </div>
    </div>
  );
}
