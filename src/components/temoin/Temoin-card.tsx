import { FunctionComponent } from "react";
import { Witness } from "../../models/witness";

type Props = {
    witness: Witness
}
const TemoinCard: FunctionComponent<Props> = ({ witness }) => {

    return (
        <div className="w-96 flex flex-col items-center">
            <div className="w-32 h-32 overflow-hidden rounded-full">
                <img src={witness.picture} className="w-auto min-h-32 rounded-full" alt="" />
            </div>
            <p className="text-center my-4">{witness.description}</p>
            <p className="text-secondary font-extrabold mb-12 md:mb-0 uppercase">{witness.author}</p>
        </div>
    )
}
export default TemoinCard