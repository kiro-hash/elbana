import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

import "./styles/About.css";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Seo
        title={
          i18n.language === "ar"
            ? "من نحن | شركة بنا"
            : "About Us | banna"
        }
        description={
          i18n.language === "ar"
            ? "تعرف على شركة بنا ورسالتها وخبرتها في تصنيع جنوط التوك توك."
            : "Learn about banna and our expertise in manufacturing premium tuk tuk rims."
        }
        path="/about"
      />

      <NavBar />
      <LangBtn />

      <section className="about">
        <div className="about-container">
          <span className="about-subtitle">
            {t("aboutPageSubtitle")}
          </span>

          <h1>{t("aboutPageTitle")}</h1>

          <p className="about-text">
            {t("aboutPageDescription")}
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h2>{t("experienceValue")}</h2>
              <span>{t("experience")}</span>
            </div>

            <div className="about-card">
              <h2>{t("qualityValue")}</h2>
              <span>{t("quality")}</span>
            </div>

            <div className="about-card">
              <h2>{t("supportValue")}</h2>
              <span>{t("support")}</span>
            </div>
          </div>

          <div className="mission">
            <div>
              <h3>{t("visionTitle")}</h3>
              <p>{t("visionDescription")}</p>
            </div>

            <div>
              <h3>{t("missionTitle")}</h3>
              <p>{t("missionDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
