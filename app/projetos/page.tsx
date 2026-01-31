import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projetos from "@/components/sections/Projetos";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Projetos />
      <Footer />
    </main>
  );
}
