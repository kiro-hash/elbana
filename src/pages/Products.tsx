import { useState } from "react";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import products from "../data/products";
import "./styles/Products.css";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";

const Products = () => {
  const {t} = useTranslation();
  const [search, setsearch] = useState("");
  const filteredp = products.filter((product) =>
    t(product.name)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <>
      <NavBar />
      <LangBtn />
      <div className="productsp">
        <input
          value={search}
          placeholder={t("search")}
          onChange={
            (e)=>{setsearch(e.target.value)}
          }
          type="text"
        />
        {filteredp.map((product,index)=>{
          return(
            <ProductCard
            key={index}
            img={product.img}
            name={t(product.name)}
            desc={t(product.desc)}
            />
          )
        })}
      </div>
      <Footer />
    </>
  );
};

export default Products;
