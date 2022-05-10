import { dateFormatter } from "../../services/date-formatter";
import { Day } from "../day/day";
import { ErrorMessage } from "../error-message/error-message";
import { Event } from "../event/event";
import { IEvents } from "./widget";
import styles from "./widget.module.css";

export const SmallWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.SmallWidget}>
      <Day />
      {events.length !== 0 ? (
        <>
          {events.map((event, index) => {
            if (index === 0) {
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
                />
              );
            }

            return null;
          })}
        </>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};
