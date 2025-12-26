import ProductCard from "./ProductCard";
import "../index.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function ProductSlideOne({ names, types, size, slide }) {
  const startX = useRef(0);
  const isDragging = useRef(false);
  const [moveIndex, setindex] = useState(0);

  function handlePrev(event) {
    event?.stopPropagation();
    setindex((moveIndex - 1 + slide) % slide);
  }

  function handleNext(event) {
    event?.stopPropagation();
    setindex((moveIndex + 1) % slide);
  }

  function handlePointerDown(e) {
    startX.current = e.clientX;
    isDragging.current = false;
  }

  function handlePointerMove(e) {
    if (startX.current !== 0) {
      const diff = Math.abs(e.clientX - startX.current);
      if (diff > 10) {
        isDragging.current = true;
      }
    }
  }

  function handlePointerUp(e) {
    const endX = e.clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    startX.current = 0;
    // Reset dragging state after a small delay
    setTimeout(() => {
      isDragging.current = false;
    }, 100);
  }

  function handleLinkClick(e) {
    // Prevent navigation if user was dragging
    if (isDragging.current) {
      e.preventDefault();
    }
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{ width: `${size}%` }}
        className="overflow-hidden relative group"
      >
        {/* Dynamic Dots */}
        <div className="transition-opacity duration-300 flex absolute -bottom-4 left-0 text-8xl leading-none">
          {types.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer transition-opacity duration-300 ${
                moveIndex === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setindex(index)}
            >
              .
            </span>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="transition-opacity duration-300 flex gap-3 absolute bottom-0 right-0">
          <button
            className="z-10 cursor-pointer border border-black h-10 w-10 flex justify-center items-center opacity-70 hover:opacity-50 transition-opacity duration-300 active:opacity-100"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-7 h-7"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="z-10 cursor-pointer border border-black h-10 w-10 flex justify-center items-center opacity-70 hover:opacity-50 transition-opacity duration-300 active:opacity-100"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-7 h-7"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out touch-pan-y"
          style={{ transform: `translateX(-${moveIndex * 100}%)` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {types.map((moveItem, index) => (
            <Link
              key={moveItem}
              to={`/ProductDetail/${moveItem}`}
              className="no-underline min-w-full"
              onClick={handleLinkClick}
            >
              <ProductCard
                image="/assets/bottle.png"
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
  );
}
