import React from "react";
import "../index.css"; // add: global font import
// import background from "../assets/background.png";
import bottle from "../assets/bottle.png";
import smoke2 from "../assets/smoke2.png";
import "../fonts/fonts.css";


export default function HomePage() {
  return (
    <section data-aos="fade-up" id="home" className="flex flex-col w-full">
      <div className="flex items-center justify-between mt-[10rem]">
        <div className="flex flex-col items-left gap-10">
          <h1 className="text-[white] text-[4rem]">
            <span className="text-(--main-gold)">Luxury</span>,{" "}
            <span className="text-(--main-gold)">Confidence</span>
            <br></br> Every Note Resonates.
          </h1>
          <div>
            <p className="text-[white]">
              We specialize in high-quality clone perfumes inspired by the
              world’s most famous luxury fragrances, <br /> giving you the same
              scent experience, long-lasting performance,
              <br /> and confident feeling—without the expensive price tag
            </p>
          </div>
          <button className="text-[1rem] py-[5px] px-[10px] rounded-[1rem] w-[13rem] border-0 bg-[white] hover:bg-[var(--main-gold)]  transition-all duration-500 mt-[-1rem]">
            Discover Top Sales
          </button>
        </div>
        {/* <div className="absolute top-[-15rem] left-[45%] rotate-[-30deg] z-0">
          <img className="w-[50rem]" src={smoke2} alt="smokepng" />
        </div>
        <div className="absolute top-[-15rem] left-[45%] rotate-[-30deg] z-0">
          <img className="w-[50rem]" src={smoke2} alt="smokepng" />
        </div>
        <div className="absolute top-[-15rem] left-[80%] rotate-[90deg] z-0">
          <img className="w-[50rem]" src={smoke2} alt="smokepng" />
        </div>
        <div className="absolute top-[-15rem] left-[80%] rotate-[90deg] z-0">
          <img className="w-[50rem]" src={smoke2} alt="smokepng" />
        </div> */}
        <div className="flex justify-center items-center z-10">
          <img src={bottle} alt="perfume bottle" className="w-[20rem]" />
        </div>
      </div>
    </section>
  );
}
