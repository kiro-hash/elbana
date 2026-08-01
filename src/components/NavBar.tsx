import "./styles/NavBar.css";
import { Link } from "react-router-dom";
// import logo from "/logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import gnt from "../assets/gnt.png"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const NavBar = () => {
  const [isopened, setisopened] = useState(false);
  const { t } = useTranslation();

  useGSAP(()=>{
    gsap.fromTo(".logo",{
      x:-600
    },{
      x:0,
      rotate:283
    })
    gsap.fromTo(".links",{
      opacity:0
    },{
      opacity:1
    })
  })

  return (
    <div className="navbar">
      <div className="nav">
        <img className="logo" src={gnt} alt="Logo" />

        <div className={`links ${isopened ? "menu" : ""}`}>
          <Link className="link" to="/" onClick={() => setisopened(false)}>
            {t("home")}
          </Link>

          <Link className="link" to="/about" onClick={() => setisopened(false)}>
            {t("about")}
          </Link>

          <Link className="link" to="/products" onClick={() => setisopened(false)}>
            {t("products")}
          </Link>

          <Link
            className="link primarybtn mobile-contact"
            to="/contact"
            onClick={() => setisopened(false)}
          >
            {t("contact")}
          </Link>
        </div>

        <button
          className="menubtn"
          onClick={() => setisopened(!isopened)}
          aria-label="Menu"
        >
          <span className={isopened ? "line active1" : "line"}></span>
          <span className={isopened ? "line hide" : "line"}></span>
          <span className={isopened ? "line active2" : "line"}></span>
        </button>

        <Link className="link  desktop-contact" to="/contact">
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;