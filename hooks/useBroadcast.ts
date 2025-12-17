"use client";

import { useRef } from "react";
import * as IVSBroadcastClient from "amazon-ivs-web-broadcast";

type Client = ReturnType<typeof IVSBroadcastClient.create>;

export function useIVSBroadcast() {
  const clientRef = useRef<Client | null>(null);

  async function init(ingestEndpoint: string) {
    const client = IVSBroadcastClient.create({
      ingestEndpoint,
      streamConfig: IVSBroadcastClient.STANDARD_LANDSCAPE,
    });

    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    // Add video input
    await client.addVideoInputDevice(
      mediaStream,
      "camera" // unique name
    );

    // Add audio input
    await client.addAudioInputDevice(mediaStream, "microphone");

    clientRef.current = client;
  }

  async function start(streamKey: string) {
    if (!clientRef.current) return;
    await clientRef.current.startBroadcast(streamKey);
  }

  function stop() {
    clientRef.current?.stopBroadcast();
  }

  function toggleVideo(enabled: boolean) {
    const videoDevice = clientRef.current?.getVideoInputDevice("camera");
    if (!videoDevice) return;
    const mediaStream = videoDevice.mediaStream as MediaStream;
    mediaStream.getVideoTracks().forEach((track: { enabled: boolean; }) => (track.enabled = enabled));
  }

  function toggleAudio(enabled: boolean) {
    const audioDevice = clientRef.current?.getAudioInputDevice("microphone");
    if (!audioDevice) return;
    const mediaStream = audioDevice.mediaStream as MediaStream;
    mediaStream.getAudioTracks().forEach((track: { enabled: boolean; }) => (track.enabled = enabled));
  }

  return {
    init,
    start,
    stop,
    toggleVideo,
    toggleAudio,
  };
}
