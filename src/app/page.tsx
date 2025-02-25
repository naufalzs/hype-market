import Button from "@/components/Button";
import Image from "next/image";
import SHOPPING_BAGS_ICON from "~/icons/shopping-bags.svg";
import HERO_IMG from "~/images/hero-image.jpg";

const newReleases = [
  {
    name: "iMac Green Energy",
    category: "Desktops",
    price: "Rp 24.000.000",
    image:
      "/images/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png",
  },
  {
    name: "Smartwei Pro 18",
    category: "Phones",
    price: "Rp 11.000.000",
    image:
      "/images/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png",
  },
  {
    name: "MacBook Pro X",
    category: "Laptops",
    price: "Rp 24.000.000",
    image:
      "/temp/thumbnails/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png",
  },
  {
    name: "Tuli Nyaman",
    category: "Headsets",
    price: "Rp 3.500.000.000",
    image: "/temp/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png",
  },
  {
    name: "Warna iMac Jadi",
    category: "Desktops",
    price: "Rp 89.000.000",
    image:
      "/temp/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png",
  },
  {
    name: "iMac Green Energy",
    category: "Desktops",
    price: "Rp 24.000.000",
    image:
      "/temp/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png",
  },
  {
    name: "Smartwei Pro 18",
    category: "Phones",
    price: "Rp 11.000.000",
    image:
      "/temp/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png",
  },
  {
    name: "MacBook Pro X",
    category: "Laptops",
    price: "Rp 24.000.000",
    image:
      "/temp/thumbnails/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png",
  },
  {
    name: "Tuli Nyaman",
    category: "Headsets",
    price: "Rp 3.500.000.000",
    image: "/temp/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png",
  },
  {
    name: "Warna iMac Jadi",
    category: "Desktops",
    price: "Rp 89.000.000",
    image:
      "/temp/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png",
  },
];

export default function Home() {
  return (
    <div>
      <main id="content" className="pb-[100px]">
        {/* Hero Section */}
        <section className="w-full bg-violet-50 pt-[120px] md:pt-[170px] pb-[50px]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5 md:px-8 xl:px-0 gap-x-10">
            <div className="space-y-8 basis-[500px] xl:basis-[700px]">
              <p className="text-sm md:text-base bg-white inline-flex items-center gap-2.5 py-2 px-4 rounded-full font-semibold">
                <Image
                  src={SHOPPING_BAGS_ICON}
                  alt="Shopping Bags Icon"
                  width={24}
                  height={24}
                  className="w-6"
                />
                Most demanded <br className="block md:hidden" />
                skena shop right now!
              </p>
              <h1 className="font-bold text-4xl md:text-6xl leading-tight">
                Stay Hyped. <br /> <span className="ml-12">Stay Ahead!</span>
              </h1>
              <p className="text-[#6A7789] text-md md:text-lg leading-[34px]">
                Never miss a beat with Hype-Market. We bring you the latest
                trends before they hit the mainstream. Shop now and stay one
                step ahead of the crowd!
              </p>
              <div className="flex gap-3">
                <Button>Join the Hype</Button>
                <Button variant="secondary">Explore</Button>
              </div>
            </div>
            <Image
              src={HERO_IMG}
              alt="Hero"
              width={600}
              height={400}
              className=" hidden lg:block w-[450px] xl:w-[600px] object-cover rounded-md"
              loading="lazy"
            />
          </div>
        </section>
        <section className="max-w-7xl mx-auto w-full pt-[70px] px-5 md:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-center md:justify-between mb-8 gap-4">
            <h2 className="font-bold text-2xl leading-tight">
              Most Hyped Products
            </h2>
            <div></div>
            <Button variant="outline">Explore All</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {newReleases.map((product, index) => (
              <article key={index}>
                <div className="p-5 rounded-3xl border border-violet-100 space-y-6 hover:ring-violet-400 hover:ring-2 transition-all duration-300 hover:ring-secondary hover:border-transparent cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="mx-auto h-[90px] object-contain"
                    loading="lazy"
                  />
                  <div className="space-y-2.5">
                    <div className="space-y-1">
                      <h3 className="font-semibold leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-sm leading-tight">
                        {product.category}
                      </p>
                    </div>
                    <p className="font-semibold text-primary leading-snug overflow-scroll">
                      {product.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
