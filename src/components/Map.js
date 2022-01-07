import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer} from 'react-leaflet'

const MyMap = () => {
    const position = [13, 100]
    return (
        <div>
           {/* <h1>55555555</h1> */}
           <MapContainer
           style={{height:'95vh'}} center={position} zoom={6} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  
  </MapContainer>
        </div>
    )
}

export default MyMap
