import { FunctionComponent } from "react";
import NavigationBar from "../components/navigation-bar";
import LeftReservationCard from "../components/card/left-reservation-card";

const ReservationPage: FunctionComponent = () => {
    return (
        <>
            < NavigationBar />
            <section className="w-full min-h-[100vh] pt-32 bg-background flex flex-row justify-evenly">
                <LeftReservationCard />
                <ReservationDetail />
            </section>
        </>
    )
}
export default ReservationPage


const ReservationDetail: FunctionComponent = () => {
    return (
        <div className="w-3/6 h-96 bg-white shadow rounded">
            
        </div>
    )
}