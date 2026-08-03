import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  const {i18n} =useTranslation();
  useEffect(()=>{
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang= i18n.language;
  },[i18n.language])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
