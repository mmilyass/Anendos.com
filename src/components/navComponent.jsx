import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import MdNav from "./MdNav";

export default function NavComponent() {
  const [medium, setMedium] = useState(false);

  const handleToggle = () => {
    setMedium(!medium);
  };

  return (
    <nav className="w-full relative">
      <div className="flex flex-col w-full">
        {/* Mobile Header */}
        <div className="w-full h-16 flex justify-between items-center lg:hidden  px-5 md:px-15 xl:px-20 ">
          <Link to="/">
            <img src="/assets/logo.png" alt="aeternum logo" className="w-40" />
          </Link>
          <button
            onClick={handleToggle}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {medium ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              > px-5 md:px-15 xl:px-20 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full text-black absolute z-50 transition-all duration-300 top-16 ${
            medium
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          <MdNav />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="items-center justify-between lg:h-16 lg:w-full bg-amber-50 lg:flex hidden h-0">
        <Link to="/">
          <img src="/assets/logo.png" alt="aeternum logo" className="w-40" />
        </Link>
        <ul className="flex gap-12 list-none">
          <Link
            to="/"
            className="text-[1rem] no-underline text-black hover:text-(--main-gold) transition-colors duration-300"
          >
            <li className="font-bold">HOME</li>
          </Link>
          <Link
            to="/About"
            className="text-[1rem] no-underline text-black hover:text-(--main-gold) transition-colors duration-300"
          >
            <li className="font-bold">ABOUT</li>
          </Link>
          <a
            href="#contact"
            className="utext-[1rem] no-underline text-black hover:text-(--main-gold) transition-colors duration-300"
          >
            <li className="font-bold">CONTACT</li>
          </a>
          <Link
            to="/Faq"
            className="text-[1rem] no-underline text-black hover:text-(--main-gold) transition-colors duration-300"
          >
            <li className="font-bold">FAQ</li>
          </Link>
          <Link
            to="/top-sold"
            className="text-[1rem] no-underline text-black hover:text-(--main-gold) transition-colors duration-300"
          >
            <li className="font-bold">TOP SOLD</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
