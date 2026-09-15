import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageBreak from "@/components/ImageBreak";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImageBreak />
      <About />
      <Menu />
      <Footer />
    </main>
  );
}