import { FunctionComponent, useState } from "react";
import TitleProgramCard from "./card/title-program-card";
import StandardCard from "./card/standard-card";
import { Destination } from "../models/destination";
import { useAuth } from "../hooks/useAuth";
import { useCreateReservation } from "../supabase/reservations-supabase";
import { useChoiceOrganisation } from "../hooks/useChoiceOrganisation";
import ReservationForm from "./form/reservation-form";

type Props = {
    destination: Destination
}
const Reservation: FunctionComponent<Props> = ({ destination }) => {
    const { isAuth } = useAuth()
    const { stateCreateReservation, createReservation } = useCreateReservation()
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    const handleSubmit = () => {
        createReservation(
            nbLocaux,
            nbStranger,
            setNbLocaux,
            setNbStranger
        )
    }

    return (
        <div className="w-full">
            <TitleProgramCard title="Reserver le :" destination={destination} />
            {
                !isAuth && (
                    <StandardCard>
                        <p className="text-sm">🔓Veuillez vous connecter pour faire une réservation.</p>
                    </StandardCard>
                )
            }
            <StandardCard>
                <div className="m-2">
                    <p className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-primary">
                        <i className="fa fa-lightbulb text-white"></i>
                    </p>
                    <h1 className=" text mb-1 uppercase ">Comment réserver ?</h1>
                    <div className="text-sm leading-relaxed">
                        {
                            !isAuth && (
                                <>
                                    Connectez-vous à votre compte. <br />
                                    Choisissez votre destination.<br />
                                </>
                            )
                        }

                        Sélectionnez votre date de disponibilité.<br />
                        Précisez le nombre de participants, et réservez.
                    </div>
                </div>
            </StandardCard>

            {
                isAuth && (
                    <StandardCard>
                        <ReservationForm
                            nbLocaux={nbLocaux}
                            setNbLocaux={setNbLocaux}
                            nbStranger={nbStranger}
                            setNbStranger={setNbStranger}
                            handleSubmit={handleSubmit}
                            stateSupabase={stateCreateReservation}
                            buttonText="Réserver"
                        />
                    </StandardCard>

                )
            }

        </div>
    )
}
export default Reservation