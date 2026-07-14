import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import VIPSuites from "@/components/VIPSuites";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0905] font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <AboutUs />
        <Services />
        <VIPSuites />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
