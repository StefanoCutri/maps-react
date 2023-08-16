import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";
import { LoadingPlaces } from "./";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext);
  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  const onPlaceClick = (place: Feature) => {
    const [lng, lnt] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lnt],
    });
  };

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li key={place.id} className="list-group-item list-group-item-action" onClick={() => onPlaceClick(place)}>
          <h6>{place.text_es}</h6>
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>

          <button className="btn btn-outline-primary btn-sm">
            <i className="fa-solid fa-diamond-turn-right"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};
