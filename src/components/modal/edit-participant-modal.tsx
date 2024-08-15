import { FunctionComponent, useState } from "react";
import ReservationForm from "../form/reservation-form";
import { useAuth } from "../../hooks/useAuth";
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation";
import { useCreateReservation } from "../../supabase/reservations-supabase";

const EditParticipantModal: FunctionComponent = () => {
    const { clientAuth } = useAuth()
    const { organisationChoice } = useChoiceOrganisation()
    const { stateCreateReservation, createReservation } = useCreateReservation()
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    const handleSubmit = () => {
        createReservation(
            nbLocaux,
            nbStranger,
            setNbLocaux,
            setNbStranger,
            organisationChoice,
            clientAuth,
        )
    }
    return (
        <section className="w-full h-full fixed top-0 left-0 z-30 bg-secondary/50 flex justify-center items-center">
            <div className="relative w-96 bg-white px-8 pt-12 pb-10 rounded-md">
                <i className="fa fa-circle-xmark text-sm absolute top-4 right-8 cursor-pointer hover:text-red-400"></i>
                <ReservationForm
                    nbLocaux={nbLocaux}
                    setNbLocaux={setNbLocaux}
                    nbStranger={nbStranger}
                    setNbStranger={setNbStranger}
                    handleSubmit={handleSubmit}
                    stateSupabase={stateCreateReservation}
                    buttonText="Réserver"
                />
            </div>
        </section>
    )
}
export default EditParticipantModal