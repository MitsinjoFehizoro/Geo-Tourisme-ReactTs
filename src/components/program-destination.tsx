import { FunctionComponent } from "react";
import Program from "./program";
import Suggestion from "./suggestion";
import Reservation from "./reservation";
import { Destination } from "../models/destination";

type Props = {
    destination: Destination
}
const ProgramDestination: FunctionComponent<Props> = ({ destination }) => {

    return (
        <section className="bg-white my-8 flex flex-row justify-around">
            <div className="w-96"><Program destination={destination} /></div>
            <div className="w-96"><Suggestion destination={destination} /></div>
            {/* <div className="w-96"><Reservation destination={destination}/></div> */}
        </section>
    )
}

export default ProgramDestination