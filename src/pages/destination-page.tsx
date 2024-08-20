import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDestinationById } from "../supabase/destinations-supabase";
import NavigationBar from "../components/navigation/navigation-bar";
import { useLink } from "../hooks/useLink";
import Footer from "../components/footer";
import SectionPresentation from "../components/destination-page/section-presentation";
import SectionLocalisation from "../components/destination-page/section-localisation";
import SectionDispo from "../components/destination-page/section-dispo";
import { useHeightNav } from "../hooks/useHeightNav";
import '../styles/components/_destination-page.scss'
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
    const { heightNav } = useHeightNav()
    return (
        <>
            <NavigationBar />
            <section className="w-full bg-background pb-14" style={{ paddingTop: 40 + heightNav }}>
                <SectionPresentation destination={destination} stateSupabase={stateGetDestination} />
                <SectionLocalisation destination={destination} stateSupabase={stateGetDestination} />
                <SectionDispo destination={destination} stateSupabase={stateGetDestination} />
            </section>
            <Footer />
        </>
    )
}
export default DestinationPage

