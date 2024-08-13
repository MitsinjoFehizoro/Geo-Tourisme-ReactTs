import { FunctionComponent, PropsWithChildren } from "react";
import NavigationBar from "../components/navigation-bar";
import ReservationTable from "../components/reservation-table";

const ReservationPage: FunctionComponent = () => {
    return (
        <>
            < NavigationBar />
            <section className="w-full min-h-[100vh] pt-32 bg-background flex flex-row justify-around">
                <div className="w-2/6">
                    <div className="mb-6">
                        <h1 className="mb-2 text-2xl text-secondary">Gestion de réservations</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus facere sequi, odit obcaecati voluptates rem quam!
                        </p>
                    </div>
                    <ReservationCard>
                        <div className="py-4 flex flex-row">
                            <ReservationNumber />
                            <ReservationNumber />
                            <ReservationNumber />
                        </div>
                    </ReservationCard>
                    <div className="w-full h-4" />
                    <ReservationCard>
                       <ReservationTable/>
                    </ReservationCard>
                </div>
                <div className="w-3/6">

                </div>
            </section>
        </>
    )
}
export default ReservationPage

const ReservationNumber = () => {
    return (
        <div className="w-1/3 relative border-x-[.5px] border-background flex flex-col justify-center items-center">
            <h1 className="text-2xl">5</h1>
            <p className="text-xs text-center capitalize leading-tight">reservations <br /> encours</p>
        </div>
    )
}

const ReservationCard: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-white w-full shadow">
            {children}
        </div>
    )
}