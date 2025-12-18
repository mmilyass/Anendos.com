import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../index.css";

export default function Collection() {
  const categories = ["Luxury Scents", "Fresh Scents", "Warm Scents"];
  const types = [
    "lacoste_blanc",
    "lacoste_noir",
    "creed_aventus",
    "bleu_de_chanel",
  ];
  const perfums = [
    ["Clive Christian", "Amouage", "Roja Dove", "Maison Francis Kurkdjian"],
    ["Acqua di Gio", "Dior Sauvage", "Versace Dylan Blue", "Nautica Voyage"],
    [
      "Tom Ford Tobacco Vanille",
      "Yves Saint Laurent La Nuit de L'Homme",
      "Viktor & Rolf Spicebomb",
      "Guerlain L'Homme Ideal",
    ],
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-44 w-full">
      {perfums.map((category, catIndex) => (
        <div key={catIndex} className="flex flex-col w-full">
          {/* Section Title */}
          <h2 className="text-white text-5xl">
            {categories[catIndex]}
          </h2>

          {/* Products */}
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            data-aos="fade-up"
          >
            {category.map((productName, productIndex) => (
              <Link
                key={productIndex}
                to="/ProductDetail"
                className="no-underline"
                state={{ name: types[productIndex] }}
              >
                <ProductCard
                  image="/assets/bottle.png"
                  name={productName}
                  price={199}
                  oldPrice={400}
                  size="small"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
