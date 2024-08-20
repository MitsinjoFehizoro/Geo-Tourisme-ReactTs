import { FunctionComponent } from "react";
import { Destination } from "../../models/destination";
import { stateSupabase } from "../../tools/type";
import DescriptionCard from "./description-card";
import SlideGaleries from "./slide-galeries";
import HistoryCard from "./history-card";

type Props = {
    destination: Destination | undefined,
    stateSupabase: stateSupabase
}
const SectionPresentation: FunctionComponent<Props> = ({ destination, stateSupabase }) => {

    return (
        <div className="w-full pb-20 px-4 sm:px-8 lg:px-14">
            <h1 className="text-2xl lg:text-3xl text-center md:text-left text-primary mb-4">Destination geo-touristique</h1>

            <div className="w-full flex flex-wrap justify-between">
                <div className="w-full md:w-7/12 lg:w-5/12 h-96 relative bg-primary/50 md:bg-white rounded-lg ">
                    {
                        stateSupabase.isLoading ? (
                            <div className="w-full h-full absolute top-2 md:top-4 left-0 md:left-4 bg-secondary/20 animate-pulse rounded-xl" />
                        ) : (
                            destination && (
                                <SlideGaleries galeries={destination.galeries} />
                            )
                        )
                    }
                </div>

                <div className="w-full sm:w-5/12 md:w-4/12 lg:w-3/12 mt-10 md:mt-2"><DescriptionCard destination={destination} stateSupabase={stateSupabase} /></div>
                <div className="w-full sm:w-5/12 md:w-4/12 lg:w-3/12 mt-10 md:mt-2"><HistoryCard destination={destination} stateSupabase={stateSupabase} /></div>

            </div>
        </div >
    )
}

export default SectionPresentation