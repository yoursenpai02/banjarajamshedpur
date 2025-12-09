import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Specials } from "@/components/Specials";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Reservation } from "@/components/Reservation";
import { Order } from "@/components/Order";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specials />
      <Menu />
      <Order />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
