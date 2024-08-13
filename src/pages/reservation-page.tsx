import { FunctionComponent } from "react";
import NavigationBar from "../components/navigation-bar";
import LeftReservationCard from "../components/card/left-reservation-card";
import RightReservationCard from "../components/card/right-reservation-card";

const ReservationPage: FunctionComponent = () => {
    return (
        <>
            <NavigationBar />
            <section className="w-full min-h-[100vh] py-32 bg-background flex flex-row justify-evenly">
                <LeftReservationCard />
                <RightReservationCard />
            </section>
        </>
    )
}
export default ReservationPage

