import React from "react";
import "../index.css"; // add: global font import
import background from "../assets/background.png";
import bottle from "../assets/bottle.png";

export default function HomePage() {
  return (
    <section id="Home" className="flex flex-col w-full relative">
      <div className="flex flex-col items-center bg-cover bg-center mt-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[white] text-[4rem] mt-[5rem] text-center">
            <span className="text-[var(--main-gold)]">Luxury</span>,{" "}
            <span className="text-[var(--main-gold)]">Confidence</span>
            <br></br> Every Note Resonates.
          </h1>
          <p className="w-[70%] text-[white] mt-[-2rem] mb-[3rem] text-center">
            We specialize in high-quality clone perfumes inspired by the world’s
            most famous luxury fragrances, giving you the same scent experience,
            long-lasting performance, and confident feeling—without the
            expensive price tag
          </p>
          <button className="font-bold text-[1rem] py-[5px] px-[10px] rounded-[1rem] w-[13rem] mt-[-1rem] border-0 bg-[white] hover:bg-[var(--main-gold)] hover:text-[white] transition-all duration-500">
            Discover Top Sales
          </button>
        </div>
        <img
          src={bottle}
          alt="perfume bottle"
          className="w-[16rem] absolute top-[28rem]"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="h-[66rem] bg-cover bg-center w-full absolute top-[-8rem] z-[-1]"
      ></div>
    </section>
  );
}
