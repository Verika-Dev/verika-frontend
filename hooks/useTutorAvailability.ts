"use client";
import { useState } from "react";

interface OverrideSlot {
  date: string;
  startTime: string;
  endTime: string;
}

interface AvailabilityPayload {
  startTime: string;
  endTime: string;
  isRecurring: boolean;
  recurrence: "weekly" | "monthly" | "daily";
  exceptionDates?: string[];
  overrideSlots?: OverrideSlot[];
}

export function useTutorAvailability() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  async function checkAvailability(payload: AvailabilityPayload) {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/tutor/availability", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      console.log("booking", json);

      if (!res.ok) {
        setError(json?.message || "Request failed");
      } else {
        setData(json);
      }

      return json;
    } catch (err: any) {
      console.log("error booking", err);

      setError("Network error");
      console.error("Client Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return { checkAvailability, loading, error, data };
}
