import ProductCard from "./ProductCard";
import "../index.css"; // global styles
import { Link } from "react-router-dom";

export let ProductInfo;

export default function ProductsSection() {
  const names = ["La Coste Blanc", "La Coste Noir", "Creed Aventus"];
  const types = ["lacoste_blanc", "lacoste_noir", "creed_aventus"];
  return (
    <section
      data-aos="fade-up"
      id="topsold"
      className="relative w-full flex flex-col gap-16"
    >
      <div className="text-(--main-gold) text-8xl text-center">TOP PRODUCTS</div>
      <div className="flex justify-center w-full z-10">
        <div className="flex flex-wrap justify-between w-full">
          {types.map((moveItem, index) => {
            return (
              <Link
                to="ProductDetail"
                state={{ name: moveItem }}
                className="text-decoration-none no-underline">
                <ProductCard image={"../../public/assets/bottle.png"} name={names[index]} price={99} oldPrice={199} size="large" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
