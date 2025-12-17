import { NextResponse } from "next/server";
import { ivsClient } from "@/lib/aws/ivs";
import { GetChannelCommand } from "@aws-sdk/client-ivs";

export async function POST() {
  const channelArn = process.env.IVS_CHANNEL_ARN!;

  const { channel } = await ivsClient.send(
    new GetChannelCommand({ arn: channelArn })
  );

  return NextResponse.json({
    ingestEndpoint: channel?.ingestEndpoint,
    playbackUrl: channel?.playbackUrl,
    streamKey: process.env.IVS_STREAM_KEY,
  });
}
