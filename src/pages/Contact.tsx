import { useState } from "react";
import "./styles/Contact.css";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";

const Contact = () => {
  const [message, setMessage] = useState("");

  const phoneNumber = "201003393938";

  const { t, i18n } = useTranslation();

  const sendToWhatsApp = () => {
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Seo
        title={
          i18n.language === "ar"
            ? "اتصل بنا | شركة بنا"
            : "Contact | banna"
        }
        description={
          i18n.language === "ar"
            ? "تواصل مع شركة بنا للاستفسارات والشراكات."
            : "Contact banna for inquiries and business partnerships."
        }
        path="/contact"
      />
      <NavBar />
      <LangBtn />

      <div className="contact-container">
        <div className="contact-card">
          <h2>{t("contact")}</h2>

          <textarea
            placeholder={t("contactplaceholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendToWhatsApp}>
            {t("sendbtn")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
