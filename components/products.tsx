"use client";
import { PRODUCTS } from "@/constants";
import Link from "next/link";
import { useState } from "react";

interface ProductProp {
  bgImg: string;
  title: string;
  subText?: string;
  route: string;
  index: number;
}

const Product = ({ bgImg, title, subText, route, index }: ProductProp) => {
  return (
    <div
      className={`h-full w-full mx-3 min-w-[1300px] ${bgImg} bg-cover bg-no-repeat rounded-md text-gray-100 transition-all flex justify-center flex-col px-10`}
      style={{ transform: `translateX(-${index * 102}%)` }}
    >
      <label className="text-4xl ">{title}</label>
      <label className="text-xl">{subText}</label>
      <Link href={route} className="mt-4 font-bold">
        Learn More &#10784;
      </Link>
    </div>
  );
};

const ProductSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <section id="product-section" className="my-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start overflow-x-auto">
        {PRODUCTS.map((prod) => (
          <Product
            bgImg={prod.bgImg}
            title={prod.title}
            subText={prod.subText}
            route={prod.route}
            index={slideIndex}
            key={prod.title}
          />
        ))}
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {PRODUCTS.map((prod, index) => (
          <button
            onClick={() => setSlideIndex(index)}
            key={prod.title}
            className={`${
              slideIndex === index
                ? "w-16 bg-emerald-300"
                : "w-10 bg-emerald-600"
            } h-1.5 rounded-md cursor-pointer transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
