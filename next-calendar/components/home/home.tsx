import { useContext, useEffect } from "react";
import { Button } from "../button/button";
import { DarkModeToggle } from "../dark-mode-toggle/dark-mode-toggle";
import { ThemeContext } from "../../context/theme";
import { useTranslation } from "next-i18next";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import { useRouter } from "next/router";
import { Widget } from "../widget/widget";
import { signOut, useSession } from "next-auth/client";
import styled from "styled-components";
import styles from "./Home.module.css";

export const Home = () => {
  const [session] = useSession();
  const { t } = useTranslation();
  const { isDark, changeIsDark } = useContext(ThemeContext);
  const router = useRouter();

  const handleSignoutClick = () => {
    signOut();
  };

  useEffect(() => {
    if (!session?.user) {
      router.push("/");
    }
    console.log(session);
  }, [session]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <Button onClick={handleSignoutClick} text={t("common:exit_button")} />

        <p>{session?.user?.name}</p>
        <Title>{t("common:app_name")}</Title>

        <div className={styles.toggles}>
          <LanguageSwitcher />

          <DarkModeToggle
            inputChecked={isDark}
            onChange={() => {
              changeIsDark();
            }}
          />
        </div>
      </div>

      <Widget />
    </div>
  );
};

const Title = styled.div`
  font-family: "SF-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
`;
