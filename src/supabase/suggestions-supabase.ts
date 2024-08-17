import { useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { Organisation } from "../models/organisation"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from "../tools/handle-error"
import { Suggestion } from "../models/suggestion"
import { Client } from "../models/client"

export const useCreateSuggestion = () => {
    const [stateCreateSuggestion, setStateCreateSuggestion] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { addToast } = useToast()

    const createSuggestion = async (field: field, organisation: Organisation | null, clientAuth: Client | null, clearField: () => void) => {
        if (clientAuth === null) {
            addToast({ toast: '🔓Veuillez vous connecter pour soumettre une suggestion.', isSucces: false })
            setStateCreateSuggestion({ isLoading: false, error: null })
            return
        }
        if (!field.isValid) {
            addToast({ toast: 'Veuillez entrer une suggestion valide.', isSucces: false })
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
                    { description: field.value, organisation_id: organisation.id, client_id: clientAuth.id }
                ])
            if (error) {
                handleErrorSupabase(error, addToast, setStateCreateSuggestion)
            } else {
                setStateCreateSuggestion({ isLoading: false, error: null })
                clearField()
                addToast({ toast: "📨Merci pour votre suggestion! Nous l'examinerons et vous répondons bientôt.", isSucces: true })
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateCreateSuggestion)
        }
    }

    return {
        stateCreateSuggestion,
        createSuggestion
    }
}

export const useGetSuggestions = () => {
    const [stateGetSuggestions, setStateGetSuggestions] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )

    const [suggestions, setSuggestions] = useState<Suggestion[]>([])
    const { addToast } = useToast()

    const getSuggestions = async (organisation: Organisation | null) => {
        try {
            setStateGetSuggestions({ isLoading: true, error: null })
            if (organisation === null) {
                addToast({ toast: 'Aucune organisation choisie.', isSucces: false })
                setStateGetSuggestions({ isLoading: false, error: null })
                return
            }
            const { data: dataSuggestions, error: errorSuggestions } = await supabase
                .from('suggestions')
                .select(`* , clients(*)`)
                .eq('organisation_id', organisation.id)
            if (errorSuggestions) {
                handleErrorSupabase(errorSuggestions, addToast, setStateGetSuggestions)
            } else {
                setSuggestions(dataSuggestions)
                setStateGetSuggestions({ isLoading: false, error: null })
            }


            const realTimeSuggestions =  supabase.channel('custom-insert-channel')
                .on(
                    'postgres_changes',
                    { event: 'INSERT', schema: 'public', table: 'suggestions' },
                    async (payload) => {
                        const newSuggestion = payload.new as Suggestion;
                        try {
                            const { data: dataClients, error: errorClients } = await supabase
                                .from('clients')
                                .select('*')
                                .eq('id', payload.new.client_id)
                                .single();

                            if (errorClients) {
                                handleErrorSupabase(errorClients, addToast, setStateGetSuggestions);
                            } else {
                                newSuggestion.clients = dataClients
                                setSuggestions((prevSuggestions) => [...prevSuggestions, newSuggestion]);
                            }
                        } catch (error) {
                            handleErrorSupabase(error as Error, addToast, setStateGetSuggestions);
                        }
                    }
                )
                .subscribe();
            return () => {
                supabase.removeChannel(realTimeSuggestions)
            }

        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateGetSuggestions)
        }
    }
    return {
        stateGetSuggestions,
        getSuggestions,
        suggestions
    }
}