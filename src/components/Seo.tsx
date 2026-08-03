import { Helmet } from "react-helmet-async";
import i18n from "../i18n";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const Seo = ({
  title,
  description,
  path = "",
  image = "https://elbanna.com/logo.png",
}: SeoProps) => {
  const url = `https://elbanna.com${path}`;

  return (
    <Helmet>
      <html lang={i18n.language} />

      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ElBanna" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;