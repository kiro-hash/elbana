import "./styles/Home.css";

import heroimg from "../assets/heroimg.jpg";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <>
      <NavBar />
      <LangBtn />
      <div className="hero">
        <img src={heroimg} alt="" />
      </div>
      <div className="products">
        <h1>Products</h1>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              desc={product.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
