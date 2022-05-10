export interface IDate {
  name: string;
  date: number;
}

const date = new Date();

export const makeCalendar = (language: string) => {
  let days: IDate[] = [];
  let month: string = "";
  date.setDate(1);

  month = date.toLocaleString(language, { month: "long" });

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  for (let x = firstDayIndex; x > 0; x--) {
    let day = {
      name: "prevDate",
      date: prevLastDay - x + 1,
    };

    days = days.concat(day);
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      let day = {
        name: "today",
        date: i,
      };

      days = days.concat(day);
    } else {
      let day = {
        name: "day",
        date: i,
      };

      days = days.concat(day);
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    let day = {
      name: "nextDate",
      date: j,
    };

    days = days.concat(day);
  }

  return { days, month };
};
