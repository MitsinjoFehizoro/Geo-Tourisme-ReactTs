import { FunctionComponent, RefObject, useRef, useState } from "react";
import Accueil from "../components/accueil";
import NavigationBar from "../components/navigation-bar";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination";
import WhyUs from "../components/why-us";
import Temoin from "../components/Temoin";
import Contact from "../components/conctact";
import Separation from "../components/separation";

const Home: FunctionComponent = () => {
    const [height, setHeight] = useState<number>(0)
    const handleHeight = (h: number) => {
        setHeight(h)
    }

    const refAccueil = useRef(null)
    const refTourisme = useRef(null)
    const refDestination = useRef(null)
    const refApropos = useRef(null)
    const refContact = useRef(null)

    const refs: { [key: string]: RefObject<HTMLDivElement> } = {
        accueil: refAccueil,
        tourisme: refTourisme,
        destination: refDestination,
        apropos: refApropos,
        contact: refContact
    }

    return (
        <>
            <NavigationBar refs={refs} onHeightChange={handleHeight} />
            <Accueil ref={refs.accueil} heightNavigationBar={height} />
            <Tourisme ref={refs.tourisme} />
            <Separation />
            <Destination ref={refs.destination} />
            <WhyUs ref={refs.apropos} />
            <Temoin />
            <Contact ref={refs.contact} />
        </>
    )
}

export default Home