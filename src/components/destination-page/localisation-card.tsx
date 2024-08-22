import { FunctionComponent } from "react";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
type Props = {
    coordinates: number[],
    zoom: number
}
const LocalisationCard: FunctionComponent<Props> = ({ coordinates, zoom }) => {
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    return (
        <MapContainer center={[coordinates[0], coordinates[1]]} zoom={zoom} className="w-full h-full z-0" >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[coordinates[0], coordinates[1]]} icon={customIcon}>
                <Popup>
                    {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default LocalisationCard