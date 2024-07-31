import { stateSupabase } from './../tools/type';
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

    const getDestinations = async () => {
        try {
            setStateGetDestination({ ...stateGetDestination, isLoading: true })
            const { data: destinations } = await supabase
                .from('destinations')
                .select('*')
            setStateGetDestination({ ...stateGetDestination, isLoading: false, data: destinations })
        } catch (error) {
            setStateGetDestination({ ...stateGetDestination, isLoading: false, error: error })
        }
    }

    return {
        stateGetDestination,
        getDestinations
    }
}
