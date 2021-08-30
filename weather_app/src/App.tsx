import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getEvents } from "./api/events";

interface EventList {
  title: string;
  description: string;
  link: string;
  events: [];
}
interface Event {
  id: string;
  title: string | null;
  descriptions: string | null;
  link: string;
  sources: Array<any>;
  geometry: Array<any>;
  categories: Array<any>;
  closed: any;
}
function App() {
  const [events, setEvents] = React.useState<EventList>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getEvents("https://eonet.sci.gsfc.nasa.gov/api/v3/events")
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  console.log(events);
  return (
    <div className="App">
      {loading === true ? (
        <div>Loading</div>
      ) : (
        <div className="CardsContainer">
          {events?.events.map((event: Event) => (
            <div key={event.id} className="Card">
              <div className="TextMargin">{event.title}</div>
              <div className="TextMargin">
                {event.categories.map((category) => category.title)}
              </div>
              <div>
                {event.geometry.map((geo) =>
                  geo.coordinates.map((coord: number) => <div>{coord}</div>)
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <pre>
      {JSON.stringify(events?.events.map((event:any) => event.title), null ,2)}
      </pre> */}
    </div>
  );
}

export default App;
