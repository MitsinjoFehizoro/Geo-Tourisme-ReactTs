import { handleErrorCatch, handleErrorSupabase } from '../tools/handle-error';
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
        if (!emailField.isValid || !nameField.isValid || !phoneField) {
            addToast({ toast: 'Veuillez remplir correctement tous les formulaires', isSucces: false })
            return
        }
        try {
            setStateSignUpUser({ isLoading: true, error: null })
            const { data: dataEmail, error: errorEmail } = await supabase
                .from('clients')
                .select('email')
                .eq('email', emailField.value)
            if (errorEmail) {
                handleErrorSupabase(errorEmail, addToast, setStateSignUpUser)
                return
            }
            if (dataEmail.length > 0) {
                addToast({ toast: 'Vous avez déja un compte avec cet email.', isSucces: false })
                setStateSignUpUser({ isLoading: false, error: null })
                return
            }
            const { error: errorClient } = await supabase
                .from('clients')
                .insert([{
                    email: emailField.value, name: nameField.value, phone: phoneField.value
                }])
            if (errorClient) {
                handleErrorSupabase(errorClient, addToast, setStateSignUpUser)
                return
            }
            const { error: errorAuth } = await supabase.auth.signInWithOtp({
                email: emailField.value
            })
            if (errorAuth) {
                handleErrorSupabase(errorAuth, addToast, setStateSignUpUser)
            } else {
                addToast({ toast: "Un lien de connexion vous a été envoyé par email.", isSucces: true })
                setStateSignUpUser({ isLoading: false, error: null })
            }
        } catch (error) {
            handleErrorCatch(error, addToast, setStateSignUpUser)
        }
    }
    return {
        stateSignUpUser,
        signUpUser
    }
}

export const useLoginUser = () => {
    const [stateLoginUser, setStateLoginUser] = useState<stateSupabase>({
        isLoading: false,
        error: null
    })

    const { addToast } = useToast()
    const loginUser = async (emailField: field) => {
        if (!emailField.isValid) {
            addToast({ toast: 'Veuillez entrer une adresse email valide.', isSucces: false })
            return
        }
        try {
            setStateLoginUser({ isLoading: true, error: null })
            const { data: dataEmail, error: errorEmail } = await supabase
                .from('clients')
                .select('email')
                .eq('email', emailField.value)

            if (errorEmail) {
                handleErrorSupabase(errorEmail, addToast, setStateLoginUser)
                return
            }
            if (dataEmail.length == 0) {
                addToast({ toast: 'Aucun compte associé à cet email. Veuillez en créer un.', isSucces: false })
                setStateLoginUser({ isLoading: false, error: null })
                return
            }
            const { error: errorAuth } = await supabase.auth.signInWithOtp({
                email: emailField.value
            })
            if (errorAuth) {
                handleErrorSupabase(errorAuth, addToast, setStateLoginUser)
            } else {
                addToast({ toast: 'Un lien de connexion vous a été envoyé par email.', isSucces: true })
                setStateLoginUser({ isLoading: false, error: null })
            }

        } catch (error) {
            handleErrorCatch(error, addToast, setStateLoginUser)
        }
    }
    return {
        stateLoginUser,
        loginUser
    }
}