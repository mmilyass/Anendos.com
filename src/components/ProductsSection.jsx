import React from "react";
import ProductCard from "./ProductCard";
import perfumeImage from "../assets/img.webp";

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#000] py-[4rem] flex justify-center">
      <div className="w-[90%] max-w-[90rem] grid gap-[2rem] grid-cols-4 items-stretch">
        
        {/* Repeat the same image for all 4 cards */}
        <ProductCard image={perfumeImage} />
        <ProductCard image={perfumeImage} />
        <ProductCard image={perfumeImage} />
        <ProductCard image={perfumeImage} />

      </div>
    </section>
  );
}
