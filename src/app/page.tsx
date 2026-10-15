import { Footer } from '@/components/layout/Footer';
import { FloatingCta } from '@/components/layout/FloatingCta';
import { Header } from '@/components/layout/Header';
import { Benefits } from '@/components/sections/Benefits';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Packs } from '@/components/sections/Packs';
import { Process } from '@/components/sections/Process';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Packs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
