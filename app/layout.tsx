"use client";

import "../styles/globals.css";

import hljs from "highlight.js";
import nix from "highlight.js/lib/languages/nix";
import shell from "highlight.js/lib/languages/shell";
import { Provider, state } from "lib/state";
import Head from "next/head";
import React, { useEffect } from "react";

import site from "../site";

type Props = {
  children: React.ReactNode;
};

hljs.registerLanguage("shell", shell);
hljs.registerLanguage("nix", nix);

const RootLayout = ({ children }: Props) => {
  const { title, description, language } = site;

  const metaTitle = `${title}: ${description.toLowerCase()}`;

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <Provider createStore={() => state}>
      <html lang={language} className="h-screen">
        <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={description} />
        </Head>

        <body className="font-sans antialiased">{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
