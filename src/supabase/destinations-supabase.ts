import { stateSupabase } from './../tools/type';
import { useState } from "react"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from '../tools/handle-error';
import { useToast } from '../hooks/useToast';
import { Destination } from '../models/destination';
import { useNavigate } from 'react-router-dom';

export const useGetDestinations = () => {
    const [stateGetDestination, setStateGetDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const [tourismes, setTourismes] = useState<Destination[]>()
    const [geo, setGeo] = useState<Destination[]>()

    const { addToast } = useToast()
    const getDestinations = async () => {
        try {
            setStateGetDestination({ isLoading: true, error: null })
            const { data: dataDestinations, error: errorDestinations } = await supabase
                .from('destinations')
                .select('*')
            if (errorDestinations) {
                handleErrorSupabase(errorDestinations, addToast, setStateGetDestination)
            } else {
                setTourismes(dataDestinations.filter((destination: Destination) => destination.type === 'tourisme'))
                setGeo(dataDestinations.filter((destination: Destination) => destination.type === 'geo'))
                setStateGetDestination({ isLoading: false, error: null })
            }

        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateGetDestination)
        }
    }

    return {
        stateGetDestination,
        tourismes,
        geo,
        getDestinations
    }
}

export const useGetDestinationById = () => {
    const [stateGetDestination, setStateGetDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const navigate = useNavigate()
    const { addToast } = useToast()
    const [destination, setDestination] = useState<Destination>()
    const getDestination = async (id: string) => {
        try {
            setStateGetDestination({ isLoading: true, error: null })
            const { data: dataDestination, error: errorDestination } = await supabase
                .from('destinations')
                .select(`*, organisations (*, programs (*))`)
                .eq('id', id)
                .single()

            console.log(dataDestination);

            if (errorDestination) {
                navigate('/page-not-found')
            } else {
                setDestination(dataDestination)
                setStateGetDestination({ error: null, isLoading: false })
            }

        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateGetDestination)
        }
    }

    return {
        stateGetDestination, getDestination, destination
    }
}
