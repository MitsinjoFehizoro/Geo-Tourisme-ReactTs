import {  stateSupabase } from './../tools/type';
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
    const [tourismes, setTourismes] = useState<Destination[]>()
    const [geo, setGeo] = useState<Destination[]>()

    const { addToast } = useToast()
    const getDestinations = async () => {
        try {
            setStateGetDestination({ ...stateGetDestination, isLoading: true })
            const { data, error } = await supabase
                .from('destinations')
                .select('*')
            if (error) {
                console.error(error)
            }
            setTourismes(data?.filter(destination => destination.type === 'tourisme'))
            setGeo(data?.filter(destination => destination.type === 'geo'))
            setStateGetDestination({ ...stateGetDestination, isLoading: false })
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateGetDestination)
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
    const { addToast } = useToast()
    const [destination, setDestination] = useState<Destination>()
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
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateGetDestination)
        }
    }

    return {
        stateGetDestination, getDestination, destination
    }
}
