import ProductCard from "./ProductCard";
import "../index.css"; // global styles
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductSlideOne from "./ProductSlideOne";
import ProductSlideTwo from "./ProductSlideTwo";

export let ProductInfo;

export default function ProductsSection() {
  const names = ["La Coste Blanc", "La Coste Noir", "Creed Aventus"];
  const types = ["lacoste_blanc", "lacoste_noir", "creed_aventus"];
  return (
    <section
      data-aos="fade-up"
      id="topsold"
      className="relative w-full flex flex-col gap-8 px-5 md:px-15 xl:px-20"
    >
      <div className="flex">
        <div className="text-black text-4xl font-bold">Top Products</div>
      </div>
      <div className="block md:hidden">
        <ProductSlideOne names={names} types={types} size={100} slide={3}/>
      </div>
      <div className="md:block hidden lg:hidden">
        <ProductSlideTwo names={names} types={types} size={100} slide={2}/>
      </div>
      <div className="relative w-full overflow-hidden hidden lg:block">
        <div className="grid w-full grid-cols-3 gap-8">
          {types.map((moveItem, index) => (
            <Link to={`/ProductDetail/${moveItem}`} className="no-underline">
              <ProductCard
                image="../../assets/bottle.png"
                name={names[index]}
                price={99}
                oldPrice={199}
                size="large"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
