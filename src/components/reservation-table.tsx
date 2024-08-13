import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/_reservation-table.scss'
import { reservation_card } from "../styles/base/tailwind";

const ReservationTable: FunctionComponent = () => {
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
                <tbody >
                    <tr>
                        <td>
                            15/08/2024 - 22/08/2024
                        </td>
                        <td>Andrigitra nord-est</td>
                        <td>
                            <span className="px-1 rounded-md bg-yellow-400 text-xs text-white">encours</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15/08/2024 - 22/08/2024
                        </td>
                        <td>Andrigitra nord-est</td>
                        <td>
                            <span className="px-1 rounded-md bg-green-400 text-xs text-white">confirmé</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15/08/2024 - 22/08/2024
                        </td>
                        <td>Andrigitra nord-est</td>
                        <td>
                            <span className="px-1 rounded-md bg-yellow-400 text-xs text-white">encours</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15/08/2024 - 22/08/2024
                        </td>
                        <td>Andrigitra nord-est</td>
                        <td>
                            <span className="px-1 rounded-md bg-green-400 text-xs text-white">confirmé</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReservationTable