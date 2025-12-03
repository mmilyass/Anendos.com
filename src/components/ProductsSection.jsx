import React from "react";
import ProductCard from "./ProductCard";
import perfumeImage from "../assets/img.webp";

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#000] py-[4rem] flex flex-col gap-[3rem]">
      <div className="text-[var(--main-gold)] ml-[10%] text-[2rem]">Top Selling Products</div>
      <div className="flex justify-center w-full">
        <div className="topSales w-[80%]">
          {/* Repeat the same image for all 4 cards */}
          <ProductCard image={perfumeImage} />
          <ProductCard image={perfumeImage} />
          <ProductCard image={perfumeImage} />
          <ProductCard image={perfumeImage} />
        </div>
      </div>
    </section>
  );
}
