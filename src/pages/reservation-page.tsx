import { FunctionComponent } from "react";
import NavigationBar from "../components/navigation-bar";
import LeftReservationCard from "../components/card/left-reservation-card";
import RightReservationCard from "../components/card/right-reservation-card";

const ReservationPage: FunctionComponent = () => {
    return (
        <>
            <NavigationBar />
            <section className="w-full min-h-[100vh] pt-32 pb-16 bg-background flex flex-row justify-evenly">
                <LeftReservationCard />
                <RightReservationCard />
            </section>
            <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around  bg-white shadow">
                <p className="text-sm text-secondary"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </>
    )
}
export default ReservationPage

