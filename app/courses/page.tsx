import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CoursesSection from "@/components/home/coursesSection";
import FAQ from "@/components/home/faq";

export default function Courses() {
  return (
    <div>
      <Navbar />

      <CoursesSection />
      <FAQ />

      <Footer />
    </div>
  );
}
