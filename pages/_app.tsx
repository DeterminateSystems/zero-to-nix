import "highlight.js/styles/obsidian.css";

import "../styles/globals.css";

import Layout from "components/Layout";
import hljs from "highlight.js";
import nix from "highlight.js/lib/languages/nix";
import shell from "highlight.js/lib/languages/shell";
import { Provider, state } from "lib/state";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// Register syntax highlighting languages
hljs.registerLanguage("shell", shell);
hljs.registerLanguage("nix", nix);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Provider createStore={() => state}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
