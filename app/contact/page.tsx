import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}
