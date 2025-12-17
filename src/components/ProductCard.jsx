export default function ProductCard({ image, name, price, oldPrice, size }) {
  let width, imgSize;
  size === "small" ? (width = "16rem", imgSize = "10rem") : (width = "20rem", imgSize = "13rem");

  return (
    <div
      className="rounded-md overflow-hidden  flex flex-col items-center justify-center bg-gradient-to-b from-black to-[rgba(77,78,0,0.5)]"
      style={{ width }}
    >
      {/* Product Image */}
      <div className="pt-16 hover:scale-105 transition duration-600 drop-shadow-2xl">
        <img src={image} alt="" style={{ width: imgSize }} />
      </div>

      {/* Bottom Content */}
      <div className="px-[1.2rem] py-4 flex flex-col gap-[0.4rem] justify-center items-center">
        <p className="text-[1rem] text-[#d1d1d1]">{name}</p>

        <div className="flex items-center gap-[0.6rem] pb-8">
          <span className="text-[1rem] text-(--main-gold) font-semibold">
            {price}MAD
          </span>

          <span className="text-[0.9rem] text-[#666] line-through">
            {oldPrice}MAD
          </span>
        </div>
      </div>
    </div>
  );
}
