import { FunctionComponent } from "react";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {
    coordinates: number[]
}
const LocalisationCard: FunctionComponent<Props> = ({ coordinates }) => {
    return (
        <MapContainer center={[coordinates[0], coordinates[1]]} zoom={13} className="w-full h-96" >
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