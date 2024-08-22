import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react";
import { Destination } from "../models/destination";
import { stateSupabase } from "../tools/type";
import { handleErrorSupabase } from "../tools/handle-error";
import { useToast } from "./useToast";
import { supabase } from "../supabase/supabase-client";

interface destinationChoiceContext {
    destinationChoice: Destination | null
    setDestinationChoice: (d: Destination) => void
    stateChoiceDestination: stateSupabase
    setStateChoiceDestination: (s: stateSupabase) => void
}

const DestinationChoiceContext = createContext<destinationChoiceContext>(
    {
        destinationChoice: null,
        setDestinationChoice: () => { },
        stateChoiceDestination: { isLoading: false, error: null },
        setStateChoiceDestination: () => { }
    }
)

export const useChoiceDestination = () => {

    const { destinationChoice, setDestinationChoice, stateChoiceDestination, setStateChoiceDestination } = useContext(DestinationChoiceContext)

    const { addToast } = useToast()
    const handleDestinationChoice = async (id: string) => {
        try {
            setStateChoiceDestination({ isLoading: true, error: null })
            const { data: dataDestination, error: errorDestination } = await supabase
                .from('destinations')
                .select(`*, organisations (*, programs (*))`)
                .eq('id', id)
                .single()
            if (errorDestination) {
                handleErrorSupabase(errorDestination, addToast, setStateChoiceDestination)
            } else {
                setDestinationChoice(dataDestination)
                setStateChoiceDestination({ error: null, isLoading: false })
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateChoiceDestination)
        }

    }
    return {
        stateChoiceDestination,
        destinationChoice,
        handleDestinationChoice
    }
}

export const DestinationChoiceContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [destinationChoice, setDestinationChoice] = useState<Destination | null>(null)
    const [stateChoiceDestination, setStateChoiceDestination] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )

    return (
        <DestinationChoiceContext.Provider value={{ destinationChoice, setDestinationChoice, stateChoiceDestination, setStateChoiceDestination }}>
            {children}
        </DestinationChoiceContext.Provider>
    )
}