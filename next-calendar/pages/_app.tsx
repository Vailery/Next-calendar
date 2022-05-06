import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { ThemeProdiver } from "../context/theme";
import { appWithTranslation } from "next-i18next";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProdiver>
      <Layout>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ThemeProdiver>
  );
}

export default appWithTranslation(MyApp);
