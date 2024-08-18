import { FunctionComponent, useEffect } from "react";
import Accueil from "../components/accueil/accueil";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination";
import WhyUs from "../components/why-us";
import Temoin from "../components/Temoin";
import Contact from "../components/conctact";
import Separation from "../components/separation"
import { useLink } from "../hooks/useLink";
import NavigationBar from "../components/navigation-bar";
const HomePage: FunctionComponent = () => {
    const { keyActif, toggleScrollActif } = useLink()
    useEffect(() => {
        if (keyActif) {
            console.log(keyActif);
            toggleScrollActif(keyActif)
        }
    }, [keyActif])
    return (
        <>
            <NavigationBar />
            <Accueil />
            <Tourisme />
            <Separation />
            <Destination />
            <WhyUs />
            <Temoin />
            <Contact />
        </>
    )
}

export default HomePage