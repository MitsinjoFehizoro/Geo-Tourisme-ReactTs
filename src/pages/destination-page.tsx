import { FunctionComponent, useEffect, useRef } from "react";
import NavigationBar from "../components/navigation/navigation-bar";
import { useLink } from "../hooks/useLink";
import Footer from "../components/footer";
import SectionPresentation from "../components/destination-page/section-presentation";
import SectionLocalisation from "../components/destination-page/section-localisation";
import SectionDispo from "../components/destination-page/section-dispo";
import '../styles/components/_destination-page.scss'
import Program from "../components/destination-page/program";
import Suggestions from "../components/destination-page/suggestions";
import Reservation from "../components/destination-page/reservation";
import { useChoiceDestination } from "../hooks/useChoiceDestination";

const DestinationPage: FunctionComponent = () => {

    const { toggleLinkActif } = useLink()
    const { stateChoiceDestination, destinationChoice } = useChoiceDestination()
    useEffect(() => {
        toggleLinkActif('destination')
    }, [])
    const refOrganisation = useRef<HTMLDivElement>(null)
    const scrollOrganisation = () => {
        refOrganisation.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <NavigationBar />
            <SectionPresentation destination={destinationChoice} stateSupabase={stateChoiceDestination} />
            <SectionLocalisation destination={destinationChoice} stateSupabase={stateChoiceDestination} />
            <SectionDispo destination={destinationChoice} stateSupabase={stateChoiceDestination} scrollOrganisation={scrollOrganisation} />
            {
                destinationChoice && (
                    <div ref={refOrganisation} className="w-full bg-white py-14 px-4 sm:px-8 lg:px-14 flex flex-wrap justify-between">
                        <Program destination={destinationChoice} />
                        <Suggestions destination={destinationChoice} />
                        <Reservation destination={destinationChoice} />
                    </div>
                )
            }

            <Footer color="background" />
        </>
    )
}
export default DestinationPage

