import { FunctionComponent, useState } from "react";
import ContainerDestinationCard from "./container-destination-card";
import { Destination } from "../../models/destination";
import LocalisationCard from "./localisation-card";

type Props = {
    destination: Destination
}
const LocalisationDestinationCard: FunctionComponent<Props> = ({ destination }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <ContainerDestinationCard title="localisation" simpleMode={simpleMode} setSimpleMode={setSimpleMode}>
            <div className="w-full h-full pb-8 flex">
                {
                    simpleMode ? (
                        <LocalisationCard coordinates={destination.coordinates} zoom={4} />
                    ) : (
                        <>
                            <div className="w-1/3 text-sm pr-2">{destination.localisation}</div>
                            <div className="w-2/3">
                                <LocalisationCard coordinates={destination.coordinates} zoom={13} />
                            </div>
                        </>
                    )
                }
            </div >
        </ContainerDestinationCard >
    )
}
export default LocalisationDestinationCard
