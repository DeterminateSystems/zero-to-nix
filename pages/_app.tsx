import "../styles/globals.css";

import Layout from "components/Layout";
import { Provider, state } from "lib/state";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider createStore={() => state}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
