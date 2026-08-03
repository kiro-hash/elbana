import { useState } from "react";
import "./styles/Contact.css";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [message, setMessage] = useState("");

  const phoneNumber = "201023236000";

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
      <NavBar/>
      <LangBtn />
      <Helmet>
        <html lang={i18n.language} />

        <title>
          {i18n.language === "ar"
            ? "اتصل بنا | مصنع الصفوة"
            : "Contact | Al Safwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تواصل مع مصنع الصفوة للاستفسارات، الشراكات، التصدير، وطلبات منتجات الجبن عالية الجودة."
              : "Contact Al Safwa Factory for inquiries, partnerships, export opportunities, and premium processed cheese products."
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/contact`}
        />

        <link
          rel="alternate"
          hrefLang="ar"
          href="https://alsafwafactory.com/ar/contact"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://alsafwafactory.com/en/contact"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://alsafwafactory.com/ar/contact"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            i18n.language === "ar"
              ? "اتصل بنا | مصنع الصفوة"
              : "Contact | Al Safwa Factory"
          }
        />

        <meta
          property="og:description"
          content={
            i18n.language === "ar"
              ? "تواصل مع مصنع الصفوة للاستفسارات، الشراكات، التصدير، وطلبات منتجات الجبن عالية الجودة."
              : "Contact Al Safwa Factory for inquiries, partnerships, export opportunities, and premium processed cheese products."
          }
        />

        <meta
          property="og:url"
          content={`https://alsafwafactory.com/${i18n.language}/contact`}
        />

        <meta
          property="og:image"
          content="https://alsafwafactory.com/logo.png"
        />

        <meta
          property="og:site_name"
          content="Al Safwa Factory"
        />
      </Helmet>
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
