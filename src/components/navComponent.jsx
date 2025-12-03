import React from "react";
import logo from "../assets/logo.png";
import searchIone from "../assets/searchIcon.png";
import shopping from "../assets/shopping.png";

export default function NavComponent() {
  return (
    <nav className="flex items-center justify-around h-[4rem] fixed w-full bg-[rgba(0,0,0,0.7)] z-[10]">
      <img src={logo} alt="aeternum logo" className="w-[150px]" />
      <ul className="flex flex-row justify-between w-[400px] list-none">
        <a href="" className="no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-500">
          <li>Home</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300">
          <li>About</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300">
          <li>Top sales</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[var(--main-gold)] transition-all duration-300">
          <li>Contact</li>
        </a>
      </ul>
      <div className="flex flex-row justify-around w-[100px] items-center">
        <img className="w-[20px] h-[20px]" src={searchIone} alt="search Icon" />
        <img className="w-[30px]" src={shopping} alt="search Icon" />
      </div>
    </nav>
  );
}
