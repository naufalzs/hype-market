import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonialData";
import { isMdScreen, isSmScreen } from "@/lib/breakpoint";

const Testimonials = () => {
  const _testimonialsData = isSmScreen
    ? testimonialsData.slice(0, 3)
    : isMdScreen
      ? testimonialsData.slice(0, 5)
      : testimonialsData;

  return (
    <section className="w-full bg-violet-50 py-[80px] md:py-[100px]">
      <div className="mx-auto max-w-6xl space-y-8 px-5 md:px-8 xl:px-0">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-5">
            Happy Customers
          </h1>
          <p className="text-zinc-500">
            We&apos;d love to come back again soon
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {_testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
