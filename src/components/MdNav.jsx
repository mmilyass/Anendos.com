import { Link } from "react-router-dom";

export default function NdNav() {
  return (
    <div className="w-full">
      <ul className="flex flex-col list-none w-full justify-around px-5 md:px-15 xl:px-20 h-80 bg-white  ">
        <Link
          to="/"
          className="text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-500"
        >
          <li className="font-bold">HOME</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <Link
          to="/About"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">ABOUT</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <a
          href="#contact"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">CONTACT</li>
        </a>
        <div className="w-full h-px bg-black"></div>
        <Link
          to="/Faq"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">FAQ</li>
        </Link>
        <div className="w-full h-px bg-black"></div>
        <Link
          href="/"
          className=" text-[1rem] no-underline text-[black] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">TOP SOLD</li>
        </Link>
      </ul>
    </div>
  );
}
