import Image from "next/image";
import adminAvatar from "@/public/icons/admin.png";
import bell from "@/public/icons/bell.svg";
export default function AdminNav() {
  return (
    <div className="flex justify-end tems-center ">
      {/* <h2>Prypar</h2> */}
      <div className="flex items-center gap-4">
        <Image src={bell} alt="notification bell" width={24} height={24} />
        <Image src={adminAvatar} alt="admin" width={80} height={80} className="rounded-3xl" />
      </div>
    </div>
  );
}
