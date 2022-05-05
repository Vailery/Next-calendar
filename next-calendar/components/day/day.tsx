import { useTranslation } from "next-i18next";
import styled from "styled-components";
import styles from "./day.module.css";

export const Day = () => {
  const { i18n } = useTranslation();
  const date = new Date();
  const dayOfWeek = date.toLocaleString(i18n.language, { weekday: "long" });
  const day = date.getDate();

  return (
    <div className={styles.main}>
      <p className={styles.dayOfWeek}>{dayOfWeek}</p>
      <Today>{day}</Today>
    </div>
  );
};

const Today = styled.p`
  font-family: "SF-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 50px;
  color: ${({ theme }) => theme.text};
`;
