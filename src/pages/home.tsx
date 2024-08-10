import { FunctionComponent, useEffect } from "react";
import Accueil from "../components/accueil";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination";
import WhyUs from "../components/why-us";
import Temoin from "../components/Temoin";
import Contact from "../components/conctact";
import Separation from "../components/separation";
import NavigationBar from "../components/navigation-bar";
import { useAuth } from "../hooks/useAuth";
const Home: FunctionComponent = () => {
    const { authentication } = useAuth()
    useEffect(() => {
        authentication()
    }, [])
    return (
        <>
            <NavigationBar />
            <Accueil />
            <Tourisme />
            <Separation />
            <Destination />
            <WhyUs />
            <Temoin />
            {/* <Contact /> */}
        </>
    )
}

export default Home