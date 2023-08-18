import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoic3RlZmFub2N1dHJpIiwiYSI6ImNsbGIwMnN5cTAyOGozanBodmJhaWh2ZnQifQ.72s-LT2FM59dwJthpotr4w",
  },
});

export default searchApi;
