import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { Reservation } from "../models/reservation"
import { supabase } from "../supabase/supabase-client"


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
    useEffect(() => {
        const realTimeUpdateReservation = supabase.channel('custom-update-reservation-channel')
            .on(
                'postgres_changes',
                { event: 'UPDATE', schema: 'public', table: 'reservations' },
                async (payload) => {
                    const newReservation = payload.new as Reservation
                    try {
                        const { data: dataReservation, error: errorReservation } = await supabase
                            .from('reservations')
                            .select(`*, organisations(*, destinations(*))`)
                            .eq('id', newReservation.id)
                            .single()

                        if (errorReservation) {
                            console.log('realTcustom-update-reservation-channel', errorReservation);
                            return
                        }
                        if (dataReservation) {
                            handleReservationChoice(dataReservation)
                        }
                    } catch (error) {
                        console.log('realTcustom-update-reservation-channel', error);
                    }
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(realTimeUpdateReservation)
        }
    }, [])
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