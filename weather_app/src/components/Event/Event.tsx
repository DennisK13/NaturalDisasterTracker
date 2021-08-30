import React from "react";
import { IEvent } from "../../App";

interface Props {
  event: IEvent;
}

// id: string;
// title: string | null;
// descriptions: string | null;
// link: string;
// sources: Array<any>;
// geometry: Array<any>;
// categories: Array<any>;
// closed: any;

export const Event = ({ event }: Props) => {
  const {
    id,
    title,
    descriptions,
    link,
    sources,
    geometry,
    categories,
    closed,
  } = event;
  return (
    <div key={event.id} className="Card">
      <div className="TextMargin">{event.title}</div>
      
      <div>
        {geometry.map((geo) =>
          geo.coordinates.map((coord: number) => <div>{coord}</div>)
        )}
      </div>
    </div>
  );
};
