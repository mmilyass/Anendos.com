import "./index.css"; // add: global CSS (Tailwind + fonts)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Answers from "./components/answers.jsx";
import AOS from "aos";
import Footer from "./components/footer.jsx";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Collection from "./components/collection.jsx";
import logo from "./assets/logo.png";
import ProductDetail from "./components/ProductDetail.jsx"; // Example new page
import { div } from "motion/react-client";

function App() {
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
            <div className="flex flex-col gap-48">
              <div className="flex flex-col items-center justify-center bg-black gap-48 mx-32">
                <TopHeader />
                <ProductsSection />
                <Collection />
                <Answers />
              </div>
              <Footer
                logo={logo}
                email="anendos@gmail.com"
                mobile="0604505235"
                instagramIcon="src/assets/facebookIcon.png"
                facebookIcon="src/assets/instagramIcon.png"
              />
            </div>
          }
        />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
