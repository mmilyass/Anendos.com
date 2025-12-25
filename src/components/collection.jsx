import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../index.css";
import ProductSlideOne from "./ProductSlideOne";
import ProductSlideTwo from "./ProductSlideTwo";

export default function Collection() {
  const categories = ["Luxury Scents", "Fresh Scents", "Warm Scents"];
  const types = [
    "lacoste_blanc",
    "lacoste_noir",
    "creed_aventus",
    "bleu_de_chanel",
  ];
  const perfums = [
    ["Clive Christian", "Amouage", "Roja Dove", "Kurkdjian"],
    ["Acqua di Gio", "Dior Sauvage", "Dylan Blue", "Nautica"],
    ["Tobacco Vanille", "a Nuit de L'Homme", "Viktor & Rolf", "Guerlain"],
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-20 w-full  px-10 md:px-20 xl:px-25">
      {perfums.map((category, catIndex) => (
        <div key={catIndex} className="relative w-full flex flex-col gap-8">
          {/* Section Title */}
          <h2 className="text-black text-3xl">
            {categories[catIndex]}
          </h2>

          {/* Products */}
          <div className="block md:hidden">
            <ProductSlideOne
            
            Clive
              names={perfums[catIndex]}
              types={types}
              size={100}
              slide={4}
            />
          </div>
          <div className="md:block hidden lg:hidden">
            <ProductSlideTwo
              names={perfums[catIndex]}
              types={types}
              size={100}
              slide={3}
            />
          </div>
          <div className="overflow-hidden w-full hidden lg:block">
            <div className="grid w-full grid-cols-4 gap-8 " data-aos="fade-up">
              {category.map((productName, productIndex) => (
                <Link
                  to={`/ProductDetail/${types[productIndex]}`}
                  className="no-underline"
                >
                  <ProductCard
                    image="/assets/bottle.png"
                    name={productName}
                    price={199}
                    oldPrice={400}
                    size="large"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
