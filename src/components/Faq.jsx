// import CustomAccordion from "./CustomAccordion";
import { Radius } from "lucide-react";
import "../index.css"; // add: global font import
import { useEffect, useState } from "react";
import NavComponent from "./navComponent";
import Footer from "./footer";
export default function Faq() {
  const [scrol, setScrol] = useState(true);
  const [open, setOpen] = useState(null);
  useEffect(()=>{
    if (scrol){
      window.scrollTo(0, 0);
      setScrol(false);
    }

  }, [scrol])
  const faqQuestions = [
    {
      question: "What makes your perfumes special?",
      answer:
        "Our perfumes are carefully crafted to give you the same confidence and charisma as the originals, with a touch that is all your own. High-quality ingredients ensure a scent that leaves a strong impression, without the luxury price.",
    },
    {
      question: "Are your fragrances long-lasting?",
      answer:
        "Yes. We focus on creating scents that stay with you throughout the day, so you can walk into any room with confidence and presence that lasts.",
    },
    {
      question: "How do I choose the right scent for me?",
      answer:
        "We help you find a fragrance that matches your personality and style. Whether you want to feel bold, charismatic, or effortlessly charming, our perfumes are designed to enhance your unique presence.",
    },
    {
      question: "Do you offer guidance if I’m new to perfumes?",
      answer:
        "Absolutely. We provide tips and suggestions to help you pick your first scent or explore new ones, making it easy to find a signature fragrance that amplifies your confidence.",
    },
    {
      question: "Can I trust the quality even though these are inspired by other brands?",
      answer:
        "Yes. We focus on **precision, quality, and consistency**. Each fragrance is crafted to deliver an experience that rivals high-end originals, so you can enjoy a confident, captivating scent every time.",
    },
    {
      question: "How can I purchase your perfumes?",
      answer:
        "You can order easily through our online store, with fast and secure delivery. Experience the power of a great fragrance without compromise.",
    },
  ];
  
  return (
    <section id="faq" className="flex flex-col gap-40 w-full">
      <div className="px-46">
        <NavComponent />
      </div>

      <div className=" flex flex-col w-full justify-center items-center gap-12  bg-white">
        <div className="flex flex-col w-full justify-center ">
          <h2 className="text-black font-serif  text-5xl m-auto lg:w-1/2 w-ful">
            Some of the things you <br />
            may wanna know
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          {faqQuestions.map((item, index) => (
            <div className="flex flex-col">
              <div
                className={`border-[black] border flex justify-between items-center rounded ${
                  open === index ? "text-(--main-gold)" : "text-[black]"
                } h-18 px-6 lg:w-1/2 w-full mx-auto  cursor-pointer`}
                onClick={() => {
                  setOpen(open === index ? null : index);
                }}
              >
                <div className=" text-2xl hover:text-(--main-gold)">
                  {item.question}
                </div>
                <img
                  className="w-3 h-3"
                  src="../../assets/chevrondown.png"
                  alt=""
                />
              </div>
              <div
                className={`border-[#6f6f6f] border-b border-x lg:w-1/2 w-full mx-auto text-[#575757] px-6 py-6 lora  ${
                  open == index ? "flex" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer
          logo="../../assets/logo.png"
          email="anendos@gmail.com"
          mobile="0604505235"
          instagramIcon="../assets/facebookIcon.png"
          facebookIcon="../assets/instagramIcon.png"
        />
      </div>
    </section>
  );
}
