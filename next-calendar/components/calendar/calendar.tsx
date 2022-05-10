import { useEffect, useState } from "react";
import { IDate, makeCalendar } from "../../services/helpers";
import styled from "styled-components";
import styles from "./calendar.module.css";
import { useTranslation } from "next-i18next";

interface ICalendar {
  days: IDate[];
  month: string;
}

export const Calendar = () => {
  const { i18n, t } = useTranslation();
  const [month, setMonth] = useState<string>("");
  const [formattedDays, setFormattedDays] = useState<IDate[][]>([]);

  const renderCalendar = ({ days, month }: ICalendar) => {
    const chunkSize = 7;
    let newArr = [];
    for (let i = 0; i < days.length; i += chunkSize) {
      const chunk = days.slice(i, i + chunkSize);

      newArr.push(chunk);
    }

    setMonth(month);
    setFormattedDays(newArr);
  };

  useEffect(() => {
    renderCalendar(makeCalendar(i18n.language));
  }, [i18n.language]);

  return (
    <div className={styles.main}>
      <p className={styles.title}>{month}</p>

      <Weekdays>
        {t("common:weekdays")
          .split("")
          .map((item, index) => (
            <p key={item + index}>{item}</p>
          ))}
      </Weekdays>

      <div className={styles.days}>
        {formattedDays.map((el, index) => (
          <Week key={index}>
            {el.map((element, index) => (
              <DayNumber
                key={element.name + index}
                className={`${styles[element.name]}`}
              >
                {element.date}
              </DayNumber>
            ))}
          </Week>
        ))}
      </div>
    </div>
  );
};

const Weekdays = styled.div`
  display: flex;
  p {
    font-family: "SF-Medium";
    font-size: 9px;
    line-height: 11px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: ${({ theme }) => theme.grayColor};
  }
`;

const Week = styled.div`
  display: flex;
  p:first-of-type,
  p:last-of-type {
    color: ${({ theme }) => theme.grayColor};
  }
`;

const DayNumber = styled.p`
  width: 20px;
  height: 20px;
  font-family: "SF-Medium";
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;
