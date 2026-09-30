import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Masters from "@/components/Masters";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Masters />
        <Benefits />
        <Gallery />
        <Reviews />
        <CTA />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
