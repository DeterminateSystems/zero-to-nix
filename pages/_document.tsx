import { Head, Html, Main, NextScript } from "next/document";
import site from "site";

const Document = () => {
  const { language } = site;

  return (
    <Html lang={language}>
      <Head />
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
