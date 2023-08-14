import { MapBtn, MapView, SearchBar } from "../components"

export const HomeScreen = () => {
  return (
    <div className='justify-content-center aling-items-center'>
      <MapView/>
      <MapBtn/>
      <SearchBar />
    </div>
  )
}
