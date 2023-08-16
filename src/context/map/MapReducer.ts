import { Map, Marker } from "mapbox-gl";

import { MapState } from "./MapProvider";

type MapAction =
  | {
      type: "setMap";
      payload: Map;
    }
  | {
      type: "setMarker";
      payload: Marker[];
    };

export const MapReducer = (state: MapState, action: MapAction) => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };
      case 'setMarker':
        return {
            ...state,
            markers: action.payload
        }
    default:
      return state;
  }
};
