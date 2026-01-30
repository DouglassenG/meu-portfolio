import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
