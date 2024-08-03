import { FunctionComponent } from "react";
import ProgramCard from "./card/program-card";
import { destination } from "../tools/type";

type Props = {
    destination: destination
}
const ProgramDestination: FunctionComponent<Props> = ({ destination }) => {

    return (
        <section className="bg-white my-8 flex justify-around">
            <ProgramCard destination={destination} />
        </section>
    )
}

export default ProgramDestination