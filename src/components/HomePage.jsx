import "../index.css"; // add: global font import

export default function HomePage() {
  return (
    <section data-aos="fade-up" id="home" className="flex flex-col w-full">
      <div className="flex items-center justify-between mt-[10rem]">
        <div className="flex flex-col items-left gap-10 lg:w-[85%] sm:w-full">
          <h1 className="text-[white] text-[7rem]">
            <span className="text-(--main-gold)">Luxury</span>,{" "}
            <span className="text-(--main-gold)">Confidence</span> Every <br />
            Note Resonates.
          </h1>
          <div className="flex w-full justify-end">
            <div className="flex flex-col gap-5">
              <p className=" text-[white]">
                Perfumes crafted to make you feel <br />
                confident, strong, and charismatic.
                <br />
                without the high price
              </p>
              <button className="text-[1rem] py-[5px] px-[10px] rounded-[1rem] w-[13rem] border-0 bg-[white] hover:bg-(--main-gold)  transition-all duration-500">
                Discover Top Sales
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center z-10 absolute w-full top-1/2">
          <img
            src="../../public/assets/bottle.png"
            alt="perfume bottle"
            className="w-[20rem]"
          />
        </div>
      </div>
    </section>
  );
}
