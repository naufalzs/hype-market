import FeaturedProducts from "@/sections/FeaturedProducts";
import Hero from "@/sections/Hero";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <main id="content" className="pb-[100px]">
        <Hero />
        <FeaturedProducts />
        <Testimonials />
      </main>
    </div>
  );
}
