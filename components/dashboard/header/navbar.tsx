import Image from "next/image";
import adminAvatar from "@/public/icons/admin.png";
import bell from "@/public/icons/bell.svg";
export default function Header() {
  return (
    <div className="flex justify-end items-center gap-6 p-4 bg-white">
      <div className="flex items-center gap-4">
        <Image src={bell} alt="notification bell" width={20} height={20} />
        <Image
          src={adminAvatar}
          alt="admin"
          width={50}
          height={50}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
