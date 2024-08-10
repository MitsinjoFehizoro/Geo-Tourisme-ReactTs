import { FunctionComponent, useEffect } from "react";
import Accueil from "../components/accueil";
import Tourisme from "../components/tourisme";
import Destination from "../components/destination";
import WhyUs from "../components/why-us";
import Temoin from "../components/Temoin";
import Contact from "../components/conctact";
import Separation from "../components/separation";
import NavigationBar from "../components/navigation-bar";
import { supabase } from "../supabase/supabase-client";
import { useNavigate, useSearchParams } from "react-router-dom";
const Home: FunctionComponent = () => {
    // const navigate = useNavigate()
    // const auth = async () => {
    //     const { data: { user }, error } = await supabase.auth.getUser()
    //     const { data: session, error: errorSession } = await supabase.auth.getSession()
    //     if (error) navigate('/')
    //     console.log(error);
    // }
    // useEffect(() => {
    //     auth()
    // }, [])


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