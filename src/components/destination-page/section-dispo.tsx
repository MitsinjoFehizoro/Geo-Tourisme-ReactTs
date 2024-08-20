import { FunctionComponent } from "react";
import { stateSupabase } from "../../tools/type";
import { Destination } from "../../models/destination";
import { NavLink } from "react-router-dom";
import DateDispoCard from "./date-dispo-card";

type Props = {
    destination: Destination | undefined,
    stateSupabase: stateSupabase
}
const SectionDispo: FunctionComponent<Props> = ({ destination, stateSupabase }) => {

    return (
        <div className="w-full px-14 pt-14 bg-background relative">
            <h1 className="text-2xl lg:text-3xl text-primary mb-8 text-center">Les dates encores disponibles</h1>

            <div className="w-full flex flex-wrap justify-around ">
                {
                    destination && (
                        destination.organisations.map((organisation, index) => {
                            const color = index % 2 === 0 ? 'primary' : 'secondary';
                            return (
                                <DateDispoCard organisation={organisation} color={color} key={index} />
                            )
                        })
                    )
                }
            </div>


            <div className="absolute top-[-4em] md:top-[-1em] lg:top-[-4em] left-2 rotate-[-55deg] lg:rotate-[-50deg]">
                <div className="w-24 h-4 md:w-44 md:h-6 lg:w-56 lg:h-8 bg-secondary rounded-full mb-2"></div>
                <div className="w-16 h-4 md:w-36 md:h-6 lg:w-44 lg:h-8 bg-primary rounded-full mb-2"></div>
                <div className="w-12 h-4 md:w-28 md:h-6 lg:w-32 lg:h-8 bg-white shadow rounded-full"></div>
            </div>
        </div>
    )

}
export default SectionDispo