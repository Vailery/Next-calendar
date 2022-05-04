import { Fragment, ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ThemeContext, ThemeProdiver } from "../../context/theme";

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <ThemeProdiver>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>{children}</main>
        </ThemeProvider>
      </ThemeProdiver>
    </Fragment>
  );
}

export default Layout;
