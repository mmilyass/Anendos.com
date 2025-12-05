import "./index.css"; // add: global CSS (Tailwind + fonts)
import TopHeader from "./components/TopHeader.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Answers from "./components/answers.jsx";
import collection from "./components/collection.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-[#000]">
      <TopHeader />
      <ProductsSection />
      <collection />
      <Answers />
    </div>
  );
}

export default App;
