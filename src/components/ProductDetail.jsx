import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Product not found
      </div>
    );
  }

  const { image, name, price, oldPrice, description } = state;

  return (
    <section className="min-h-screen bg-white text-black px-6 lg:px-20 py-12">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* IMAGE */}
        <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-10 shadow-sm">
          <img
            src={image}
            alt={name}
            className="w-[320px] lg:w-[420px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">{name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-black" />
              ))}
              <span className="text-sm text-gray-500">(128 reviews)</span>
            </div>
          </div>

          {/* PRICE */}
          <div className="flex items-end gap-4">
            <span className="text-3xl font-bold">{price} MAD</span>
            {oldPrice && (
              <span className="text-lg line-through text-gray-400">{oldPrice} MAD</span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* BENEFITS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={18} /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> Authentic Product
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} /> Premium Quality
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex-1 bg-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-900 transition">
              Buy Now
            </button>
            <button className="flex-1 border border-black py-4 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
              Order via WhatsApp (COD)
            </button>
          </div>

          {/* TRUST */}
          <p className="text-xs text-gray-500 mt-4">
            100% secure payment · Free returns within 7 days
          </p>
        </div>
      </div>
    </section>
  );
}