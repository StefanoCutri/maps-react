import { Map } from "mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
    isMapReady: boolean;
    map?: Map,
    setMap: (map: Map) => void;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps )