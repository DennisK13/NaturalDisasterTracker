import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import { LocationMarker } from "./LocationMarker";
import { LocationInfo } from "./LocationInfo";
interface Props {}

const Map = ({ eventData, center, zoom }: any) => {
  const [locationInfo, setLocationInfo] = useState<any>(null);

  let markers = eventData?.events.map((ev: any) => {
    if(ev.geometry.length === 1){
        return (
            <LocationMarker
              lat={ev.geometry[0].coordinates[1]}
              lng={ev.geometry[0].coordinates[0]}
              onClick={() => setLocationInfo({
                  id: ev.id,
                  title: ev.title
              })}
            />
          );
    }
    else{
       return ev.geometry.map((coord:any) => (
            <LocationMarker lat={coord.coordinates[1]} lng={coord.coordinates[0]} onClick={() => setLocationInfo({
                id: ev.id,
                title: ev.title
            })}/>
        ))
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD0CxWRcdrWZH9m1WL7BuMVu1eXoCLUZqw" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo}/>}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
