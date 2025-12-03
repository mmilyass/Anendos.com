import React from "react";
export default function ProductCard({ image }) {
  return (
    <div className="rounded-t-[10rem] bg-[#0b0b0b] overflow-hidden w-[20rem] shadow-[0_0_20px_rgba(255,215,0,0.2)] border-[1px] border-[#262626]">
      <div className="w-full flex justify-center">
        <span className="absolute bg-[#2a2a2a] text-[0.8rem] text-[#d1d1d1] px-[0.6rem] py-[0.2rem] rounded-[0.4rem] m-[1rem]">
          40% OFF
        </span>
      </div>

      {/* Product Image */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-[18rem] flex justify-center items-center bg-[#111] bg-cover bg-center"
      ></div>

      {/* Bottom Content */}
      <div className="px-[1.2rem] py-[1rem] flex flex-col gap-[0.4rem]">
        <p className="text-[1rem] text-[#d1d1d1]">
          Clive Christian No. 1 Imperial Majesty
        </p>

        <div className="flex items-center gap-[0.6rem]">
          <span className="text-[1.4rem] text-[var(--main-gold)] font-semibold">
            200MAD
          </span>

          <span className="text-[0.9rem] text-[#666] line-through">800MAD</span>
        </div>
      </div>

      {/* Arrow Button */}
      <div className="flex justify-end pr-[1rem] pb-[1rem]">
        <button className="bg-[var(--main-gold)] w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center text-[#000] text-[1.2rem]">
          →
        </button>
      </div>
    </div>
  );
}
