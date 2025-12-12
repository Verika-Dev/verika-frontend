"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

interface Activity {
  id: string;
  title: string;
  type: string;
  date: string;
}

export default function RecentActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/activities/recent")
      .then((res) => setActivities(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-white border-[#EDEFFE] border rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center py-12">
        <p className="text-gray-500">Loading activities...</p>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="bg-white border-[#EDEFFE] border rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <X className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500">No recent activities yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white border-[#EDEFFE] border rounded-2xl p-6 shadow-sm flex flex-col space-y-3 max-h-96 overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Recent Activities
      </h2>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="p-3 border-b last:border-b-0 border-gray-100 rounded-lg">
          <p className="text-gray-800 font-medium">{activity.title}</p>
          <p className="text-gray-500 text-sm">
            {activity.type} • {new Date(activity.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
