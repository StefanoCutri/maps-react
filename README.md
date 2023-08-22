# React Maps App

### MapsApp is a React.js application that utilizes the Mapbox package to provide users with an interactive map experience. The application allows users to view their current location on the map, search for specific places, and plot a polyline to a chosen destination.

## Screenshots 📷
![image](https://github.com/StefanoCutri/maps-react/assets/69378136/79b1567d-07d8-42a8-8e8c-ef7128ac661d)
![image](https://github.com/StefanoCutri/maps-react/assets/69378136/78c8fa73-6cf2-4029-bdb4-262f1ea3ae66)
![image](https://github.com/StefanoCutri/maps-react/assets/69378136/7384a210-2a98-4432-82e6-d1be0c90cf40)

## Demo

You can check out the live website at [maps-app](https://maps-react-flax.vercel.app/).

## Features

- Display user's current location on the map.
- Search for specific places using Mapbox's search functionality.
- Plot a polyline route from the user's location to the selected destination.
- Interactive map with zoom and pan capabilities.

## Installation

1. Clone this repository: `git clone https://github.com/your-username/map-app.git`
2. Navigate to the project directory: `cd map-app`
3. Install the dependencies: `npm install`

## Configuration
To use MapApp, you'll need to provide your own Mapbox API key. Follow these steps:

1. Visit the [Mapbox](https://www.mapbox.com/) website and sign up for an account.
2. Create a new Mapbox access token in your Mapbox account dashboard.
3. In the src directory of the project, create a file named .env.local.
4. Inside the .env.local file, add your Mapbox access token:
`
REACT_APP_MAPBOX_TOKEN=your-access-token
`

## Usage

1. Run the development server:
`
npm start
`
2. Open your web browser and navigate to http://localhost:3000 to access MapApp.
3. MapApp will display your current location on the map. You can use the search bar to find specific places. Once you've selected a destination, click the "Plot Route" button to draw a polyline from your location to the destination.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code for your own portfolio website.
