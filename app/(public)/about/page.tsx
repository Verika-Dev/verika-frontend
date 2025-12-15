import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import AboutPrypar from "@/components/home/aboutPrypar";
import CoreValues from "@/components/home/coreValues";
import Image from "next/image";

export default function AbboutPage() {
  return (
    <div>
      <div className="relative" >
        <Image
          src="/images/bgLandingpage.png"
          alt="Landing background"
          fill
          className="object-cover opacity-10 -z-10"
          priority
        />
        <Navbar />
        <AboutPrypar />
      </div>
      <CoreValues />
      <Footer />
    </div>
  );
}
