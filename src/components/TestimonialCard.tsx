"use client";

import { Testimonial } from "@/types";
import Image from "next/image";
import React from "react";
import STAR_ICON from "~/icons/star.svg";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ testimonial, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="mb-8 space-y-5 rounded-2xl bg-white px-5 py-4"
        {...rest}
      >
        <div className="flex gap-0.5">
          {Array.from(new Array(testimonial.rating)).map((rate) => (
            <Image
              key={rate}
              src={STAR_ICON}
              alt="Rating"
              width={20}
              height={20}
            />
          ))}
        </div>
        <p className="text-lg leading-8">{testimonial.review}</p>
        <div className="flex items-center space-x-3">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image
              src={`https://i.pravatar.cc/300?img=${testimonial.id}`}
              alt={testimonial.name}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-base font-semibold">{testimonial.name}</h1>
            <p className="text-sm text-zinc-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  }
);

export default TestimonialCard;
