import FeaturedProducts from "@/sections/FeaturedProducts";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <main id="content" className="pb-[100px]">
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}
