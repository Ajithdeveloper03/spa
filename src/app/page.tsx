import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import SpaSchool from "@/components/SpaSchool";
import HomeSection from "@/components/HomeSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <SpaSchool />
      <HomeSection />
      <Partners />
      <Footer />
      <ChatButton />
    </main>
  );
}
