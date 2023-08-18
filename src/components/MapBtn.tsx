import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const MapBtn = () => {
  const { isMapReady, map } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  //   Go to selected place
  const onClick = () => {
    if (!isMapReady) throw new Error("Map is not ready");
    if (!userLocation) throw new Error("Couldn't get location");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn"
      onClick={onClick}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 999,
        borderRadius: 100,
        background: "white",
        border: "1px solid #cccc",
      }}
    >
      <i className="fa-solid fa-location-crosshairs"></i>
    </button>
  );
};
