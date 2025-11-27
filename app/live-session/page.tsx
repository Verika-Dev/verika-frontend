import LiveSessionVideoChat from "@/components/dashboard/live-session/join-session";
import Image from "next/image";

export default function LiveSessionPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/live-session-bg.png"
        alt="live session bg"
        fill
        className="object-cover opacity-35"
      />

      {/* Centered card with spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-6">
        <div className=" backdrop-blur-lg rounded-2xl shadow-2xl p-2">
          <LiveSessionVideoChat />
        </div>
      </div>
    </div>
  );
}
