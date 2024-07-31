import { destination, stateSupabase } from './../tools/type';
import { useState } from "react"
import { supabase } from "./supabase-client"

export const useGetDestinations = () => {
    const [stateGetDestination, setStateGetDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            data: null,
            error: null
        }
    )
    const [tourismes, setTourismes] = useState<destination[]>()
    const [geo, setGeo] = useState<destination[]>()

    const getDestinations = async () => {
        try {
            setStateGetDestination({ ...stateGetDestination, isLoading: true })
            const { data: destinations } = await supabase
                .from('destinations')
                .select('*')
            setTourismes(destinations?.filter(destination => destination.type === 'tourisme'))
            setGeo(destinations?.filter(destination => destination.type === 'geo'))
            setStateGetDestination({ ...stateGetDestination, isLoading: false, data: destinations })
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
