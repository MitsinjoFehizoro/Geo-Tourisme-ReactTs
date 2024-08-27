import { useState } from "react"
import { stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from "../tools/handle-error"
import { Information } from "../models/information"

export const useGetInformation = () => {
    const [information, setInformation] = useState<Information>()
    const [stateGetInformation, setStateGetInformation] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()
    const getInformation = async () => {
        try {
            setStateGetInformation({ isLoading: true, error: null })
            const { data: dataInformation, error: errorInformation } = await supabase
                .from('informations')
                .select('*')
                .limit(1)
                .single()
            if (errorInformation) {
                handleErrorSupabase(errorInformation, addToast, setStateGetInformation)
            } else {
                setInformation(dataInformation)
                setStateGetInformation({ isLoading: false, error: errorInformation })
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateGetInformation)
        }
    }

    return {
        stateGetInformation, information, getInformation
    }
}