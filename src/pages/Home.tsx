import { useState } from "react";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";
import heroimg from "../assets/heroimg.jpg"
import ProductCard from "../components/ProductCard";
import "./styles/Home.css"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import i18n from "../i18n";

const Home = () => {
  const { t } = useTranslation();

  const [pid, setPid] = useState(0);

  const handelproductinc = () => {
    setPid((prev) => (prev + 1) % products.length);
  };

  const handelproductdec = () => {
    setPid((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <>
      <NavBar />
      <LangBtn />

      <div className="hero">
        <img src={heroimg} alt="" />
        <div className="hero-content">
          <h1>ElBanna</h1>
        </div>
      </div>

      <div className="products">
        <h1>{t("products")}</h1>

        <div className="productscont">
          <button onClick={handelproductdec} className="pbtn">
            {i18n.language==="ar"?<ChevronRight />:<ChevronLeft />}
          </button>

          <ProductCard
            img={products[pid].img}
            name={t(products[pid].name)}
            desc={t(products[pid].desc)}
          />

          <button onClick={handelproductinc} className="pbtn">
            {i18n.language==="ar"?<ChevronLeft />:<ChevronRight />}
          </button>
          <Link className="sm primarybtn" to={"/products"}>Show More</Link>
        </div>
      </div>
      <div className="about">
        <h1>About Us</h1>
      </div>
      <Footer/>
    </>
  );
};

export default Home;