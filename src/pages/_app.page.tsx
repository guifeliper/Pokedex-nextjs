import React from "react";
import { AppProps } from "next/app";
import "css/tailwind.css";
import { appWithTranslation } from "next-i18next";

import { Layout } from "components";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
