import { FunctionComponent } from "react"
import { useHeightNav } from "../hooks/useHeightNav"
import { destination, stateSupabase } from "../tools/type"
import '../styles/components/_destination-presentation.scss'
import DetailDestinationCard from "./card/detail-destination-card"
import LoadingDetailDestinationCard from "./loading/loading-detail-destination-card"
import OrganistaionDestinationCard from "./card/organisation-destination-card"

type Props = {
    destination: destination | undefined
    stateGetDestination: stateSupabase
}
const DestinationPresentation: FunctionComponent<Props> = ({ destination, stateGetDestination }) => {
    const { heightNav } = useHeightNav()
    return (
        <section style={{ marginTop: heightNav }}>
            <div className="fotsy flex flex-col justify-center">
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <p className="points text-3xl" key={i}>. . . . . . . . . . . . . .</p>
                    ))
                }
            </div>
            <div className="galeries flex flex-row items-center justify-center" >
                {
                    stateGetDestination.isLoading && (
                        <>
                            <div className="img animate-pulse bg-transparent" />
                            <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <LoadingDetailDestinationCard key={index} />
                                    ))
                                }
                            </div>
                        </>
                    )
                }
                {
                    destination && (
                        <>
                            <img src={destination.galeries[0]} alt="" />
                            <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                                <DetailDestinationCard title={destination.title} description={destination.description} />
                                {
                                    destination.history && (
                                        <DetailDestinationCard title="Histoire" description={destination.history} />
                                    )
                                }
                                <DetailDestinationCard title='localisation' description={destination.localisation} />
                                <OrganistaionDestinationCard organisations={destination.organisations} />
                                {
                                    !destination.history && (
                                        <div className="simple opacity-0" />
                                    )
                                }
                            </div>
                        </>
                    )
                }


            </div>
        </section>
    )
}

export default DestinationPresentation

