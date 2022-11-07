import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <main className="p-8">
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
