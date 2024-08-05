import { FunctionComponent } from "react";
import { destination } from "../tools/type";
import TitleProgramCard from "./card/title-program-card";

type Props = {
    destination: destination
}
const Reservation: FunctionComponent<Props> = ({ destination }) => {
    return (
        <div className="w-full">
            <TitleProgramCard title="Reservons-le :" destination={destination}/>
        </div>
    )
}
export default Reservation