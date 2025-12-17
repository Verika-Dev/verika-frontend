import ViewerPlayer from "@/components/live/ViewerPlayer";
import ChatPanelIVS from "@/components/live/ChatPanelIVS";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ivs/playback`,
    { cache: "no-store" }
  );
  const { playbackUrl } = await res.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
      <ViewerPlayer src={playbackUrl} />
      <ChatPanelIVS />
    </div>
  );
}
