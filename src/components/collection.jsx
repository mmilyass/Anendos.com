import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../index.css";
import perfumeImage from "../assets/bottle.png";

export default function Collection() {
  return (
    <section className="flex flex-col justify-center items-center gap-12 w-full">
      {/* Luxury Scents */}
      <div className="gap-[20rem]">
        <h2 className="text-[white] w-full text-center text-[2rem]">
          Luxury Scents
        </h2>

        <div
          className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up"
        >
          <Link
            to="/ProductDetail"
            className="text-decoration-none no-underline"
            state={{
              image: perfumeImage,
              name: "La coste blanc",
              price: 199,
              oldPrice: 400,
              description:
                "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}
          >
            <ProductCard
              image={perfumeImage}
              name="Clive Christian"
              price={199}
              oldPrice={400}
              size="small"
            />
          </Link>

          <Link
            to="/ProductDetail"
            className="text-decoration-none no-underline"
            state={{
              image: perfumeImage,
              name: "La coste blanc",
              price: 199,
              oldPrice: 400,
              description:
                "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}
          >
            <ProductCard
              image={perfumeImage}
              name="Clive Christian"
              price={199}
              oldPrice={400}
              size="small"
            />
          </Link>

          <Link
            to="/ProductDetail"
            className="text-decoration-none no-underline"
            state={{
              image: perfumeImage,
              name: "La coste blanc",
              price: 199,
              oldPrice: 400,
              description:
                "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}
          >
            <ProductCard
              image={perfumeImage}
              name="Clive Christian"
              price={199}
              oldPrice={400}
              size="small"
            />
          </Link>

          <Link
            to="/ProductDetail"
            className="text-decoration-none no-underline"
            state={{
              image: perfumeImage,
              name: "La coste blanc",
              price: 199,
              oldPrice: 400,
              description:
                "Experience the epitome of luxury with Clive Christian, a fragrance that captivates the senses with its rich and opulent blend. Perfect for those who appreciate the finer things in life.",
            }}
          >
            <ProductCard
              image={perfumeImage}
              name="Clive Christian"
              price={199}
              oldPrice={400}
              size="small"
            />
          </Link>
        </div>
      </div>

      {/* Fresh & Citrus */}
      <div className="gap-[20rem]">
        <h2 className="text-[white] w-full text-center text-[2rem]">
          Fresh & Citrus
        </h2>

        <div
          className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up"
        >
          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Fresh citrus fragrance with vibrant notes." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Fresh citrus fragrance with vibrant notes." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Fresh citrus fragrance with vibrant notes." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Fresh citrus fragrance with vibrant notes." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>
        </div>
      </div>

      {/* Sweet & Amber */}
      <div className="gap-[20rem]">
        <h2 className="text-[white] w-full text-center text-[2rem]">
          Sweet & Amber
        </h2>

        <div
          className="topSales w-full grid grid-cols-1 gap-[6.2rem]"
          data-aos="fade-up"
        >
          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Warm amber and sweet vanilla tones." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Warm amber and sweet vanilla tones." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Warm amber and sweet vanilla tones." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>

          <Link to="/ProductDetail"
            className="text-decoration-none no-underline" state={{ image: perfumeImage, name: "La coste blanc", price: 199, oldPrice: 400, description: "Warm amber and sweet vanilla tones." }}>
            <ProductCard image={perfumeImage} name="Clive Christian" price={199} oldPrice={400} size="small" />
          </Link>
        </div>
      </div>
    </section>
  );
}
