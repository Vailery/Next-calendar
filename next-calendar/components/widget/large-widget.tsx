import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { dateFormatter } from "../../services/date-formatter";
import { Calendar } from "../calendar/calendar";
import { Day } from "../day/day";
import { ErrorMessage } from "../error-message/error-message";
import { Event } from "../event/event";
import { IEvents } from "./widget";
import styles from "./widget.module.css";

export const LargeWidget = ({ events }: IEvents) => {
  const { t } = useTranslation();
  return (
    <div className={styles.LargeWidget}>
      <div className={styles.calendar}>
        <Day />

        <Calendar />
      </div>

      <Today>{t("day")}</Today>
      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event, index) => {
            if (index < 4) {
              const time = dateFormatter(
                event.start.dateTime,
                event.end.dateTime
              );
              return (
                <Event
                  key={event.summary + index}
                  name={event.summary}
                  status={event.description}
                  time={time}
                  isGreenColor={true}
                />
              );
            }

            return null;
          })}
        </div>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};

const Today = styled.p`
  font-family: "SF-Medium";
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.grayColor};
`;
