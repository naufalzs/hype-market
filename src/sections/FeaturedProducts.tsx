"use client";

import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import Modal from "@/components/Modal";
import Skeleton from "@/components/Skeleton";
import { fetcher } from "@/lib/utils";
import { Product, ProductPayload } from "@/types";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const FeaturedProducts = () => {
  // Fetch Data Logic
  const { data, isLoading, error } = useSWR<ProductPayload>(
    "/api/products",
    fetcher
  );

  const products: Product[] = data?.data || [];
  // end Fetch Data Logic

  // Modal Image Preview Logic
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Product | undefined>(
    undefined
  );

  const toggleModal = (isOpen: boolean, product?: Product) => {
    setSelected(product);
    setIsOpenModal(isOpen);
  };
  // end Modal Image Preview Logic

  return (
    <>
      <Modal isOpen={isOpenModal} setIsOpen={toggleModal}>
        {selected && (
          <motion.div
            animate={{ scale: [0, 1.2, 1] }}
            exit={{ scale: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.image as string}
              alt={selected.name || `product id ${selected.id}`}
              width={400}
              height={400}
              className="mx-auto object-contain rounded-lg"
              loading="lazy"
            />
          </motion.div>
        )}
      </Modal>

      <section
        id="featured"
        className="max-w-7xl mx-auto w-full py-[80px] md:pt-[120px] md:pb-[100px] px-5 md:px-8 xl:px-0"
      >
        <div className="flex flex-wrap items-center justify-center md:justify-between mb-8 gap-4">
          <h2 className="font-bold text-2xl leading-tight">
            Most Hyped Products
          </h2>
          <div></div>
          <Button variant="outline">Explore All</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {isLoading ? (
            Array.from(new Array(10)).map((item, index) => (
              <Skeleton className="min-h-[230px]" key={index} />
            ))
          ) : error ? (
            <div className="col-span-2 md:col-span-3 lg:col-span-5 text-red-500 text-md">
              Error Fetching Data
            </div>
          ) : (
            products.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                toggleModal={toggleModal}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
