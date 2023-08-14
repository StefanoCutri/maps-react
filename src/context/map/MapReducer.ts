import { Map } from "mapbox-gl"

import { MapState } from "./MapProvider"

type MapAction = {
    type: 'setMap',
    payload: Map
}

export const MapReducer = (state: MapState, action: MapAction) => {
switch (action.type) {
    case 'setMap':
        return{
            ...state,
            isMapReady: false,
            map: action.payload
        }
    default:
        return state;
}
}