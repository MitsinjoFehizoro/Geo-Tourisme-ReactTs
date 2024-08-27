import { useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { useAuth } from "../hooks/useAuth"
import { supabase } from "./supabase-client"
import { handleErrorSupabase } from "../tools/handle-error"

export const useCreateContact = () => {
    const [stateCreateContact, setStateCreateContact] = useState<stateSupabase>(
        {
            isLoading: false,
            error: null
        }
    )
    const { isAuth, clientAuth } = useAuth()
    const { addToast } = useToast()

    const createContact = async (description: field, clearField: () => void, email?: field) => {
        if (!isAuth) {
            if (!email?.isValid) {
                addToast({ toast: 'Veuillez entrer votre adresse email.', isSucces: false })
                return
            }
        }
        if (!description.isValid) {
            addToast({ toast: 'Veuillez entrez un message valide.', isSucces: false })
            return
        }
        try {
            setStateCreateContact({ isLoading: true, error: null })
            const { error: errorContact } = await supabase
                .from('contacts')
                .insert([
                    { email: isAuth ? clientAuth?.email : email?.value, description: description.value, is_client: isAuth }
                ])
            if (errorContact) {
                handleErrorSupabase(errorContact, addToast, setStateCreateContact)
                return
            } else {
                addToast({ toast: "📩 Merci pour votre message. Nous l'examinerons et vous répondrons par email dès que possible.", isSucces: true })
                setStateCreateContact({ isLoading: false, error: null })
                clearField()
            }
        } catch (error) {
            handleErrorSupabase(error as Error, addToast, setStateCreateContact)
        }

    }

    return {
        stateCreateContact,
        createContact
    }
}