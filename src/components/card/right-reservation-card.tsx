import { FunctionComponent, useEffect, useState } from "react"
import { i_reservation, reservation_card } from "../../styles/base/tailwind"
import '../../styles/components/card/_right-reservation-card.scss'
import { useChoicieReservation } from "../../hooks/useChoiceReservation"
import { stateSupabase } from "../../tools/type"
import { Reservation } from "../../models/reservation"
import { formatDateMoyen } from "../../tools/format-date"

type Props = {
    stateGetReservations: stateSupabase,
    reservations: Reservation[]
}
const RightReservationCard: FunctionComponent<Props> = ({ stateGetReservations, reservations }) => {
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    const { reservationChoice, handleReservationChoice } = useChoicieReservation()
    useEffect(() => {
        if (!reservationChoice && reservations.length > 0) {
            handleReservationChoice(reservations[0])
        }
    }, [reservations])
    return (
        <section className="w-3/6">
            <div className="w-full p-12 bg-white shadow rounded">
                <div className="flex flex-row justify-between">
                    <div className="w-1/2 pr-4">
                        <p className="text-sm">Nous allons à</p>
                        {
                            stateGetReservations.isLoading ? (
                                <h1 className="w-2/3 h-3 bg-background animate-pulse my-2" />
                            ) : (
                                <h1 className="text-xl text-secondary capitalize">{reservationChoice?.organisations.destinations.title}</h1>
                            )
                        }
                    </div>
                    <div className="w-1/2 text-right">
                        <p className="text-sm">Pendant 5 jours, le :</p>
                        {
                            stateGetReservations.isLoading ? (
                                <h1 className="w-full h-3 bg-background animate-pulse my-2" />
                            ) : (
                                reservationChoice && (
                                    <h1 className="text-sm text-secondary capitalize">
                                        <span>{formatDateMoyen(reservationChoice.organisations.start)}</span> -
                                        <span>{formatDateMoyen(reservationChoice.organisations.end)}</span>
                                    </h1>
                                )
                            )
                        }
                    </div>
                </div>
                <Separation />
                <div>
                    <h1 className="text-primary mb-2">Concernant notre destination</h1>
                    {
                        stateGetReservations.isLoading ? (
                            Array.from({ length: 4 }).map((_, index) =>
                                <p key={index} className="w-full h-2 my-4 bg-background animate-pulse" />
                            )
                        ) : (
                            <p className="text-sm">{reservationChoice?.organisations.destinations.description}</p>
                        )
                    }
                </div>
                <Separation />
                <table className="rightTable w-full text-left text-sm">
                    <thead>
                        <tr>
                            <th className="text-primary text-base">Participants</th>
                            <th className="text-sm text-secondary">Montant / personne</th>
                            <th className="text-sm text-secondary">Total</th>
                        </tr>
                    </thead>
                    {
                        stateGetReservations.isLoading ? (
                            <LoadingTbody />
                        ) : (
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                            <i onClick={() => setNbLocaux(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                            <p className="text-center mt-1 pb-1">{nbLocaux} locaux</p>
                                            <i onClick={() => setNbLocaux(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                                        </div>
                                    </td>
                                    <td>500 000 Ariary</td>
                                    <td>1 000 000 Ariary</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                            <i onClick={() => setNbStranger(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                            <p className="text-center mt-1 pb-1">{nbStranger} étrangers</p>
                                            <i onClick={() => setNbStranger(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                                        </div>
                                    </td>
                                    <td>500 000 Ariary</td>
                                    <td>1 000 000 Ariary</td>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
                <Separation />
                <div className="flex items-center justify-between">
                    <h1 className="text-primary">Montant à payer</h1>
                    <p className="text-secondary text-sm">1 800 000 Ariary</p>
                </div>
                <Separation />
                <div className="flex items-center justify-between">
                    <h1 className="text-primary">Paiement effectué</h1>
                    <p className="text-secondary text-sm">0 Ariary <span className="ml-1">(0%)</span></p>
                </div>
                <Separation />
                <div className="flex items-center justify-between">
                    <h1 className="text-primary">Status de la réservation</h1>
                    <p className="text-white text-sm px-4 pb-[1px] rounded-lg bg-yellow-400">encours</p>
                </div>
            </div>
            <div className={`p-4 my-4 flex justify-end  ${reservation_card}`}>
                <button className="py-2 px-8 bg-red-400 text-white rounded-md flex items-center text-sm hover:-rotate-2 transition ease-in">
                    <i className="fa fa-circle-xmark mr-1 pb-[1.5px]"></i>
                    <p>Annuler</p>
                </button>
                <p className="mx-2" />
                <button className="py-2 px-8 bg-green-400 text-white rounded-md flex items-center text-sm hover:-rotate-2 transition ease-in">
                    <i className="fa fa-circle-check mr-1 pb-[1.5px]"></i>
                    <p>Confirmer</p>
                </button>
            </div>
            <div className="py-4 px-12 text-sm bg-red-100 border-[1px] border-red-500 rounded">
                Votre réservation est encore <Encours />. Veuillez la <Confirme /> et effectuer un paiement de 50%, soit 800 000 Ariary, avant le jeudi 17 août 2024.
            </div>

        </section>

    )
}

export default RightReservationCard

const Separation = () => {
    return (
        <div className="my-6 w-full h-[1px] bg-background" />
    )
}
const Encours: FunctionComponent = () => {
    return (
        <span className="px-1 mx-1 rounded-md bg-yellow-400 text-xs text-white">encours</span>
    )
}
const Confirme: FunctionComponent = () => {
    return (
        <span className="px-1 mx-1 rounded-md bg-green-400 text-xs text-white">confirmé</span>
    )
}
const LoadingTbody: FunctionComponent = () => {
    return (
        <tbody className="animate-pulse">
            {
                Array.from({ length: 2 }).map((_, index) =>
                    <tr key={index}>
                        <td className="py-1">
                            <div className="bg-background w-full h-8" />
                        </td>
                        <td>
                            <div className="w-full flex justify-end">
                                <p className="bg-background w-2/3 h-2" />
                            </div>
                        </td>
                        <td>
                            <div className="w-full flex justify-end">
                                <p className="bg-background w-2/3 h-2" />
                            </div>
                        </td>
                    </tr>
                )
            }
        </tbody>
    )
}