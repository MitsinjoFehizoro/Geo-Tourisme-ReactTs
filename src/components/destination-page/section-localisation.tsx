import { FunctionComponent } from "react"
import { Destination } from "../../models/destination"
import { stateSupabase } from "../../tools/type"
import LocalisationCard from "./localisation-card"

type Props = {
    destination: Destination | undefined,
    stateSupabase: stateSupabase
}
const SectionLocalisation: FunctionComponent<Props> = ({ destination, stateSupabase }) => {

    return (
        <div className="w-full py-14 px-4 sm:px-8 lg:px-14 flex flex-wrap justify-around items-center bg-white ">
            <div className="w-full md:w-5/12">
                <h1 className="text-2xl lg:text-3xl text-center md:text-left  text-primary mb-2">Localisation</h1>
                <div className="w-full mb-4 md:mb-0">
                    {
                        stateSupabase.isLoading ? (
                            Array.from({ length: 8 }).map((_, index) =>
                                <p className="w-full h-2 mb-4 bg bg-background animate-pulse " key={index} />
                            )
                        ) : (
                            destination && (
                                <div>{destination.localisation}</div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="w-full md:w-6/12 h-96">
                {
                    <div className="relative w-full h-full rounded-xl bg-primary/50 md:bg-background">
                        {
                            stateSupabase.isLoading ? (
                                <div className="w-full h-full bg-secondary/20 absolute top-4 right-4 rounded-xl animate-pulse" />
                            ) : (
                                destination && (
                                    <div className="w-full h-full absolute top-2 md:top-4 right-0 md:right-4 rounded-xl overflow-hidden">
                                        <LocalisationCard coordinates={destination.coordinates} zoom={6} />
                                    </div>
                                )
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default SectionLocalisation