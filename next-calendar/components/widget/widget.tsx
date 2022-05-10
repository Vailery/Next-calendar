import React, { useEffect, useState } from "react";
import { dateTransformation } from "../../services/date-formatter";
import { ResizableBox } from "../templates/resizable-box/resizable-box";
import { MediumHorizontalWidget } from "./medium-horizontal-widget";
import { SmallWidget } from "./small-widget";
import { MediumVerticalWidget } from "./medium-vertical-widget";
import { LargeWidget } from "./large-widget";
import styled from "styled-components";
import axios from "axios";

interface IDate {
  dateTime: string;
}

export interface IEvent {
  summary: string;
  description: string;
  end: IDate;
  start: IDate;
}

export interface IEvents {
  events: IEvent[];
}

export const Widget = React.memo(() => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const fetchEvents = () => {
    axios
      .get("/api/event")
      .then((response) => {
        const events = response.data.items;

        const date = new Date().toString();
        const formattedDate = dateTransformation(date);

        const result = events.filter(
          (el: IEvent) =>
            dateTransformation(el.start.dateTime) === formattedDate
        );

        setEvents(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <ResizableBox
      onSizeChange={(x: number, y: number) => {
        setX(x);
        setY(y);
      }}
      gridY={[155, 190]}
      gridX={[155, 174]}
    >
      <Main>
        {x === 155 && y === 155 ? (
          <SmallWidget events={events} />
        ) : x === 329 && y === 155 ? (
          <MediumHorizontalWidget events={events} />
        ) : x === 155 && y === 345 ? (
          <MediumVerticalWidget events={events} />
        ) : (
          <LargeWidget events={events} />
        )}
      </Main>
    </ResizableBox>
  );
});

const Main = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.widgetBackground};
  border-radius: 21.67px;
`;
