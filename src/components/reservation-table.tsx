import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/_reservation-table.scss'
import { reservation_card } from "../styles/base/tailwind";
import { Reservation } from "../models/reservation";
import { stateSupabase } from "../tools/type";
import { formatDateSimple } from "../tools/format-date";

type Props = {
    stateGetReservations: stateSupabase,
    reservations: Reservation[]
}
const ReservationTable: FunctionComponent<Props> = ({ stateGetReservations, reservations }) => {
    return (
        <div className={`reservationTable ${reservation_card}`}>
            <div className="p-4 pl-6 flex flex-row justify-between items-center">
                <h1 className="text-sm text-secondary uppercase">vos reservations</h1>
                <NavLink to='' className='text-xs text-primary capitalize px-6 py-1 border-2 border-primary rounded-full' >
                    annulation
                </NavLink>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Destination</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                {
                    stateGetReservations.isLoading && (
                        <LoadingTbody />
                    )
                }
                {
                    reservations && (
                        <tbody >
                            {
                                reservations.map((reservation, index) =>
                                    <tr key={index}>
                                        <td>
                                            <span>{formatDateSimple(reservation.organisations.start)}</span> -  <span>{formatDateSimple(reservation.organisations.end)}</span>
                                        </td>
                                        <td className="capitalize">{reservation.organisations.destinations.title}</td>
                                        <td>
                                            <span className="px-1 rounded-md bg-yellow-400 text-xs text-white">{reservation.state}</span>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    )
                }
            </table>
        </div>
    )
}

export default ReservationTable

const LoadingTbody = () => {
    return (
        <tbody className="animate-pulse">
            {
                Array.from({ length: 4 }).map((_, index) =>
                    <tr key={index}>
                        <td><p className="w-full h-2 bg-background my-2" /></td>
                        <td><p className="w-full h-2 bg-background my-2" /></td>
                        <td><p className="w-full h-2 bg-background my-2" /></td>
                    </tr>
                )
            }
        </tbody>
    )
}