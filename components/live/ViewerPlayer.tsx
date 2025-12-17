"use client";

import { useEffect, useRef } from "react";

export default function ViewerPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!(window as any).IVSPlayer) return;

    const player = (window as any).IVSPlayer.create();
    player.attachHTMLVideoElement(videoRef.current);
    player.load(src);
    player.play();

    return () => player.delete();
  }, [src]);

  return (
    <div className="rounded-xl overflow-hidden bg-black aspect-video">
      <video ref={videoRef} playsInline autoPlay className="w-full h-full" />
    </div>
  );
}
