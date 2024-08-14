import { FunctionComponent, useEffect } from "react";
import NavigationBar from "../components/navigation-bar";
import LeftReservationCard from "../components/card/left-reservation-card";
import RightReservationCard from "../components/card/right-reservation-card";
import { useGetReservations } from "../supabase/reservations-supabase";
import { useAuth } from "../hooks/useAuth";

const ReservationPage: FunctionComponent = () => {
    const { isAuth } = useAuth()
    const { stateGetReservations, reservations, getReservations } = useGetReservations()
    useEffect(() => {
        if (isAuth) {
            getReservations()
        }
    }, [isAuth])
    

    return (
        <>
            <NavigationBar />
            <section className="w-full min-h-[100vh] pt-32 pb-16 bg-background flex flex-row justify-evenly">
                <LeftReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
                <RightReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
            </section>
            <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around  bg-white shadow">
                <p className="text-sm text-secondary"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </>
    )
}
export default ReservationPage

