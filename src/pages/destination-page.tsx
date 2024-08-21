import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDestinationById } from "../supabase/destinations-supabase";
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

const DestinationPage: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>()
    const { toggleLinkActif } = useLink()
    const { stateGetDestination, getDestination, destination } = useGetDestinationById()
    useEffect(() => {
        toggleLinkActif('destination')
        if (id) {
            getDestination(id)
        }
    }, [])



    return (
        <>
            <NavigationBar />
            <SectionPresentation destination={destination} stateSupabase={stateGetDestination} />
            <SectionLocalisation destination={destination} stateSupabase={stateGetDestination} />
            <SectionDispo destination={destination} stateSupabase={stateGetDestination} />
            {
                destination && (
                    <div className="w-full bg-white py-14 px-4 sm:px-8 lg:px-14 flex flex-wrap justify-between">
                        <Program destination={destination} />
                        <Suggestions destination={destination} />
                        <Reservation destination={destination} />
                    </div>
                )
            }

            <Footer color="background" />
        </>
    )
}
export default DestinationPage

