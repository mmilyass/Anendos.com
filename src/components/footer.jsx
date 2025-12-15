import { div } from "motion/react-client";
import React from "react";

export default function Footer({
  logo,
  email,
  mobile,
  otherContact,
  facebookIcon,
  facebookUrl,
  instagramIcon,
  instagramUrl,
  twitterIcon,
  twitterUrl,
}) {
  return (
    <div className="w-full">
      <div className="bg-[white] h-[0.1px]"></div>
      <footer className="h-[15rem] w-full text-[white] flex pt-[2rem] justify-around items-start bg-[rgba(255,255,0,0.05)]">
        <div className="flex items-start">
          <img src={logo} alt="Logo" className="w-[10rem] mt-[1rem]" />
        </div>

        {/* MIDDLE SECTIONS */}
        <div className="flex flex-wrap gap-[4rem]">
          <div className="flex flex-col">
            <h3 className="text-[1rem] uppercase text-[var(--main-gold)]">Useful Links</h3>
            <div>
              <a href="#faq" className="hover:underline text-[white] no-underline"><p>FAQ</p></a>
              <a href="#about" className="hover:underline text-[white] no-underline"><p>About</p></a>
              <a href="#home" className="hover:underline text-[white] no-underline"><p>Home</p></a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[1rem] uppercase text-[var(--main-gold)]">Contact</h3>
            <div>
              <p>email: {email}</p>
              <p>mobile: {mobile}</p>
            </div>
            {otherContact && <p>{otherContact}</p>}
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-row items-center gap-[1rem]">
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-[2.5rem] h-7" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-[2.5rem] h-7" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-[2.5rem] h-7" />
          </a>
          {/* <a href={twitterUrl} target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-[3rem] h-7" />
          </a> */}
        </div>
      </footer>
    </div>
  );
}
