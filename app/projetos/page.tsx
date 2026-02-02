import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projetos from "@/components/sections/Projetos";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Navbar />
      <Projetos />
      <Footer />
    </main>
  );
}
