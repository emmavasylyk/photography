import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
      <Newsletter />
    </main>
  );
}
