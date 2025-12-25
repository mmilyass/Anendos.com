import NavComponent from "./navComponent";
import Footer from "./footer";

export default function About() {
  window.scrollTo(0, 0);
  return (
    <div className="min-h-screen bg-[white] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="px-46">
        <NavComponent />
      </div>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900 via-[white] to-[white]"></div>

        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-8xl md:text-[8rem] font-medium tracking-[0.3em] mb-6 bg-linear-to-r from-yellow-600 to-(--main-gold) via-yellow-500 bg-clip-text text-transparent uppercase">
            ANENDOS
          </h1>
          <p className="text-2xl md:text-3xl text-black">
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
            <h2 className="text-5xl md:text-6xl text-(--main-gold) mb-8 font-semibold">
              Our Story
            </h2>
            <p className="text-lg text-black">
              Anendos was created for men who dress with class and intention,
              yet feel that confidence and charisma in fragrance are often
              reserved for expensive luxury perfumes. We saw a gap between the
              desire to feel elegant and self-assured, and the accessibility of
              that experience.
            </p>
            <p className="text-lg text-black leading-relaxed">
              We believe perfume is more than a scent — it is a feeling. It
              builds confidence, adds charisma, and strengthens how you carry
              yourself. Our vision is to make that feeling accessible, without
              compromise.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Anendos creates luxury-inspired fragrances for men who want to
              feel confident, elegant, and charismatic every day. Not for status
              or labels, but for the feeling within. Because confidence should
              be felt — from within.
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
          <h2 className="font-semibold text-5xl md:text-6xl text-center mb-20 text-(--main-gold)">
            Our Identity
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Charisma */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ◈
              </div>
              <h3 className="text-2xl text-yellow-500 tracking-wider font-semibold">
                Charisma
              </h3>
              <p className="text-black leading-relaxed">
                Anendos enhances your natural presence, celebrating individuals
                who inspire confidence and captivate attention wherever they go.
              </p>
            </div>

            {/* Confidence */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ❋
              </div>
              <h3 className="text-2xl text-yellow-500 tracking-wider font-semibold">
                Confidence
              </h3>
              <p className="text-black leading-relaxed">
                Each fragrance empowers you to embrace your uniqueness with
                poise, making a statement without saying a word.
              </p>
            </div>

            {/* Class & Exclusivity */}
            <div className="text-center space-y-6 p-8 border border-yellow-600/20 rounded-lg hover:border-yellow-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-600/10">
              <div className="w-20 h-20 mx-auto border-2 border-yellow-600 rounded-full flex items-center justify-center text-3xl text-yellow-500">
                ✦
              </div>
              <h3 className="text-2xl text-yellow-500 tracking-wider font-semibold">
                Class & Exclusivity
              </h3>
              <p className="text-black leading-relaxed">
                Crafted for sophistication, our limited editions ensure your
                scent remains as unique and refined as your personal style.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-4xl font-light text-black italic leading-relaxed">
            "A perfume is more than a scent—it's the invisible signature of your
            presence, the lingering memory of your essence."
          </blockquote>
          <p className="text-yellow-500 text-xl tracking-widest font-semibold">
            — Our Philosophy
          </p>
        </div>
      </section>
      <Footer
        logo="../../assets/logo.png"
        email="anendos@gmail.com"
        mobile="0604505235"
        instagramIcon="../assets/facebookIcon.png"
        facebookIcon="../assets/instagramIcon.png"
      />{" "}
      {/* Footer CTA */}
    </div>
  );
}
