import { FunctionComponent } from "react"

type Props = {
    reservationFunction: () => { state: string, number: number }
}
export const ReservationNumber: FunctionComponent<Props> = ({ reservationFunction }) => {
    const { state, number } = reservationFunction()
    return (
        <div className="w-1/2 relative border-x-[.5px] border-background flex flex-col justify-center items-center">
            <h1 className="text-2xl">{number}</h1>
            <p className="text-xs text-center capitalize leading-tight">reservations <br /> {state}</p>
        </div>
    )
}

export const LoadingReservationNumber = () => {
    return (
        <div className="animate-pulse w-1/2 relative border-x-[.5px] border-background flex flex-col justify-center items-center">
            <h1 className="w-3 h-6 bg-background" />
            <p className="w-2/6 h-2 bg-background mb-2 mt-2" />
            <p className="w-1/6 h-2 bg-background mb-1" />
        </div>
    )
}