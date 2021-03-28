import React from "react";
import { AppProps } from "next/app";
import "css/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from "components";

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
