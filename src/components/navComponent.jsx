import { useState, useEffect } from "react";
import "../index.css"; // add: global font import

export default function NavComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between h-[4rem] w-full z-50 `}>
      <img src="../../public/assets/logo.png" alt="aeternum logo" className="w-40" />
      <ul className="flex gap-12 list-none">
        <a
          href="#home"
          className=" text-[1rem] no-underline text-[white] hover:text-(--main-gold) transition-all duration-500"
        >
          <li className="font-bold">HOME</li>
        </a>
        <a
          href="#about"
          className=" text-[1rem] no-underline text-[white] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">ABOUT</li>
        </a>
        <a
          href="#contact"
          className=" text-[1rem] no-underline text-[white] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">CONTACT</li>
        </a>
        <a
          href="#faq"
          className=" text-[1rem] no-underline text-[white] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">FAQ</li>
        </a>
        <a
          href="#topsold"
          className=" text-[1rem] no-underline text-[white] hover:text-(--main-gold) transition-all duration-300"
        >
          <li className="font-bold">TOP SOLD</li>
        </a>
      </ul>
    </nav>
  );
}
