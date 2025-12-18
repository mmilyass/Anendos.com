import { Link } from "react-router-dom";

export default function Footer({
  logo,
  email,
  mobile,
  otherContact,
  facebookIcon,
  facebookUrl,
  instagramIcon,
  instagramUrl,
  // twitterIcon,
  // twitterUrl,
}) {
  return (
    <div className="w-full">
      <div className="bg-[white] h-[0.1px]"></div>
      <footer className="h-[15rem] w-full text-[white] flex pt-16 justify-around items-start">
        <div className="flex items-start">
          <img src={logo} alt="Logo" className="w-40"/>
        </div>

        {/* MIDDLE SECTIONS */}
        <div className="flex flex-wrap gap-32">
          <div className="flex flex-col gap-4">
            <h3 className="text-[1rem] uppercase text-(--main-gold)">Useful Links</h3>
            <div>
              <Link to="/" className="hover:underline text-[white] no-underline"><p>FAQ</p></Link>
              <Link to="/" className="hover:underline text-[white] no-underline"><p>About</p></Link>
              <Link to="/" className="hover:underline text-[white] no-underline"><p>Home</p></Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[1rem] uppercase text-(--main-gold)">Contact</h3>
            <div>
              <p>email: {email}</p>
              <p>mobile: {mobile}</p>
            </div>
            {otherContact && <p>{otherContact}</p>}
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-row items-center gap-8">
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
          </a>
          {/* <a href={twitterUrl} target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-[3rem] h-7" />
          </a> */}
        </div>
      </footer>
    </div>
  );
}
