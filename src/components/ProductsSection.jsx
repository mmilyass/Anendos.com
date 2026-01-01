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
      // data-aos="fade-up"
      id="topsold"
      className="relative w-full flex flex-col gap-8 py-10"
    >
      <div className="relative w-full flex flex-col gap-8">
        <div className="flex flex-col gap-20">
        <div className="text-black px-2 md:px-4 xl:px-8 text-center">
            WE STAY UP TO OFFER FOR YOU THE BEST QUALITY OF CLONE PERUMES AND DUP FERFUMES AND IN THE FUTURE ORIGINAL ANENDOS VERSION PERFUM 
          </div>
          <div className="text-black text-4xl px-2 md:px-4 xl:px-8">
            Top Products
          </div>
        </div>
        <div className="block md:hidden px-2 md:px-4 xl:px-8">
          <ProductSlideOne names={names} types={types} size={100} slide={3} />
        </div>
        <div className="md:block hidden lg:hidden">
          <ProductSlideTwo names={names} types={types} size={100} slide={2} />
        </div>
        <div className="relative w-full overflow-hidden hidden lg:block">
          <div className="grid w-full grid-cols-3 gap-2">
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
      </div>
    </section>
  );
}
