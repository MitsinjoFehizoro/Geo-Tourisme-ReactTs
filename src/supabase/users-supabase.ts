import { useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { useToast } from "../hooks/useToast"
import { supabase } from "./supabase-client"

export const useSignUpUser = () => {
    const [stateSignUpUser, setStateSignUpUser] = useState<stateSupabase>({
        isLoading: false,
        error: null
    })
    const { addToast } = useToast()
    const signUpUser = async (emailField: field, nameField: field, phoneField: field) => {
        if (emailField.isValid && nameField.isValid && phoneField.isValid) {
            try {
                setStateSignUpUser({ isLoading: true, error: null })
                const { data, error } = await supabase.from('clients').select('email').eq('email', emailField.value)
                if (error) {
                    addToast({ toast: error.message, isSucces: false })
                    setStateSignUpUser({ isLoading: false, error: error.message })
                } else {
                    if (data.length > 0) {
                        addToast({ toast: 'Vous avez déja un compte avec cet email.', isSucces: false })
                        setStateSignUpUser({ isLoading: false, error: null })
                    } else {
                        try {

                            const { data, error } = await supabase
                                .from('clients')
                                .insert([
                                    { email: emailField.value, name: nameField.value, phone: phoneField.value },
                                ])
                                .select()
                            if (error) {
                                addToast({ toast: error.message, isSucces: false })
                                setStateSignUpUser({ isLoading: false, error: error.message })
                            } else {
                                const { data, error } = await supabase.auth.signInWithOtp({
                                    email: emailField.value
                                })
                                if (error) {
                                    addToast({ toast: error.message, isSucces: false })
                                    setStateSignUpUser({ isLoading: false, error: error.message })
                                } else {
                                    addToast({ toast: "Email de confirmation envoyé.", isSucces: true })
                                    setStateSignUpUser({ isLoading: false, error: null })
                                }
                            }
                        } catch (error) {
                            let errorMessage = "Une erreur se produite."
                            if (error instanceof Error) errorMessage = error.message
                            setStateSignUpUser({ isLoading: false, error: errorMessage })
                            console.log(errorMessage, error);
                        }
                    }
                }
            } catch (error) {
                let errorMessage = "Une erreur se produite."
                if (error instanceof Error) errorMessage = error.message
                setStateSignUpUser({ isLoading: false, error: errorMessage })
                console.log(errorMessage, error);
            }
        } else {
            addToast({ toast: 'Veuillez remplir correctement tous les champs.', isSucces: false })
        }
    }
    return {
        stateSignUpUser,
        signUpUser
    }
}