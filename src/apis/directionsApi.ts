import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic3RlZmFub2N1dHJpIiwiYSI6ImNsbGIwMnN5cTAyOGozanBodmJhaWh2ZnQifQ.72s-LT2FM59dwJthpotr4w'
    }
})

export default directionsApi;