import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { LoadingPlaces } from "./";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  const getRoutes = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lnt] = place.center
    getRouteBetweenPoints(userLocation, [lng, lnt] );
  };

  const onPlaceClick = (place: Feature) => {
    setActiveId(place.id);

    const [lng, lnt] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lnt],
    });
  };

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id && "active"
          }`}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            className={`${activeId === place.id ? "" : "text-muted"}`}
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>

          <button
          onClick={() => getRoutes(place)}
            className={`btn  btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            <i className="fa-solid fa-diamond-turn-right"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};
