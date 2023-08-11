import { PlacesProvider } from './context'

if (!navigator.geolocation) {
    alert("No geolocation allowed")
    throw new Error("No geolocation allowed")
}

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <h1>Hello</h1>
    </PlacesProvider>
  )
}
