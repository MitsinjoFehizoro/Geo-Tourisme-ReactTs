import { FunctionComponent } from "react";
import Accueil from "../components/accueil";
import NavigationBar from "../components/navigation-bar";

const Home: FunctionComponent = () => {

    return (
        <>
            <NavigationBar />
            <Accueil />
        </>
    )
}

export default Home