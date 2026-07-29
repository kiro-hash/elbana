import "./styles/LangBtn.css"

import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(
      i18n.language === "ar" ? "en" : "ar",
    );
  };

  return (
    <div className="langbtn">
      <button onClick={toggleLang}>
        {i18n.language === "ar" ? "EN" : "AR"}
      </button>
    </div>
  );
};

export default LangBtn;
