import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { ThemeProdiver } from "../context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProdiver>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProdiver>
  );
}

export default MyApp;
