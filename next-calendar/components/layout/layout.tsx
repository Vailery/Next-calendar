import Head from "next/head";
import { Fragment, ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ThemeContext } from "../../context/theme";

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <title>Calendar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>{children}</main>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;
