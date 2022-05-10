import { dateFormatter } from "../../services/date-formatter";
import { Calendar } from "../calendar/calendar";
import { ErrorMessage } from "../error-message/error-message";
import { Event } from "../event/event";
import { IEvents } from "./widget";
import styles from "./widget.module.css";

export const MediumHorizontalWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.MediumHorizontalWidget}>
      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event, index) => {
            const isChangeColor = index % 2 !== 0 ? true : false;

            if (index < 2) {
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
                  isChangeColor={isChangeColor}
                />
              );
            }

            return null;
          })}
        </div>
      ) : (
        <ErrorMessage />
      )}

      <Calendar />
    </div>
  );
};
