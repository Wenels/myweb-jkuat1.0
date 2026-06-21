import Navbar from "./features/landing-page/components/navbar";
import Hero from "./features/landing-page/components/hero";
import Products from "./features/landing-page/components/products";
import About from "./features/landing-page/components/about";
import ContactUs from "./features/landing-page/components/contactus";
import Footer from "./features/landing-page/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1623]">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <ContactUs />
      <Footer />
      
    </main>
  );
}