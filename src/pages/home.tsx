import { FunctionComponent, useState } from "react";
import Accueil from "../components/accueil";
import NavigationBar from "../components/navigation-bar";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination";
import WhyUs from "../components/why-us";

const Home: FunctionComponent = () => {
    const [height, setHeight] = useState<number>(0)
    const handleHeight = (h: number) => {
        setHeight(h)
    }
    return (
        <>
            <NavigationBar onHeightChange={handleHeight} />
            <Accueil heightNavigationBar={height} />
            <Tourisme />
            <Destination />
            <WhyUs />
        </>
    )
}

export default Home