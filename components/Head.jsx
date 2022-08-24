import NextHead from "next/head";
import React from "react";

export const WEBSITE_HOST_URL = "http://localhost:3000/";

const Head = () => {
  const image = `${WEBSITE_HOST_URL}/images/meta-image.jpeg`;

  return (
    <NextHead>
      <title>Vanesa Detto (VMD) - Site</title>
      <meta content="Soy Junior Full Stack Developer" name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vanesa Detto (VMD) - Website" />
      <meta
        property="og:description"
        content="Soy Junior Full Stack Developer"
      />
      <meta property="og:title" content="Vanesa Detto - Site" />
      <meta property="og:image" content={image} />
    </NextHead>
  );
};

export default Head;
