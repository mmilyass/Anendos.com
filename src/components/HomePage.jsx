import "../index.css"; // add: global font import

export default function HomePage() {
  return (
    <section
      data-aos="fade-up"
      id="home"
      className="flex flex-col w-full h-full"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
      >
        <source src="../assets/video2.mp4" type="video/mp4" />
      </video>
      <div className="flex h-full flex-col z-1 justify-center gap-5   px-2 md:px-4 xl:px-8">
        <h1 className="text-[white] text-[3rem] font-bold md:text-[3rem]">
          Smell <span className="text-(--main-gold)">Confident</span>
        </h1>
        <div className="flex w-full justify-start">
          <div className="flex flex-col gap-2 lg:gap-5">
            <p className=" text-[white] md:text-xl">
              Perfumes crafted to make you feel confident, <br />
              strong, and charismatic. without the high price
            </p>
            <a href="#topsold">
              <button className="text-xl py-[5px] px-[10px] rounded border-0 bg-white hover:bg-(--main-gold) transition-all duration-500 ">
                Discover Top Sales
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
