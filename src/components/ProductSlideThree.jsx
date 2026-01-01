import ProductCard from "./ProductCard";
import "../index.css"; // global styles
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductSlideThree({ names, types, size, slide }) {
  // const names = ["La Coste Blanc", "La Coste Noir", "Creed Aventus"];
  // const types = ["lacoste_blanc", "lacoste_noir", "creed_aventus"];

  const [moveIndex, setindex] = useState(0);
  function handlePrev(event) {
    event.stopPropagation();
    setindex((moveIndex - 1 + slide) % slide);
  }
  function handleNext(event) {
    event.stopPropagation();
    setindex((moveIndex + 1) % slide);
  }
  return (
    <div className="flex relative flex-col">
      <div className="overflow-hidden group" style={{ width: `${size}%` }}>
        <div
          className="flex transition-transform duration-500 ease-out gap-1"
          style={{
            transform: `translateX(-${moveIndex * 30}%)`,
          }}
        >
          {types.map((moveItem, index) => (
            <Link
              to={`/ProductDetail/${moveItem}`}
              className="no-underline min-w-[32%]"
            >
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
      <div className="flex justify-between items-start w-full pt-2">
        <div className="transition-opacity duration-300 flex gap-1">
          <div
            className={`w-5 h-2 rounded  bg-gray-500 ${
              moveIndex == 0 ? "opacity-60" : "opacity-30"
            } `}
          ></div>
          <div
            className={`w-5 h-2 rounded  bg-gray-500 ${
              moveIndex == 1 ? "opacity-60" : "opacity-30"
            } `}
          ></div>
          <div
            className={`w-5 h-2 rounded  bg-gray-500 ${
              moveIndex == 2 ? "opacity-60" : "opacity-30"
            }  ${slide == 2 ? "hidden" : "flex"}`}
          ></div>
        </div>
        <div className="transition-opacity duration-300 flex gap-3">
          <div
            className="z-10 cursor-pointer border border-black h-10 w-10 flex justify-center items-center opacity-70 hover:opacity-50 transition-opacity duration-300 active:opacity-100"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-11 h-11"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div
            className="z-10 cursor-pointer border border-black h-10 w-10 flex justify-center items-center opacity-70 hover:opacity-50 transition-opacity duration-300 active:opacity-100"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-11 h-11"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
