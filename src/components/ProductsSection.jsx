import React from "react";
import ProductCard from "./ProductCard";
import perfumeImage from "../assets/bottle.png";
import ScrollVelocity from "./ScrollVelocity";
import "../index.css"; // global styles
import { Link } from "react-router-dom";
import image from "../assets/bottle.png"

export let ProductInfo;

export default function ProductsSection() {
  return (
    <section
      data-aos="fade-up"
      id="topsold"
      className="relative w-full flex flex-col"
    >
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
        <ScrollVelocity
          texts={["TOP SOLD TOP SOLD", "TOP SOLD TOP SOLD"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>

      <div className="flex justify-center w-full z-10">
        <div className="flex flex-wrap justify-between w-full  px-[8rem]">
          <Link to="ProductDetail"
            state={{
              image: image ,
              name: "Clive Christian",
              price: 199,
              oldPrice: 400,
              description: "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}>
            <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400} size="large" />
          </Link>
          <Link to="ProductDetail"
            state={{
              image: image ,
              name: "Clive Christian",
              price: 199,
              oldPrice: 400,
              description: "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}>
            <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400} size="large" />
          </Link>
          <Link to="ProductDetail"
            state={{
              image: image ,
              name: "Clive Christian",
              price: 199,
              oldPrice: 400,
              description: "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}>
            <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400} size="large" />
          </Link>
          <Link to="ProductDetail"
            state={{
              image: image ,
              name: "Clive Christian",
              price: 199,
              oldPrice: 400,
              description: "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}>
            <ProductCard image={perfumeImage} name={"Clive Christian"} price={199} oldPrice={400} size="large" />
          </Link>
        </div>
      </div>
    </section>
  );
}
