import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { Button } from "../button/button";
import styled from "styled-components";
import styles from "./login.module.css";
import { Loader } from "../loader/Loader";

export const Login = () => {
  const [session, loadingSession] = useSession();
  const router = useRouter();
  const { t } = useTranslation();

  const handleAuthClick = () => {
    signIn();
  };

  useEffect(() => {
    if (session?.user) {
      router.push("/home");
    }
  }, [session]);

  if (loadingSession) {
    return (
      <div className={styles.mainLoader}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {!session && (
        <div className={styles.main}>
          <Title>{t("common:app_name")}</Title>
          <Button onClick={handleAuthClick} text={t("common:login_button")} />
        </div>
      )}
    </>
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
