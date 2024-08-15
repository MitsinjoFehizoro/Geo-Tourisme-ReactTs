import { FunctionComponent } from "react";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {
    coordinates: number[],
    zoom: number
}
const LocalisationCard: FunctionComponent<Props> = ({ coordinates, zoom }) => {
    return (
        <MapContainer center={[coordinates[0], coordinates[1]]} zoom={zoom} className="w-full h-full z-0" >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[coordinates[0], coordinates[1]]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default LocalisationCard