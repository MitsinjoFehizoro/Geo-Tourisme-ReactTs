import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react";
import { Information } from "../models/information";
import { stateSupabase } from "../tools/type";
import { useToast } from "./useToast";
import { handleErrorSupabase } from "../tools/handle-error";
import { supabase } from "../supabase/supabase-client";

interface informationContext {
    information: Information | null,
    setInformation: (i: Information) => void,
    stateGetInformation: stateSupabase,
    setStateGetInformation: (s: stateSupabase) => void
}

const InformationContext = createContext<informationContext>(
    {
        information: null,
        setInformation: () => { },
        stateGetInformation: { isLoading: false, error: null },
        setStateGetInformation: () => { }
    }
)

export const useInformation = () => {
    const { information, setInformation, stateGetInformation, setStateGetInformation } = useContext(InformationContext)
    const { addToast } = useToast()
    const getInformation = async () => {
        try {
            setStateGetInformation({ isLoading: true, error: null })
            const { data: dataInformation, error: errorInformation } = await supabase
                .from('informations')
                .select('*, why_us(*)')
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

export const InformationContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [information, setInformation] = useState<Information | null>(null)
    const [stateGetInformation, setStateGetInformation] = useState<stateSupabase>(
        {
            isLoading: false, error: null
        }
    )
    return (
        <InformationContext.Provider value={{ information, setInformation, stateGetInformation, setStateGetInformation }}>{children}</InformationContext.Provider>
    )
}