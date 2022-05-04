const timeFormatter = (date: Date) => {
  const minutes = date.getMinutes();
  const resultMinutes =
    minutes.toString().length === 1 ? `${minutes}0` : minutes;

  const hours = date.getHours();
  const resultHours = hours.toString().length === 1 ? `0${hours}` : hours;

  return `${resultHours}:${resultMinutes}`;
};

export const dateFormatter = (startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const start = timeFormatter(startDate);
  const end = timeFormatter(endDate);

  const result = `${start}-${end}`;
  return result;
};

export const dateTransformation = (dateTime: string) => {
  const date = new Date(dateTime);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const result = `${day}-${month}-${year}`;
  return result;
};
