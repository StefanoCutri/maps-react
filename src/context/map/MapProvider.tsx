import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";

import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {

    const locationPopUp = new Popup()
    .setHTML(`
    <h5>This is your current location</h5>
    `)

    new Marker({
      color: 'ff00'
    })
    .setLngLat(map.getCenter())
    .setPopup(locationPopUp)
    .addTo(map)

    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,

        // Methods
        setMap
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
