import { createGlobalStyle } from "styled-components";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ITheme {
  children: ReactNode;
}

declare module "styled-components" {
  export interface DefaultTheme {
    textButton: string;
    mainBackground: string;
    text: string;
    widgetBackground: string;
    grayColor: string;
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  textButton: "#FFFFFF",
  mainBackground: "#e5e5e5",
  text: "#000000",
  widgetBackground: "#ffffff",
  grayColor: "rgba(0, 0, 0, 0.5)",
};

export const darkTheme = {
  textButton: "#000000",
  mainBackground: "#797979",
  text: "#FFFFFF",
  widgetBackground: "#121212",
  grayColor: "#C1C1C1",
};

export const ThemeContext = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

export const ThemeProdiver = ({ children }: ITheme) => {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("isDark") === "true"
  );

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
