import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Work />
        <About />
        <Testimonial />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
