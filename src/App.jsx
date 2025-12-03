import "./index.css"; // add: global CSS (Tailwind + fonts)
import TopHeader from "./components/TopHeader.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Answers from "./components/answers.jsx";

function App() {

  return (
    <div className="">
      <TopHeader />
      <ProductsSection />
      <Answers />
    </div>
  )
}

export default App
