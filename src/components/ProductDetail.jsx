import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useLocation } from "react-router-dom";
import perfumes from "../data/topsales.json";
import "../index.css";
import Footer from "./footer";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import ProductSlideOne from "./ProductSlideOne";
import ProductSlideTwo from "./ProductSlideTwo";

export default function ProductDetail() {
  const [scrol, setScrol] = useState(true);
  const navigate = useNavigate();
  const { name: paramName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  const names = ["La Coste Blanc", "La Coste Noir", "Creed Aventus"];
  const types = ["lacoste_blanc", "lacoste_noir", "creed_aventus"];
  console.log(scrol);
  useEffect(() => {
    if (scrol) {
      window.scrollTo(0, 0);
      setScrol(false); // run only once
    }
  }, [scrol]);
  const perfum = perfumes[paramName];

  if (!perfum) {
    return <div className="text-black">No perfume information available.</div>;
  }

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col gap-25">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-6 lg:px-32 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-lg text-gray-600 hover:text-(--main-gold) transition"
          >
            <ArrowLeft size={23} />
            Back
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-6 lg:px-32 ">
        {/* Main Product Section */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            {/* Left: Product Image */}
            <div className="border flex items-center justify-center py-20 bg-(--main-green)">
              <img
                src={perfum.image}
                alt={perfum.name}
                className="w-auto h-125 object-contain"
              />
            </div>

            {/* Right: Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-light text-(--main-gold) mb-1 w-full">
                  {perfum.name}
                </h1>
                <p className="text-sm text-black">{perfum.subtitle}</p>
              </div>

              <div className="text-3xl font-light text-black">
                {perfum.price}MAD
              </div>

              <p className="text-sm text-black leading-relaxed">
                {perfum.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm text-(--main-gold)">Quantity</label>
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:text-(--main-gold) transition text-black"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-6 py-2 text-sm border-x border-gray-300 text-(--main-gold)">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:text-(--main-gold) transition text-black"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className=" text-(--main-gold) py-4 text-sm font-light tracking-wide bg-(--main-green) hover:text-black transition">
                    ADD TO CART
                  </button>
                  <button className="text-(--main-gold)  py-4 text-sm font-light tracking-wide bg-(--main-green) hover:text-black transition">
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>

              {/* Expandable Sections */}
              <div className="pt-8">
                {perfum.extraInfo.map((section, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between py-5 text-left transition"
                    >
                      <span className="text-sm font-light text-black tracking-wide uppercase">
                        {section.title}
                      </span>
                      <Plus
                        size={16}
                        className={`text-(--main-gold) transition-transform ${
                          expandedSection === index ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    {expandedSection === index && (
                      <div className="pb-6 text-sm text-gray-600 leading-relaxed">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Detail Image */}
        <div className="w-full flex justify-center items-center bg-(--main-green)">
          <img
            src={perfum.detailImage}
            alt="Product detail"
            className="w-1/2 object-cover"
          />
        </div>
      </div>
      {/* Related Products */}
      <div className="bg-black-50 py-20">
        <div className="mx-auto px-6 lg:px-32">
          <h2 className="text-2xl font-light text-(--main-gold) mb-12 text-center">
            See also
          </h2>
          <div className="block md:hidden">
            <ProductSlideOne names={names} types={types} size={100} slide={3} />
          </div>
          <div className="md:block hidden lg:hidden">
            <ProductSlideTwo names={names} types={types} size={100} slide={2} />
          </div>
          <div className="lg:grid-cols-3 gap-8 hidden xl:grid">
            {names.map((moveItem, index) => (
              <Link
                to={`/ProductDetail/${types[index]}`}
                className="no-underline"
              >
                <ProductCard
                  image="../../public/assets/bottle.png"
                  name={moveItem}
                  price={99}
                  oldPrice={199}
                  size="large"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer
        logo="../../public/assets/logo.png"
        email="anendos@gmail.com"
        mobile="0604505235"
        instagramIcon="../../public/assets/facebookIcon.png"
        facebookIcon="../../public/assets/instagramIcon.png"
      />
    </div>
  );
}
