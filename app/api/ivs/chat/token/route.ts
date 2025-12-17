import { NextResponse } from "next/server";
import { CreateChatTokenCommand } from "@aws-sdk/client-ivschat";
import { ivsChatClient } from "@/lib/aws/ivsChat";

export async function POST() {
  const command = new CreateChatTokenCommand({
    roomIdentifier: "YOUR_CHAT_ROOM_ARN",
    userId: crypto.randomUUID(),
    capabilities: ["SEND_MESSAGE"],
    sessionDurationInMinutes: 180,
  });

  const res = await ivsChatClient.send(command);

  return NextResponse.json({
    token: res.token,
    sessionExpirationTime: res.sessionExpirationTime,
  });
}
