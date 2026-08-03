import { useState } from "react";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import products from "../data/products";
import "./styles/Products.css";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Seo from "../components/Seo";

const Products = () => {
  const { t } = useTranslation();
  const [search, setsearch] = useState("");
  const filteredp = products.filter((product) =>
    t(product.name)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <>
      <Seo
        title={
          i18n.language === "ar"
            ? "المنتجات | شركة البنا"
            : "Products | ElBanna"
        }
        description={
          i18n.language === "ar"
            ? "استعرض منتجات جنوط التوك توك عالية الجودة من شركة البنا."
            : "Explore ElBanna's premium tuk tuk rim products."
        }
        path="/products"
      />
      <NavBar />
      <LangBtn />
      <div className="productsp">
        <input
          value={search}
          placeholder={t("search")}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
        />

        <div className="products-grid">
          {filteredp.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              name={t(product.name)}
              desc={t(product.desc)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
