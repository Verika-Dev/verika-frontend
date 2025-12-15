import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/home/faq";
import PricingSection from "@/components/home/pricingSection";
import Image from "next/image";

export default function PricingPage() {
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
        <PricingSection />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
