import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/Footer.css";
import logo from "/logo.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="intro">
        <img src={logo} alt="" />
      </div>
      <div className="fnav">
        <h2>{t("nav")}</h2>
        <Link to={"/"}>{t("home")}</Link>
        <Link to={"/about"}>{t("about")}</Link>
        <Link to={"/products"}>{t("products")}</Link>
        <Link to={"/contact"}>{t("contact")}</Link>
      </div>
      <div className="medialinks">
        <h2>{t("follow")}</h2>
      </div>
      <div className="contact">
        <h2>{t("contactus")}</h2>

        <p>
          <strong>{t("phone")}:</strong> +20 123 456 7890
        </p>

        <p>
          <strong></strong> info@example.com
        </p>

        <p>
          <strong>{t("address")}:</strong> Alexandria, Egypt
        </p>
      </div>
      <div className="footer-bottom">
        © 2026 The ELBANNA Factory. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
