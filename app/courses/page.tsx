import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CoursesSection from "@/components/home/coursesSection";
import FAQ from "@/components/home/faq";
import Image from "next/image";

export default function Courses() {
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

        <CoursesSection />
      </div>
      <FAQ />

      <Footer />
    </div>
  );
}
