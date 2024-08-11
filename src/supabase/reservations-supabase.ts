import { handleErrorSupabase } from './../tools/handle-error';
import { useState } from "react"
import { stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { Organisation } from "../models/organisation"
import { Client } from "../models/client"
import { supabase } from "./supabase-client"

export const useCreateReservation = () => {
    const [stateCreateReservation, setStateCreateReservation] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()
    const createReservation = async (nbLocaux: number, nbStranger: number, setNbLocaux: (n: number) => void, setNbStranger: (n: number) => void, organisation: Organisation | null, clientAuth: Client | null,) => {
        if (clientAuth === null) {
            addToast({ toast: '🔓Veuillez vous connecter pour faire une réservation.', isSucces: false })
            setStateCreateReservation({ isLoading: false, error: null })
            return
        }
        if (nbLocaux <= 0 && nbStranger <= 0) {
            addToast({ toast: 'Veuillez préciser le nombre des participants.', isSucces: false })
            return
        }
        try {
            setStateCreateReservation({ isLoading: true, error: null })
            if (organisation === null) {
                addToast({ toast: 'Aucune organisation choisie.', isSucces: false })
                setStateCreateReservation({ isLoading: false, error: null })
                return
            }
            const total = nbLocaux * organisation.local_price + nbStranger * organisation.stranger_price
            const { error } = await supabase
                .from('reservations')
                .insert([
                    { local: nbLocaux, stranger: nbStranger, total: total, client_id: clientAuth.id, organisation_id: organisation.id }
                ])
            if (error) {
                handleErrorSupabase(error, addToast, setStateCreateReservation)
            } else {
                //Mbola ampina redirection vers paiement
                setStateCreateReservation({ isLoading: false, error: null })
                setNbLocaux(0)
                setNbStranger(0)
                addToast({ toast: "🎉 Merci pour votre confiance ! Votre réservation a été effectuée avec succès.", isSucces: true })
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateCreateReservation)
        }
    }
    return {
        stateCreateReservation,
        createReservation
    }
}