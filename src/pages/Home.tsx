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
import Seo from "../components/Seo";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const { t, i18n } = useTranslation();
  const distance = window.innerWidth < 768 ? 120 : 200;

  const [pid, setPid] = useState(0);
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof colorProducts>("white");

  const colorProducts = {
    blue: 2,
    red: 4,
    white: 1,
    black: 3,
    gray: 5,
  };

  const sliderProducts = ["p1", "colors", "p6", "p8"];

  const currentProduct =
    pid === 0
      ? products[0]
      : pid === 1
        ? products[colorProducts[selectedColor]]
        : pid === 2
          ? products[6]
          : products[7];

  const handleColorSelect = (
    color: keyof typeof colorProducts,
  ) => {
    if (color === selectedColor) return;

    gsap.to(".pc", {
      x: -distance,
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setSelectedColor(color);

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

  const handelproductinc = () => {
    gsap.to(".pc", {
      x: -distance,
      opacity: 0,
      scale: 0.1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setPid(
          (prev) => (prev + 1) % sliderProducts.length,
        );

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
            (prev - 1 + sliderProducts.length) %
            sliderProducts.length,
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
      <Seo
        title={
          i18n.language === "ar"
            ? "شركة بنا | تصنيع جنوط التوك توك"
            : "banna | Premium Tuk Tuk Rim Manufacturer"
        }
        description={
          i18n.language === "ar"
            ? "شركة بنا متخصصة في تصنيع جنوط التوك توك عالية الجودة."
            : "banna specializes in manufacturing premium tuk tuk rims."
        }
        path="/"
      />

      <NavBar />
      <LangBtn />

      <div
        className={`hero ${
          i18n.language === "ar" ? "inversehero" : ""
        }`}
      >
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
                img={currentProduct.img}
                name={t(currentProduct.name)}
                desc={t(currentProduct.desc)}
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

          <Link className="sm primarybtn" to="/products">
            {t("sm")}
          </Link>
        </div>

        <div
          className={`colors ${pid === 1 ? "active" : ""}`}
        >
          <button
            className={`color blue ${
              selectedColor === "blue" ? "selected" : ""
            }`}
            onClick={() => handleColorSelect("blue")}
          />

          <button
            className={`color red ${
              selectedColor === "red" ? "selected" : ""
            }`}
            onClick={() => handleColorSelect("red")}
          />

          <button
            className={`color white ${
              selectedColor === "white" ? "selected" : ""
            }`}
            onClick={() => handleColorSelect("white")}
          />

          <button
            className={`color black ${
              selectedColor === "black" ? "selected" : ""
            }`}
            onClick={() => handleColorSelect("black")}
          />

          <button
            className={`color gray ${
              selectedColor === "gray" ? "selected" : ""
            }`}
            onClick={() => handleColorSelect("gray")}
          />
        </div>
      </div>

      <div className="aboutcont">
        <h1>{t("about")}</h1>

        <div className="about">
          <div className="text">
            <p>{t("aboutDescription")}</p>

            <Link className="primarybtn" to="/about">
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
