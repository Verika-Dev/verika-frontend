import AuthAsideBg from "@/components/common/authAsideBg";
import DynamicHeader from "@/components/common/dynamicHeader";

export default function Verify() {
  return (
    <div className="flex">
      <AuthAsideBg />

      <div>
        <DynamicHeader />
      </div>
    </div>
  );
}
