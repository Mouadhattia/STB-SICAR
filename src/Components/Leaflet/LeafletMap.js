import React from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import'./App.css'
import  L from "leaflet"



const center = [36.842055862899734, 10.201171869055061]
const markerIcon = new L.Icon({
  iconUrl: require("./marker_STB_SICAR.png"),
  iconSize: [35,45],
  iconAnchor:[17,46],
  popupAnchor: [0, -46],
})

const LeafletMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{width:'80vw' , height:'50vh', margin:"auto"}}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=P1KwtCHQfMDGSMh9Rrhj"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker position={[36.842055862899734, 10.201171869055061]} icon={markerIcon}>
        <Popup>
          <b style={{color:"red"}}>STB-SICAR</b>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap
