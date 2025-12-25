export default function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-(--main-green) flex justify-center items-center py-10">
        <img src={image} alt="" className="w-3/8" />
      </div>
      <div className="px-[1.2rem] pt-2 pb-10 p flex flex-col justify-center items-center">
        <p className="text-lg text-[black]">{name}</p>
          <span className="text-lg">A partire de {price}MAD</span>
        <span className="text-[1rem] rounded font-bold text-white bg-black py-2 px-6 mt-6 mb-6 hover:opacity-70">
          add to cartingss
        </span>
      </div>
    </div>
  );
}
