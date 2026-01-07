import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Portfolio from '@/components/sections/Portfolio';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}
