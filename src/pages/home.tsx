import { FunctionComponent, useState } from "react";
import Accueil from "../components/accueil";
import NavigationBar from "../components/navigation-bar";

const Home: FunctionComponent = () => {
    const [height, setHeight] = useState<number>(0)
    const handleHeight = (h: number) => {
        setHeight(h)
    }
    return (
        <>
            <NavigationBar onHeightChange={handleHeight} />
            <Accueil heightNavigationBar={height} />
        </>
    )
}

export default Home