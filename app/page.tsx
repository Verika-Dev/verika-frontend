import Image from "next/image";
import Footer from "@/components/common/footer";
import FAQ from "@/components/home/faq";
import Testimonials from "@/components/home/testimonials";
import AvailableCourses from "@/components/home/availableCourses";
import Navbar from "@/components/common/navbar";
import HeroSection from "@/components/home/hero";
import HowPryparWorks from "@/components/home/howPryparWorks";
import CTASection from "@/components/home/ctaSection";

export default function Home() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="/images/bgLandingpage.png"
          alt="Landing background"
          fill
          className="object-cover opacity-10 -z-10"
          priority
        />
        <Navbar />
        <HeroSection />
      </div>

      <HowPryparWorks/>
      <AvailableCourses/>
      <CTASection/>
      <Testimonials/>
      <FAQ/>
      <Footer />
    </div>
  );
}
