import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import { theme } from '@/src/styles';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Navbar />
      <Hero />
      <Portfolio />
    </main>
  );
}