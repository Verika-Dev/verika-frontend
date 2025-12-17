"use client";

import { VideoOff } from "lucide-react";

export default function VideoStage({
  videoEnabled,
  screenSharing,
}: {
  videoEnabled: boolean;
  screenSharing: boolean;
}) {
  return (
    <div className="bg-gray-900 rounded-lg aspect-video relative">
      {videoEnabled ? (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          Camera Preview (IVS)
        </div>
      ) : (
        <VideoOff className="text-gray-500 mx-auto mt-24" size={64} />
      )}

      {screenSharing && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded">
          Sharing Screen
        </div>
      )}
    </div>
  );
}
