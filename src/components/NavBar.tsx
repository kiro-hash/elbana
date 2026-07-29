import "./styles/NavBar.css";

import { Link } from "react-router-dom";

import logo from "/logo.png"
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const {t} = useTranslation();
  return (
    <div className="navbar">
      <div className="nav">
        <img className="logo" src={logo} alt="" />
        <div className="links">
          <Link className="link" to={"/"}>{t("home")}</Link>
          <Link className="link" to={"/about"}>{t("about")}</Link>
          <Link className="link" to={"/products"}>{t("products")}</Link>
        </div>
        <Link className="link primarybtn" to={"/contact"}>{t("contact")}</Link>
      </div>
    </div>
  );
};

export default NavBar;
