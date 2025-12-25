import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Harga from "@/components/Harga";
import Products from "@/components/Products";
import OrderingSteps from "@/components/OrderingSteps";
import PartnerStores from "@/components/PartnerStores";
import Location from "@/components/Location";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <About />
        <Harga />
        <Products />
        <OrderingSteps />
        <PartnerStores />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

