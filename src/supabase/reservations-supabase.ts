import { handleErrorSupabase } from './../tools/handle-error';
import { useState } from "react"
import { stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { supabase } from "./supabase-client"
import { Reservation } from '../models/reservation';
import { useAuth } from '../hooks/useAuth';
import { useChoicieReservation } from '../hooks/useChoiceReservation';
import { useNavigate } from 'react-router-dom';
import { useChoiceOrganisation } from '../hooks/useChoiceOrganisation';
import { useModal } from '../hooks/useModal';

export const useCreateReservation = () => {
    const [stateCreateReservation, setStateCreateReservation] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const navigate = useNavigate()
    const { addToast } = useToast()
    const { isAuth, clientAuth } = useAuth()
    const { handleReservationChoice } = useChoicieReservation()
    const { organisationChoice } = useChoiceOrganisation()
    const createReservation = async (nbLocaux: number, nbStranger: number, setNbLocaux: (n: number) => void, setNbStranger: (n: number) => void) => {
        if (!isAuth) {
            addToast({ toast: '🔓 Veuillez vous connecter pour faire une réservation.', isSucces: false })
            setStateCreateReservation({ isLoading: false, error: null })
            return
        }
        if (nbLocaux <= 0 && nbStranger <= 0) {
            addToast({ toast: 'Veuillez préciser le nombre des participants.', isSucces: false })
            return
        }
        try {
            setStateCreateReservation({ isLoading: true, error: null })
            if (organisationChoice === null) {
                addToast({ toast: 'Aucune organisation choisie.', isSucces: false })
                setStateCreateReservation({ isLoading: false, error: null })
                return
            }
            const total = nbLocaux * organisationChoice.local_price + nbStranger * organisationChoice.stranger_price
            const { data, error } = await supabase
                .from('reservations')
                .insert([
                    { local: nbLocaux, stranger: nbStranger, total: total, client_id: clientAuth?.id, organisation_id: organisationChoice.id }
                ])
                .select(`*, organisations(*, destinations(*))`)
            if (error) {
                handleErrorSupabase(error, addToast, setStateCreateReservation)
            } else {
                handleReservationChoice(data[0] as Reservation)
                navigate('/reservations')
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

export const useGetReservations = () => {
    const [stateGetReservations, setStateGetReservations] = useState<stateSupabase>(
        {
            isLoading: true,
            error: null
        }
    )

    const [reservations, setReservations] = useState<Reservation[]>([])
    const { addToast } = useToast()
    const { isAuth, clientAuth } = useAuth()

    const getReservations = async () => {
        if (!isAuth || clientAuth === null) {
            addToast({ toast: "🔓Veuillez vous connecter pour accéder à vos réservations.", isSucces: false })
            setStateGetReservations({ isLoading: false, error: null })
            return
        }
        try {
            setStateGetReservations({ isLoading: true, error: null })
            const { data: dataReservations, error: errorReservations } = await supabase
                .from('reservations')
                .select(`*, organisations(*, destinations(*))`)
                .eq('client_id', clientAuth.id)
            if (errorReservations) {
                handleErrorSupabase(errorReservations, addToast, setStateGetReservations)
            } else {
                console.log(dataReservations);
                setReservations(dataReservations)
                setStateGetReservations({ isLoading: false, error: null })
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateGetReservations)
        }
    }
    return {
        stateGetReservations,
        reservations,
        getReservations,
    }
}

export const useUpdateReservation = () => {
    const [stateUpdateReservation, setStateUpdateReservation] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()
    const { toogleStateShowModal } = useModal()
    const { isAuth } = useAuth()
    const { reservationChoice } = useChoicieReservation()


    const updateReservation = async (nbLocaux: number, nbStranger: number) => {
        if (!isAuth) {
            addToast({ toast: '🔓Veuillez vous connecter', isSucces: false })
            setStateUpdateReservation({ isLoading: false, error: null })
            return
        }
        if (nbLocaux <= 0 && nbStranger <= 0) {
            addToast({ toast: 'Veuillez préciser le nombre des participants.', isSucces: false })
            return
        }
        try {
            setStateUpdateReservation({ isLoading: true, error: null })
            if (reservationChoice === null) {
                addToast({ toast: 'Aucune réservqtion choisie.', isSucces: false })
                setStateUpdateReservation({ isLoading: false, error: null })
                return
            }
            const total = nbLocaux * reservationChoice.organisations.local_price + nbStranger * reservationChoice.organisations.stranger_price
            const { error: errorReservation } = await supabase
                .from('reservations')
                .update({ 'local': nbLocaux, 'stranger': nbStranger, 'total': total })
                .eq('id', reservationChoice?.id)

            if (errorReservation) {
                handleErrorSupabase(errorReservation, addToast, setStateUpdateReservation)
            } else {
                setStateUpdateReservation({ isLoading: false, error: null })
                addToast({ toast: "👍 Le nombre de participants a été modifié avec succès", isSucces: true })
                toogleStateShowModal()

                    
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateUpdateReservation)
        }
    }

    return {
        stateUpdateReservation,
        updateReservation
    }
}