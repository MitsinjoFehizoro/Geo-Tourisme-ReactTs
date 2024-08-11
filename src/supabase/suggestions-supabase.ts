import { useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { Organisation } from "../models/organisation"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from "../tools/handle-error"
import { Suggestion } from "../models/suggestion"

export const useCreateSuggestion = () => {
    const [stateCreateSuggestion, setStateCreateSuggestion] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()

    const createSuggestion = async (field: field, organisation: Organisation | null, clearField: () => void) => {
        if (!field.isValid) {
            addToast({ toast: 'Veuillez soumettre une suggestion valide.', isSucces: false })
            return
        }
        try {
            setStateCreateSuggestion({ isLoading: true, error: null })
            if (organisation === null) {
                addToast({ toast: 'Aucune organisation choisie.', isSucces: false })
                setStateCreateSuggestion({ isLoading: false, error: null })
                return
            }

            const { error } = await supabase
                .from('suggestions')
                .insert([
                    { description: field.value, organisation_id: organisation.id }
                ])
            if (error) {
                handleErrorSupabase(error, addToast, setStateCreateSuggestion)
            } else {
                setStateCreateSuggestion({ isLoading: false, error: null })
                clearField()
                addToast({ toast: "📨Merci pour votre suggestion! Nous l'examinerons et vous répondons bientôt.", isSucces: true })
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateCreateSuggestion)
        }
    }

    return {
        stateCreateSuggestion,
        createSuggestion
    }
}

export const useGetSuggestions = () => {
    const [stateGetSuggestions, setStatGetSuggestions] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )

    const [suggestions, setSuggestions] = useState<Suggestion[]>()
    const { addToast } = useToast()

    const getSuggestions = async (organisation: Organisation | null) => {
        try {
            setStatGetSuggestions({ isLoading: true, error: null })
            if (organisation === null) {
                addToast({ toast: 'Aucune organisation choisie.', isSucces: false })
                setStatGetSuggestions({ isLoading: false, error: null })
                return
            }
            const { data: dataSuggestions, error: errorSuggestions } = await supabase
                .from('suggestions')
                .select('*')
                .eq('organisation_id', organisation.id)
            if (errorSuggestions) {
                handleErrorSupabase(errorSuggestions, addToast, setStatGetSuggestions)
            } else {
                setSuggestions(dataSuggestions)
                setStatGetSuggestions({ isLoading: false, error: null })
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStatGetSuggestions)
        }
    }
    return {
        stateGetSuggestions,
        getSuggestions,
        suggestions
    }
}