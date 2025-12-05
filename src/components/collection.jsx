import React from "react";
import ProductCard from "./ProductCard";
import "../index.css"; // global styles
import ScrollVelocity from "./ScrollVelocity";
import perfumeImage from "../assets/bottle.png";

export default function ProductsSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-[4rem] my-[4rem] w-full">
      <div>
        <h2>Luxury Scents</h2>
        <div className="topSales w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[6.2rem]">
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
        </div>
      </div>
      <div>
        <h2>Fresh & Citrus</h2>
        <div className="topSales w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[6.2rem]">
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
        </div>
        <div>
          <h2>Fresh & Citrus</h2>
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
          />
        </div>
      </div>
    </section>
  );
}
