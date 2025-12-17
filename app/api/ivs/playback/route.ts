import { NextResponse } from "next/server";

export async function GET() {
  // In production: resolve by channelId param
  return NextResponse.json({
    playbackUrl: "https://YOUR_PLAYBACK_URL.m3u8",
  });
}
