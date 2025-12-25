import "../index.css"; // add: global font import

export default function HomePage() {
  return (
    <section
      data-aos="fade-up"
      id="home"
      className="flex flex-col w-full h-full"
    >
      <div className="flex items-center justify-between lg:my-50 my-30">
        <div className="grid lg:grid-cols-1 gap-6">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            autoPlay
            muted
            loop
          >
            <source src="../assets/video2.mp4" type="video/mp4" />
          </video>
          <h1 className="text-[white] text-[3rem] font-bold md:text-[4rem] lg:text-[7rem] z-1 px-5 md:px-15 xl:px-20 whitespace-normal">
            Dress{" "}
            <span className="text-(--main-gold)">Class</span>,<br />
            Smell{" "}
            <span className="text-(--main-gold)">Confident</span>
          </h1>
          <div className="flex w-full justify-end md:px-15 xl:px-20 px-5">
            <div className="flex flex-col gap-2 lg:gap-5 z-1">
              <p className=" text-[white] lg:text-xl text-[15px]">
                Perfumes crafted to make you feel
                confident,  <br />strong, and charismatic.
                without the high price
              </p>
              <a href="#topsold">
                <button className="lg:text-xl text-[10px] py-[5px] px-[10px] rounded-[1rem] border-0 bg-white hover:bg-(--main-gold) transition-all duration-500 ">
                  Discover Top Sales
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
