import { useState } from "react";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";
import heroimg from "../assets/heroimg.png";
import ProductCard from "../components/ProductCard";
import "./styles/Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Home = () => {
  const { t ,i18n} = useTranslation();
  const distance = window.innerWidth < 768 ? 120 : 200;

  const [pid, setPid] = useState(0);

  const handelproductinc = () => {
    gsap.to(".pc", {
      x: -distance,
      opacity: 0,
      scale: 0.1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setPid((prev) => (prev + 1) % products.length);

        gsap.fromTo(
          ".pc",
          {
            x: distance,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      },
    });
  };

  const handelproductdec = () => {
    gsap.to(".pc", {
      x: distance,
      opacity: 0,
      scale: 0.1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setPid(
          (prev) =>
            (prev - 1 + products.length) % products.length,
        );

        gsap.fromTo(
          ".pc",
          {
            x: -distance,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      },
    });
  };

  return (
    <>
      <NavBar />
      <LangBtn />

      <div className={`hero ${i18n.language==="ar"?"inversehero":""}`}>
        <img src={heroimg} alt="" />
        <div className="hero-content">
          <h1>{t("heroTitle")}</h1>

          <p>{t("heroDescription")}</p>

          <Link to="/products" className="primarybtn">
            {t("exploreProducts")}
          </Link>
        </div>
      </div>

      <div className="products">
        <h1>{t("products")}</h1>

        <div className="productscont">
          <button
            onClick={handelproductdec}
            className="pbtn"
          >
            {i18n.language === "ar" ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </button>

          <div className="product-slider">
            <div className="pc">
              <ProductCard
                img={products[pid].img}
                name={t(products[pid].name)}
                desc={t(products[pid].desc)}
              />
            </div>
          </div>

          <button
            onClick={handelproductinc}
            className="pbtn"
          >
            {i18n.language === "ar" ? (
              <ChevronLeft />
            ) : (
              <ChevronRight />
            )}
          </button>
          <Link className="sm primarybtn" to={"/products"}>
            Show More
          </Link>
        </div>
      </div>
      <div className="aboutcont">
        <h1>{t("about")}</h1>
        <div className="about">
          <div className="text">
            <p>
              {t("aboutDescription")}
            </p>
            <Link className="primarybtn" to={"/about"}>
              {t("learnMore")}
            </Link>
          </div>
          <img src={heroimg} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
