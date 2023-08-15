import { useReducer, useEffect } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { searchApi } from "../../apis";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((coords) => {
      dispatch({ type: "setUserLocation", payload: coords });
    });
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) return [];
    if (!state.userLocation) throw new Error("No user location");

    const resp = await searchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });

    console.log(resp.data);
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,

        // Methods
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
