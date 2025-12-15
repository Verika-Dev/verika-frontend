import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ContactSection from "@/components/home/contactSection";
import FAQ from "@/components/home/faq";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/bgLandingpage.png"
          alt="Landing background"
          fill
          className="object-cover opacity-10 -z-10"
          priority
        />
        <Navbar />

        <ContactSection />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
