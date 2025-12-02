import React from "react";
import logo from "../assets/logo.png";
import searchIone from "../assets/searchIcon.png";
import shopping from "../assets/shopping.png";

export default function NavComponent() {
  return (
    <nav className="flex items-center justify-around h-[4rem] fixed w-full ">
      <img src={logo} alt="aeternum logo" className="w-[150px] bg-red" />
      <ul className="text-[white] flex flex-row justify-between w-[400px] list-none">
        <a href="" className="no-underline text-[white] hover:text-[#d4af37] transition-all duration-500">
          <li>Home</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[#d4af37] transition-all duration-300">
          <li>About</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[#d4af37] transition-all duration-300">
          <li>Top sales</li>
        </a>
        <a href="" className="no-underline text-[white] hover:text-[#d4af37] transition-all duration-300">
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
