import { FunctionComponent } from "react";
import { reservation_card } from "../../styles/base/tailwind";
import ReservationTable from "./reservation-table";
import { stateSupabase } from "../../tools/type";
import { Reservation } from "../../models/reservation";
import { LoadingReservationNumber, ReservationNumber } from "./reservation-number";

type Props = {
    stateGetReservations: stateSupabase,
    reservations: Reservation[]
}
const LeftReservationCard: FunctionComponent<Props> = ({ stateGetReservations, reservations }) => {

    const reservationEncours = () => {
        return ({
            state: 'encours',
            number: reservations.filter(reservation => reservation.state === 'encours').length
        })
    }
    const reservationConfirmed = () => {
        return ({
            state: 'confirmés',
            number: reservations.filter(reservation => reservation.state === 'confirmé').length
        })
    }
    return (
        <div className="w-full sm:w-10/12 lg:w-5/12 mb-14">
            <div className="mb-6">
                <h1 className="mb-2 text-2xl text-secondary">Gestion de réservations</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus facere sequi, odit obcaecati voluptates rem quam!
                </p>
            </div>
            <div className={`py-4 mb-4 flex flex-row ${reservation_card}`}>
                {
                    stateGetReservations.isLoading && (
                        <>
                            <LoadingReservationNumber />
                            <LoadingReservationNumber />
                        </>
                    )
                }
                {
                    reservations.length > 0 && (
                        <>
                            <ReservationNumber reservationFunction={reservationEncours} />
                            <ReservationNumber reservationFunction={reservationConfirmed} />
                        </>

                    )
                }

            </div>
            <ReservationTable stateGetReservations={stateGetReservations} reservations={reservations} />
        </div>
    )
}
export default LeftReservationCard