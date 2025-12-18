import "./index.css"; // add: global CSS (Tailwind + fonts)
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Answers from "./components/answers.jsx";
import AOS from "aos";
import Footer from "./components/footer.jsx";
import Collection from "./components/collection.jsx";
import ProductDetail from "./components/ProductDetail.jsx"; // Example new page
import About from "./components/About.jsx";

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
              <div className="flex flex-col items-center justify-center bg-black gap-80 mx-46">
                <TopHeader />
                <ProductsSection />
                <Collection />
                <Answers />
              </div>
              <Footer
                logo="../../public/assets/logo.png"
                email="anendos@gmail.com"
                mobile="0604505235"
                instagramIcon="../assets/facebookIcon.png"
                facebookIcon="../assets/instagramIcon.png"
              />
            </div>
          }
        />
        <Route path="/About" element={<About />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
