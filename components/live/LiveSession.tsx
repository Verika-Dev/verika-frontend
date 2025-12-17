"use client";

import { useState } from "react";
import { useIVSBroadcast } from "@/hooks/useBroadcast";
import VideoStage from "./VideoStage";
import StreamControls from "./Controls";
import ChatPanel from "./ChatPanel";
import StartSessionModal from "./StartSessionModal";

export default function LiveSession() {
  const [isLive, setIsLive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const broadcast = useIVSBroadcast();

  async function startSession() {
    const res = await fetch("/api/ivs/start-session", { method: "POST" });
    const data = await res.json();

    await broadcast.init(data.ingestEndpoint);
    await broadcast.start(data.streamKey);

    setIsLive(true);
    setShowModal(false);
  }

  function endSession() {
    broadcast.stop();
    setIsLive(false);
  }

  return (
    <>
      {!isLive ? (
        <button onClick={() => setShowModal(true)}>Start Live</button>
      ) : (
        <>
          <VideoStage
            videoEnabled={videoEnabled}
            screenSharing={screenSharing}
          />
          <StreamControls
            videoEnabled={videoEnabled}
            audioEnabled={audioEnabled}
            screenSharing={screenSharing}
            onToggleVideo={() => {
              setVideoEnabled(!videoEnabled);
              broadcast.toggleVideo(!videoEnabled);
            }}
            onToggleAudio={() => {
              setAudioEnabled(!audioEnabled);
              broadcast.toggleAudio(!audioEnabled);
            }}
            onToggleScreen={() => setScreenSharing(!screenSharing)}
          />
          <ChatPanel />
          <button onClick={endSession}>End Session</button>
        </>
      )}

      {showModal && (
        <StartSessionModal
          title={title}
          subject={subject}
          setTitle={setTitle}
          setSubject={setSubject}
          onStart={startSession}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
