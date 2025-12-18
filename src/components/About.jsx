import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="mx-auto px-6 lg:px-32 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-lg text-gray-600 hover:text-white transition"
        >
          <ArrowLeft size={23} />
          Back
        </button>
      </div>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900 via-black to-black"></div>

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-8xl md:text-[8rem] font-light tracking-[0.3em] mb-6 bg-gradient-to-r from-yellow-600 via-(--main-gold) to-yellow-600 bg-clip-text text-transparent uppercase">
            ANENDOS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400">
            You Fragrance Is Your Power
          </p>
          <div className="mt-12 w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-yellow-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl text-(--main-gold) mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-300">
              Born from a passion for timeless elegance and olfactory artistry,
              our journey began in the heart of ancient perfumeries, where
              master craftsmen devoted their lives to capturing memories in
              bottles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Each fragrance we create is a testament to centuries of tradition,
              blended with modern sophistication. We believe that true luxury
              lies not in extravagance, but in the subtle art of leaving an
              unforgettable impression.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our perfumes are crafted for those who understand that scent is
              more than fragrance—it's an identity, a statement, a legacy
              carried through time.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-900/20 to-transparent border border-yellow-600/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="text-8xl text-yellow-600 mb-4">✧</div>
                <p className="text-yellow-500 text-2xl font-light tracking-wider">
                  Est. 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            Our Identity
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Craftsmanship */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ◈
              </div>
              <h3 className="text-2xl text-yellow-500 font-light tracking-wider">
                Craftsmanship
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every bottle represents hundreds of hours of meticulous work,
                selecting only the rarest ingredients from around the world.
              </p>
            </div>

            {/* Timeless Elegance */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ❋
              </div>
              <h3 className="text-2xl text-yellow-500 font-light tracking-wider">
                Timeless Elegance
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We don't follow trends—we create classics that transcend
                generations, becoming part of your personal heritage.
              </p>
            </div>

            {/* Exclusivity */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ✦
              </div>
              <h3 className="text-2xl text-yellow-500 font-light tracking-wider">
                Exclusivity
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Limited editions crafted in small batches ensure that your
                signature scent remains uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-4xl font-light text-gray-300 italic leading-relaxed">
            "A perfume is more than a scent—it's the invisible signature of your
            presence, the lingering memory of your essence."
          </blockquote>
          <p className="text-yellow-500 text-xl tracking-widest">
            — Our Philosophy
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-t from-zinc-900 to-black">
        <h3 className="text-4xl font-light text-yellow-500 mb-8">
          Experience the Legacy
        </h3>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Discover our exclusive collection and find the fragrance that tells
          your story.
        </p>
        <button className="px-12 py-4 border-2 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black transition-all duration-300 text-lg tracking-wider font-light">
          EXPLORE COLLECTION
        </button>
      </section>
    </div>
  );
}
