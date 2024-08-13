import { FunctionComponent } from "react";
import ReservationNumber from "../reservation-number";
import { reservation_card } from "../../styles/base/tailwind";
import ReservationTable from "../reservation-table";

const LeftReservationCard: FunctionComponent = () => {
    return (
        <div className="w-2/6">
            <div className="mb-6">
                <h1 className="mb-2 text-2xl text-secondary">Gestion de réservations</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus facere sequi, odit obcaecati voluptates rem quam!
                </p>
            </div>
            <div className={`py-4 mb-4 flex flex-row ${reservation_card}`}>
                <ReservationNumber />
                <ReservationNumber />
                <ReservationNumber />
            </div>
            <ReservationTable />
        </div>
    )
}
export default LeftReservationCard