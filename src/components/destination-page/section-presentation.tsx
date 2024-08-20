import { FunctionComponent } from "react";
import { Destination } from "../../models/destination";
import { stateSupabase } from "../../tools/type";
import DescriptionCard from "./description-card";
import SlideGaleries from "./slide-galeries";

type Props = {
    destination: Destination | undefined,
    stateSupabase: stateSupabase
}
const SectionPresentation: FunctionComponent<Props> = ({ destination, stateSupabase }) => {

    return (
        <div className="w-full px-14 pb-20">
            <h1 className="text-2xl lg:text-3xl text-primary mb-2">Destination geo-touristique</h1>
            <div className="flex justify-between items-end">
                <div className="w-5/12">
                    <div className="w-96 h-96 relative bg-white rounded-lg">
                        {
                            stateSupabase.isLoading ? (
                                <div className="w-full h-full absolute top-4 left-4 bg-secondary/20 animate-pulse rounded-xl" />
                            ) : (
                                destination && (
                                    <SlideGaleries galeries={destination.galeries} />
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex justify-between w-6/12">
                    <DescriptionCard destination={destination} stateSupabase={stateSupabase} />
                    <DescriptionCard destination={destination} stateSupabase={stateSupabase} />
                </div>
            </div>
        </div>
    )
}

export default SectionPresentation