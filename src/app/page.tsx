import About from "./features/landing-page/components/about";
import ContactUs from "./features/landing-page/components/contactus";
import Hero from "./features/landing-page/components/hero";
import Products from "./features/landing-page/components/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1623]">
      <Hero />
      <Products />
      <About />
      <ContactUs />
    </main>
  );
}
