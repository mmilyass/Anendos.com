import React from "react";

export default function ProductCard({ image, name, price, oldPrice, size }) {
  let width, imgSize;
  size === "small" ? (width = "16rem", imgSize = "6rem") : (width = "20rem", imgSize = "8rem");

  return (
    <div
      className="rounded-[2rem] bg-[#0b0b0b] overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.2)] border-[1px] border-[#262626] flex flex-col items-center justify-center"
      style={{ width }}
    >
      <div className="w-full flex justify-center">
        <span className="absolute bg-[#2a2a2a] text-[0.8rem] text-[#d1d1d1] px-[0.6rem] py-[0.2rem] rounded-[0.4rem] m-[1rem]">
          40% OFF
        </span>
      </div>

      {/* Product Image */}
      <div className="pt-[4rem]">
        <img src={image} alt="" style={{ width: imgSize }} />
      </div>

      {/* Bottom Content */}
      <div className="px-[1.2rem] py-[1rem] flex flex-col gap-[0.4rem] justify-center items-center">
        <p className="text-[1rem] text-[#d1d1d1]">{name}</p>

        <div className="flex items-center gap-[0.6rem] pb-[2rem]">
          <span className="text-[1rem] text-[var(--main-gold)] font-semibold">
            {price}MAD
          </span>

          <span className="text-[0.9rem] text-[#666] line-through">
            {oldPrice}MAD
          </span>
        </div>
      </div>
    </div>
  );
}
