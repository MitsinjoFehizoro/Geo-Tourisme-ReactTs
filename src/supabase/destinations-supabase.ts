import { destination, stateSupabase } from './../tools/type';
import { useState } from "react"
import { supabase } from "./supabase-client"

export const useGetDestinations = () => {
    const [stateGetDestination, setStateGetDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const [tourismes, setTourismes] = useState<destination[]>()
    const [geo, setGeo] = useState<destination[]>()

    const getDestinations = async () => {
        try {
            setStateGetDestination({ ...stateGetDestination, isLoading: true })
            const { data } = await supabase
                .from('destinations')
                .select('*')
            setTourismes(data?.filter(destination => destination.type === 'tourisme'))
            setGeo(data?.filter(destination => destination.type === 'geo'))
            setStateGetDestination({ ...stateGetDestination, isLoading: false })
        } catch (error) {
            let errorMessage = "Un erreur se produit !"
            if (error instanceof Error) errorMessage = error.message
            setStateGetDestination({ ...stateGetDestination, isLoading: false, error: errorMessage })
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
    const [destination, setDestination] = useState<destination>()
    const getDestination = async (id: string) => {
        try {
            setStateGetDestination({ ...stateGetDestination, isLoading: true })
            const { data } = await supabase
                .from('destinations')
                .select(`*, organisations (*, programs (*))`)
                .eq('id', id)
                .single()
            setDestination(data)
            setStateGetDestination({ ...stateGetDestination, isLoading: false })
        } catch (error) {
            let errorMessage = "Un erreur se produit !"
            if (error instanceof Error) errorMessage = error.message
            setStateGetDestination({ ...stateGetDestination, isLoading: false, error: errorMessage })
        }
    }

    return {
        stateGetDestination, getDestination, destination
    }
}
