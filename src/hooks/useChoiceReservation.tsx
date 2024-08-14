import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import { Reservation } from "../models/reservation"


interface reservationContext {
    reservationChoice: Reservation | null,
    setReservationChoice: (r: Reservation) => void
}

const ReservationContext = createContext<reservationContext>({
    reservationChoice: null,
    setReservationChoice: () => { }
})

export const useChoicieReservation = () => {
    const { reservationChoice, setReservationChoice } = useContext(ReservationContext)
    const handleReservationChoice = (reservation: Reservation) => {
        setReservationChoice(reservation)
    }
    return {
        reservationChoice,
        handleReservationChoice
    }
}

export const ReservationContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [reservationChoice, setReservationChoice] = useState<Reservation | null>(null)
    return (
        <ReservationContext.Provider value={{ reservationChoice: reservationChoice, setReservationChoice: setReservationChoice }}>
            {children}
        </ReservationContext.Provider>
    )
}