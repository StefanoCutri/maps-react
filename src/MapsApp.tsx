import { PlacesProvider } from './context'
import { HomeScreen } from './screens'
import './styles.css'

if (!navigator.geolocation) {
    alert("No geolocation allowed")
    throw new Error("No geolocation allowed")
}

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <HomeScreen/>
    </PlacesProvider>
  )
}
