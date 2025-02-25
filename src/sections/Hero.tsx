import Button from "@/components/Button";
import Image from "next/image";
import SHOPPING_BAGS_ICON from "~/icons/shopping-bags.svg";
import HERO_IMG from "~/images/hero-image.jpg";

const Hero = () => {
  return (
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
          <h1 className="font-bold text-4xl md:text-6xl leading-normal">
            Stay Hyped. <br />{" "}
            <span className="ml-12 leading-normal">Stay Ahead!</span>
          </h1>
          <p className="text-[#6A7789] text-md md:text-lg leading-[34px]">
            Never miss a beat with Hype-Market. We bring you the latest trends
            before they hit the mainstream. Shop now and stay one step ahead of
            the crowd!
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
  );
};

export default Hero;
