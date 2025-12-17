import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useLocation } from "react-router-dom";
import perfumes from "../data/topsales.json";
import "../index.css";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  if (!state) {
    return <div className="text-white w-30 h-30">No perfum information available.</div>;
  }
  const perfum = perfumes[state.name];
  console.log(perfum);
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="mx-auto px-6 lg:px-32 py-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-white transition">
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="mx-auto px-6 lg:px-32 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Product Image */}
          <div className="border-[rgba(255,255,0,0.2)] border flex items-center justify-center py-20">
            <img
              src={perfum.image}
              alt={perfum.name}
              className="w-auto h-125 object-contain"
            />
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-(--main-gold) mb-1">{perfum.name}</h1>
              <p className="text-sm text-white">{perfum.subtitle}</p>
            </div>

            <div className="text-3xl font-light text-white">{perfum.price}MAD</div>

            <p className="text-sm text-white leading-relaxed">
              {perfum.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <label className="text-sm text-(--main-gold)">Quantity</label>
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:text-(--main-gold) transition text-white"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-6 py-2 text-sm border-x border-gray-300 text-(--main-gold)">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:text-(--main-gold) transition text-white"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white text-black py-4 text-sm font-light tracking-wide hover:bg-gray-800 hover:text-(--main-gold) transition">
                  ADD TO CART
                </button>
                <button className="bg-white text-black py-4 text-sm font-light tracking-wide hover:bg-gray-800 hover:text-(--main-gold) transition">
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
                    <span className="text-sm font-light text-white tracking-wide uppercase">
                      {section.title}
                    </span>
                    <Plus
                      size={16}
                      className={`text-(--main-gold) transition-transform ${expandedSection === index ? "rotate-45" : ""
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
      <div className="w-full px-6 lg:px-32 bg-black">
        <img
          src={perfum.detailImage}
          alt="Product detail"
          className="w-full h-150 object-cover"
        />
      </div>

      {/* Related Products */}
      <div className="bg-black-50 py-20">
        <div className="mx-auto px-6 lg:px-32">
          <h2 className="text-2xl font-light text-(--main-gold) mb-12">See also</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfum.relatedProducts.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="border border-[rgba(255,255,0,0.2)] mb-4 flex justify-center items-center h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-80 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-light text-white">{item.name}</h3>
                  <span className="text-sm font-light text-white">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}