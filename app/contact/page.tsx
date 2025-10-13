import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ContactSection from "@/components/home/contactSection";
import FAQ from "@/components/home/faq";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <ContactSection />
      <FAQ/>
      <Footer />
    </div>
  );
}
