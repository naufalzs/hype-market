"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";

type CardProductProps = {
  product: Product;
  toggleModal: (isShow: boolean, product?: Product) => void;
} & React.ComponentPropsWithRef<"div">;

const CardProduct = React.forwardRef<HTMLDivElement, CardProductProps>(
  ({ product, toggleModal, ...rest }, ref) => {
    const isImageExist: boolean = !!product.image;

    return (
      <>
        <article ref={ref} {...rest}>
          <div
            onClick={
              isImageExist ? () => toggleModal(true, product) : undefined
            }
            className={cn(
              "p-5 rounded-3xl border border-violet-100 space-y-6 hover:ring-violet-400 hover:ring-2 transition-all duration-300 hover:ring-secondary hover:border-transparent",
              [isImageExist && ["cursor-pointer"]]
            )}
          >
            {isImageExist ? (
              <Image
                src={product.image as string}
                alt={product.name || `product id ${product.id}`}
                width={150}
                height={150}
                className="mx-auto w-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] flex flex-col justify-center">
                Image not exist
              </div>
            )}
            <div className="space-y-2.5">
              <div className="space-y-1">
                <h3 className="font-semibold leading-snug">{product.name}</h3>
                <p className="text-sm leading-tight">ID: {product.id}</p>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
);

export default CardProduct;
