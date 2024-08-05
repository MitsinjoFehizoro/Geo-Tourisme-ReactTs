import { FunctionComponent } from "react";
import { destination } from "../tools/type";
import Program from "./program";
import Suggestion from "./suggestion";

type Props = {
    destination: destination
}
const ProgramDestination: FunctionComponent<Props> = ({ destination }) => {

    return (
        <section className="bg-white my-8 flex flex-row justify-around">
            <div className="w-96"><Program destination={destination} /></div>
            <div className="w-96"><Suggestion destination={destination} /></div>
            <div className="w-96"></div>
        </section>
    )
}

export default ProgramDestination