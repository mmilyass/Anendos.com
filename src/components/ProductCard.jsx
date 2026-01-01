export default function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col bg-(--main-green) items-center justify-center w-full hover:border-(--main-gold) hover:border">
      <div className="w-full flex justify-center items-center py-10">
        <img src={image} alt="" className="w-[30%]" />
      </div>
      <div className="pl-20 pt-2 pb-10 p flex flex-col justify-start items-start w-full">
        <p className="text-lg text-[black] font-bold">{name}</p>
        <span className="font-bold text-[14px]">{price} MAD</span>
      </div>
    </div>
  );
}
