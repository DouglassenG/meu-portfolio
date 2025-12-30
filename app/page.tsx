import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Footer from '@/components/layout/Footer';
import { theme } from '@/src/styles';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}