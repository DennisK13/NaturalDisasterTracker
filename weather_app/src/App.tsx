import React from "react";
import "./App.css";
import { getEvents } from "./api/events";
import { Option } from "./components/Categories/Option";
import { Event } from "./components/Event/Event";
import Map from "./components/Map/Map";
import { SelectHeader } from "./components/Categories/SelectHeader";
interface EventList {
  title: string;
  description: string;
  link: string;
  events: [];
}
export interface IEvent {
  id: string;
  title: string | null;
  descriptions: string | null;
  link: string;
  sources: Array<any>;
  geometry: Array<any>;
  categories: Array<any>;
  closed: any;
}
interface Categories {
  title: string;
  description: string;
  link: string;
  categories: Array<any>;
}
function App() {
  const [events, setEvents] = React.useState<EventList>();
  const [categories, setCategories] = React.useState<Categories>();
  const [selectValue, setSelectValue] = React.useState();
  const [displayCategory, setDisplayCategory] = React.useState<EventList>();
  const [loading, setLoading] = React.useState(true);

  const onChangeCategory = (e: any) => {
    setSelectValue(e.target.value);
    getEvents(
      `https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${e.target.value}`
    )
      .then((data) => {
        setDisplayCategory(data);
      })
      .catch((err) => console.log(err));
  };
  const urls = {};
  React.useEffect(() => {
    getEvents("https://eonet.sci.gsfc.nasa.gov/api/v3/events")
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.log(err));

    getEvents("https://eonet.sci.gsfc.nasa.gov/api/v3/categories")
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));

    getEvents(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/drought`)
      .then((data) => {
        setDisplayCategory(data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  const total = displayCategory?.events.length;
  return (
    <div className="App">
      {loading === true ? (
        <div>Loading</div>
      ) : (
        <>
          <SelectHeader
            selectValue={selectValue}
            onChangeCategory={onChangeCategory}
            categories={categories}
            total={total}
          />
          <Map eventData={displayCategory} />
        </>
      )}

      {/* <pre>
      {JSON.stringify(events?.events.map((event:any) => event.title), null ,2)}
      </pre> */}
    </div>
  );
}

export default App;

{
  /* <>

<div>
  
</div>
<div className="">
<label>Category: </label>
  <select name="category" id="category" value={selectValue} onChange={onChangeCategory}>
    {categories?.categories.map((category) => (
      <Option category={category} key={category.id}/>
    ))}
  </select>

</div>
<div className="CardsContainer">
  {displayCategory?.events.map((event: IEvent) => (
    <Event event={event}/>
))}

</div>

</> */
}
