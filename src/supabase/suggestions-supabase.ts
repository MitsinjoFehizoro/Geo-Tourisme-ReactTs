import { useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { Organisation } from "../models/organisation"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from "../tools/handle-error"

export const useCreateSuggestion = () => {
    const [stateCreateSuggestion, setStateCreateSuggestion] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()

    const createSuggestion = async (field: field, organisation: Organisation | null) => {
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
            console.log(organisation);

            const { error } = await supabase
                .from('suggestions')
                .insert([
                    { description: field.value, organisation_id: organisation.id }
                ])
            if (error) {
                handleErrorSupabase(error, addToast, setStateCreateSuggestion)
            } else {
                setStateCreateSuggestion({ isLoading: false, error: null })
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