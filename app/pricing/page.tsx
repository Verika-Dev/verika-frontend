import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/home/faq";
import PricingSection from "@/components/home/pricingSection";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <PricingSection/>
      <FAQ />
      <Footer />
    </div>
  );
}
