import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Profile from '@/components/Profile';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <Hero />
      <Services />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}