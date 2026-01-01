import { Link } from "react-router-dom";

export default function NdNav() {
  return (
    <div className="w-full">
      <ul className="flex flex-col list-none w-full justify-between bg-white h-80 pt-5">
        <div className="w-full h-px bg-black"></div>
        <Link
          to="/"
          className="text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300  px-2 md:px-4 xl:px-8"
        >
          <li className="font-bold">HOME</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <Link
          to="/About"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300  px-2 md:px-4 xl:px-8"
        >
          <li className="font-bold">ABOUT</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <a
          href="#contact"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300  px-2 md:px-4 xl:px-8"
        >
          <li className="font-bold">CONTACT</li>
        </a>
        <div className="w-full h-px bg-black"></div>
        <Link
          to="/Faq"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300  px-2 md:px-4 xl:px-8"
        >
          <li className="font-bold">FAQ</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <Link
          href="/"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300  px-2 md:px-4 xl:px-8"
        >
          <li className="font-bold">TOP SOLD</li>
        </Link>
        <div className="w-full h-px bg-black"></div>

      </ul>
    </div>
  );
}
