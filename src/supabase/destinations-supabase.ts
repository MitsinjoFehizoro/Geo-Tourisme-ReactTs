import { stateSupabase } from './../tools/type';
import { useState } from "react"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from '../tools/handle-error';
import { useToast } from '../hooks/useToast';
import { Destination } from '../models/destination';

export const useGetDestinations = () => {
    const [stateGetDestination, setStateGetDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const [destinations, setDestinations] = useState<Destination[]>()
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
                setDestinations(dataDestinations as Destination[])
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
        destinations,
        tourismes,
        geo,
        getDestinations
    }
}
