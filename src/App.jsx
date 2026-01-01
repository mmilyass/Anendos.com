import "./index.css"; // add: global CSS (Tailwind + fonts)
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import AOS from "aos";
import Footer from "./components/footer.jsx";
import Collection from "./components/collection.jsx";
import ProductDetail from "./components/ProductDetail.jsx"; // Example new page
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";

function App() {
  const [scrol, setScrol] = useState(true);
  scrol ? window.scrollTo(0, 0) : setScrol(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col gap-48 w-full">
              <div className=" flex flex-col items-center justify-center gap-10">
                <TopHeader />
                <div className="flex flex-col items-center justify-center gap-20 w-full">
                  <ProductsSection />
                  <Collection />
                </div>
              </div>

              <Footer
                logo="../../assets/logo.png"
                email="anendos@gmail.com"
                mobile="0604505235"
                instagramIcon="../assets/facebookIcon.png"
                facebookIcon="../assets/instagramIcon.png"
              />
            </div>
          }
        />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetail/:name" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
