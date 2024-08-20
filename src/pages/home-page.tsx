import { FunctionComponent, useEffect } from "react";
import Accueil from "../components/accueil/accueil";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination/destination";
import Temoin from "../components/temoin/Temoin";
import Contact from "../components/contact/conctact";
import Separation from "../components/separation"
import { useLink } from "../hooks/useLink";
import NavigationBar from "../components/navigation/navigation-bar";
import WhyUs from "../components/temoin/why-us/why-us";
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