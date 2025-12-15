import React from "react";
import ProductCard from "./ProductCard";
import "../index.css"; // global styles
import perfumeImage from "../assets/bottle.png";

export default function collection() {
  return (
    <section className="flex flex-col justify-center items-center gap-[3rem] w-full">
      <div>
        <h2 className="text-[white] w-full text-center text-[2rem]">Luxury Scents</h2>
        <div className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up" >
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
        </div>
      </div>
      <div>
        <h2 className="text-[white] w-full text-center text-[2rem]" >Fresh & Citrus</h2>
        <div className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up" >
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
        </div>
        <h2 className="text-[white] w-full text-center text-[2rem] mt-[5rem]">Sweet & Amber</h2>
        <div className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up" >
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
          <ProductCard
            image={perfumeImage}
            name={"Clive Christian"}
            price={199}
            oldPrice={400}
            size="small"
          />
        </div>
      </div>
    </section>
  );
}
