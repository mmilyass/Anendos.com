import React from "react";
import ProductCard from "./ProductCard";
import perfumeImage from "../assets/bottle.png";
import ScrollVelocity from "./ScrollVelocity";
import "../index.css"; // global styles

export default function ProductsSection() {
  return (
    <section
      id="topsold"
      className="relative w-full flex flex-col gap-[0rem] px-4"
    >
      {/* ScrollVelocity text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
        <ScrollVelocity
          texts={["TOP SOLD", "TOP SOLD"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>

      {/* Top sold products */}
      <div className="flex justify-center w-full relative z-10">
        <div className="topSales w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[6.2rem]">
          <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400}/>
          <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400}/>
          <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400}/>
          <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400}/>
        </div>
      </div>
    </section>
  );
}
