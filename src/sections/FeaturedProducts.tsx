"use client";

import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import { fetcher } from "@/lib/utils";
import { Product, ProductPayload } from "@/types";
import Image from "next/image";
import useSWR from "swr";

const FeaturedProducts = () => {
  const { data, isValidating, error } = useSWR<ProductPayload>(
    "/api/products",
    fetcher
  );

  console.log(data);

  const products: Product[] = data?.data || [];

  return (
    <section className="max-w-7xl mx-auto w-full pt-[70px] px-5 md:px-8 xl:px-0">
      <div className="flex flex-wrap items-center justify-center md:justify-between mb-8 gap-4">
        <h2 className="font-bold text-2xl leading-tight">
          Most Hyped Products
        </h2>
        <div></div>
        <Button variant="outline">Explore All</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {isValidating
          ? Array.from(new Array(10)).map((item, index) => (
              <Skeleton className="min-h-[230px]" key={index} />
            ))
          : products.map((product, index) => (
              <article key={index}>
                <div className="p-5 rounded-3xl border border-violet-100 space-y-6 hover:ring-violet-400 hover:ring-2 transition-all duration-300 hover:ring-secondary hover:border-transparent cursor-pointer">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name || `product id ${product.id}`}
                      width={150}
                      height={150}
                      className="mx-auto h-[120px] object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[120px] flex flex-col justify-center">
                      Image not exist
                    </div>
                  )}
                  <div className="space-y-2.5">
                    <div className="space-y-1">
                      <h3 className="font-semibold leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-sm leading-tight">ID: {product.id}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
