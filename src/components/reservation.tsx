import { FunctionComponent, useState } from "react";
import TitleProgramCard from "./card/title-program-card";
import StandardCard from "./card/standard-card";
import { Destination } from "../models/destination";
import { useAuth } from "../hooks/useAuth";
import CustomButton from "./custom-button";
import { i_reservation } from "../styles/base/tailwind";
import { useCreateReservation } from "../supabase/reservations-supabase";
import { useChoiceOrganisation } from "../hooks/useChoiceOrganisation";

type Props = {
    destination: Destination
}
const Reservation: FunctionComponent<Props> = ({ destination }) => {
    const { isAuth, clientAuth } = useAuth()
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    const { organisationChoice } = useChoiceOrganisation()
    const { stateCreateReservation, createReservation } = useCreateReservation()
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
                        <div className="my-2">
                            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                <i onClick={() => setNbLocaux(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                <p className="text-sm mt-1">{nbLocaux} participants locaux</p>
                                <i onClick={() => setNbLocaux(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                            </div>
                            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                <i onClick={() => setNbStranger(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                <p className="text-sm mt-1">{nbStranger} participants etrangers</p>
                                <i onClick={() => setNbStranger(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                            </div>
                            <div onClick={handleSubmit}>
                                <CustomButton text="Réserver" isLoading={stateCreateReservation.isLoading} />
                            </div>
                        </div>
                    </StandardCard>
                )
            }

        </div>
    )
}
export default Reservation