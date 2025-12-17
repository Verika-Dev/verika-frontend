"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { Send } from "lucide-react";

export default function ChatPanelIVS() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    async function init() {
      const res = await fetch("/api/ivs/chat/token", { method: "POST" });
      const { token, websocketEndpoint } = await res.json();

      const socket = new WebSocket(`${websocketEndpoint}?token=${token}`);

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.Type === "MESSAGE") {
          setMessages((m) => [...m, data]);
        }
      };

      socketRef.current = socket;
    }

    init();
  }, []);

  function send() {
    if (!input.trim()) return;

    socketRef.current?.send(
      JSON.stringify({
        action: "SEND_MESSAGE",
        content: input,
      })
    );

    setInput("");
  }

  return (
    <div className="flex flex-col bg-gray-900 rounded-xl p-4 h-full">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((m, i) => (
          <ChatMessage
            key={i}
            user={m.Attributes?.username ?? "Viewer"}
            text={m.Content}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-gray-800 text-sm rounded-lg px-3 py-2 outline-none"
        />
        <button
          onClick={send}
          className="bg-blue-600 rounded-lg px-3 flex items-center justify-center">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
