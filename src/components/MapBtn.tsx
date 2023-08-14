import {useContext} from 'react';
import {  } from '../context/map/MapReducer';
import { MapContext, PlacesContext } from '../context';
export const MapBtn = () => {

    const {isMapReady, map} = useContext(MapContext)
    const {userLocation} = useContext(PlacesContext)

    const onClick = () => { 
        if (!isMapReady) throw new Error('Map is not ready')
        if (!userLocation) throw new Error("Couldn't get location")

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
     }

  return (
    <button className="btn" onClick={onClick} style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
        borderRadius: 100,
        background: 'white',
        
    }}>
        <i className="fa-solid fa-location-crosshairs"></i>
    </button>
  )
}
