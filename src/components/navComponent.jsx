import React from "react";
import logo from "../assets/logo.png";
import shopping from "../assets/shopping.png";
import { useState, useEffect } from "react"; 
import "../index.css"; // add: global font import
import "../fonts/fonts.css";

export default function NavComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-around h-[4rem] fixed w-[100%] z-50  
        ${isScrolled ? "bg-[black] shadow-[0_0_10px_rgba(255,215,0,0.2)] transition-all duration-500 " : "bg-[transparent] transition-all duration-500"}`}>
      <img src={logo} alt="aeternum logo" className="w-[150px]" />
      <ul className="flex gap-[3rem] list-none">
        <a
          href="#home"
          className=" text-[1rem] no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-500"
        >
          <li className="font-bold">HOME</li>
        </a>
        <a
          href="#about"
          className=" text-[1rem] no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300"
        >
          <li className="font-bold">ABOUT</li>
        </a>
        <a
          href="#contact"
          className=" text-[1rem] no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300"
        >
          <li className="font-bold">CONTACT</li>
        </a>
        <a
          href="#faq"
          className=" text-[1rem] no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300"
        >
          <li className="font-bold">FAQ</li>
        </a>
        <a
          href="#topsold"
          className=" text-[1rem] no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300"
        >
          <li className="font-bold">TOP SOLD</li>
        </a>
      </ul>
      <img className="w-[40px]" src={shopping} alt="search Icon" />
    </nav>
  );
}
