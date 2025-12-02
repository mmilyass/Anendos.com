import React from "react";
import "../index.css"; // add: global font import
import bottle from "../assets/bottle.png";

export default function HomePage() {
  return (
    <section id="Home" className="flex flex-col w-full relative">
      <div className="flex flex-col items-center bg-cover bg-center mt-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[white] text-[4rem] mt-[5rem] text-center">
            <span className="text-[#d4af37]">Luxury</span>, <span className="text-[#d4af37]">Confidence</span><br></br> Every Note Resonates.
          </h1>
          <button className="font-bold text-[1rem] py-[5px] px-[10px] rounded-[1rem] w-[13rem] mt-[-1rem] border-0 bg-[white] hover:bg-[#d4af37] hover:text-[white] transition-all duration-500">
            Discover Top Sales
          </button>
        </div>
        <img
          src={bottle}
          alt="perfume bottle"
          className="w-[16rem] absolute top-[26rem]"
        />
      </div>
    </section>
  );
}
