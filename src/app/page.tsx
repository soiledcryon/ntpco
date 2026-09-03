import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <div id="topo" className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
