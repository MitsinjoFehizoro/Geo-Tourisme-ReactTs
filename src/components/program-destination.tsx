import { FunctionComponent } from "react";
import { destination } from "../tools/type";
import Program from "./program";

type Props = {
    destination: destination
}
const ProgramDestination: FunctionComponent<Props> = ({ destination }) => {

    return (
        <section className="bg-white my-8 flex justify-around">
            <Program destination={destination} />
        </section>
    )
}

export default ProgramDestination