import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';
import { theme } from '@/src/styles';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
