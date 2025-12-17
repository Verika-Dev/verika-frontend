"use client";

import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  Settings,
  Share2,
} from "lucide-react";

export default function StreamControls({
  videoEnabled,
  audioEnabled,
  screenSharing,
  onToggleVideo,
  onToggleAudio,
  onToggleScreen,
}: any) {
  return (
    <div className="flex justify-center gap-3">
      <button onClick={onToggleVideo}>
        {videoEnabled ? <Video /> : <VideoOff />}
      </button>
      <button onClick={onToggleAudio}>
        {audioEnabled ? <Mic /> : <MicOff />}
      </button>
      <button onClick={onToggleScreen}>
        <Monitor />
      </button>
      <Settings />
      <Share2 />
    </div>
  );
}
