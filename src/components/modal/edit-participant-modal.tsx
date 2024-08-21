import { FunctionComponent, useEffect, useState } from "react";
import ReservationForm from "../form/reservation-form";
import { useModal } from "../../hooks/useModal";
import { useUpdateReservation } from "../../supabase/reservations-supabase";
import { useChoicieReservation } from "../../hooks/useChoiceReservation";

const EditParticipantModal: FunctionComponent = () => {
    const { isShowModal, toogleStateShowModal } = useModal()
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    const { stateUpdateReservation, updateReservation } = useUpdateReservation()
    const { reservationChoice } = useChoicieReservation()
    const handleSubmit = () => {
        updateReservation(nbLocaux, nbStranger)
    }
    useEffect(() => {
        if (reservationChoice) {
            setNbLocaux(reservationChoice.local)
            setNbStranger(reservationChoice.stranger)
        }
    }, [reservationChoice])
    return (
        <section className={`${isShowModal ? 'block' : 'hidden'} w-full h-full fixed top-0 left-0 z-30 bg-secondary/50 flex justify-center items-center`}>
            <div className="relative mx-2 w-96 bg-white px-8 pt-12 pb-10 rounded-md">
                <i onClick={toogleStateShowModal} className="fa fa-circle-xmark text-sm absolute top-4 right-8 cursor-pointer hover:text-primary"></i>
                <ReservationForm
                    nbLocaux={nbLocaux}
                    setNbLocaux={setNbLocaux}
                    nbStranger={nbStranger}
                    setNbStranger={setNbStranger}
                    handleSubmit={handleSubmit}
                    stateSupabase={stateUpdateReservation}
                    buttonText="Réserver"
                />
            </div>
        </section>
    )
}
export default EditParticipantModal