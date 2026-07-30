import "./styles/NavBar.css";

import { Link } from "react-router-dom";

import logo from "/logo.png"
import { useTranslation } from "react-i18next";
import { useState } from "react";
const NavBar = () => {
  const [isopened,setisopened]=useState(false);
  const {t} = useTranslation();
  return (
    <div className="navbar">
      <div className="nav">
        <img className="logo" src={logo} alt="" />
        <div className={`links  ${isopened?"menu":""}`}>
          <Link className="link" to={"/"}>{t("home")}</Link>
          <Link className="link" to={"/about"}>{t("about")}</Link>
          <Link className="link" to={"/products"}>{t("products")}</Link>
          <Link className="link primarybtn" to={"/contact"}>{t("contact")}</Link>
        </div>
        <button className="menubtn primarybtn" onClick={()=>{setisopened(!isopened)}}>{t("menu")}</button>
        <Link className="link primarybtn" to={"/contact"}>{t("contact")}</Link>
      </div>
    </div>
  );
};

export default NavBar;
