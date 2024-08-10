import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import { field, stateSupabase } from "../tools/type"
import { supabase } from "../supabase/supabase-client"
import { Client } from "../models/client"
import { useToast } from "./useToast"
import { handleErrorSupabase } from "../tools/handle-error"
import { useLocation, useNavigate } from "react-router-dom"


interface authContext {
    stateAuth: stateSupabase
    setStateAuth: (s: stateSupabase) => void
    isAuth: boolean,
    setIsAuth: (b: boolean) => void
    clientAuth: Client | null
    setClientAuth: (c: Client | null) => void
}
const AuthContext = createContext<authContext>({
    stateAuth: { isLoading: false, error: null },
    setStateAuth: () => { },
    isAuth: false,
    setIsAuth: () => { },
    clientAuth: null,
    setClientAuth: () => { }
})
export const useAuth = () => {
    const { stateAuth, setStateAuth, isAuth, setIsAuth, clientAuth, setClientAuth } = useContext(AuthContext)

    const { addToast } = useToast()
    const location = useLocation()
    const navigate = useNavigate()

    const authentication = async () => {
        try {
            setStateAuth({ isLoading: true, error: null })
            const hash = location.hash
            if (hash) {
                const params = new URLSearchParams(hash.substring(1))
                if (params.get('error_code') === '403') {
                    navigate('/')
                    addToast({ toast: '🔒Votre lien a expiré. Veuillez vous reconnecter pour obtenir un nouveau.', isSucces: false })
                    setStateAuth({ isLoading: false, error: null })
                    setIsAuth(false)
                    setClientAuth(null)
                    return
                }
            }

            const { data: dataSession, error: errorSession } = await supabase.auth.getSession()
            if (errorSession) {
                handleErrorSupabase(errorSession, addToast, setStateAuth)
                setIsAuth(false)
                setClientAuth(null)
                console.log('errorSession')
                return
            }
            if (dataSession.session === null) {
                setIsAuth(false)
                setClientAuth(null)
                setStateAuth({ isLoading: false, error: null })
                console.log('dataSession')
                return
            }
            const { data: client, error: errorClient } = await supabase
                .from('clients')
                .select('*')
                .eq('email', dataSession.session.user.email)
            if (errorClient) {
                handleErrorSupabase(errorClient, addToast, setStateAuth)
                setIsAuth(false)
                setClientAuth(null)
                console.log('errorClient')
                return
            }
            if (client && client.length > 0) {
                setIsAuth(true)
                setClientAuth(client[0])
                setStateAuth({ isLoading: false, error: null })
                console.log('tokony hisy toast')
                addToast({ toast: `👋 Bienvenue ${client[0].name.split(' ').at(-1)}! Profitez-en bien.`, isSucces: true })
            } else {
                console.error("erreur type client[0]")
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateAuth)
        }
    }

    const loginUser = async (emailField: field) => {
        if (!emailField.isValid) {
            addToast({ toast: 'Veuillez entrer une adresse email valide.', isSucces: false })
            return
        }
        try {
            setStateAuth({ isLoading: true, error: null })
            const { data: dataEmail, error: errorEmail } = await supabase
                .from('clients')
                .select('email')
                .eq('email', emailField.value)

            if (errorEmail) {
                handleErrorSupabase(errorEmail, addToast, setStateAuth)
                return
            }
            if (dataEmail.length == 0) {
                addToast({ toast: 'Aucun compte associé à cet email. Veuillez en créer un.', isSucces: false })
                setStateAuth({ isLoading: false, error: null })
                return
            }
            const { error: errorAuth } = await supabase.auth.signInWithOtp({
                email: emailField.value
            })
            if (errorAuth) {
                if (errorAuth.status === 429) {
                    addToast({ toast: 'Nous avons déjà envoyé un lien de connexion à votre email. Veuillez consulter et suivre les instructions.', isSucces: false })
                    setStateAuth({ isLoading: false, error: errorAuth })
                } else {
                    handleErrorSupabase(errorAuth, addToast, setStateAuth)
                }
            } else {
                addToast({ toast: '🔗Un lien de connexion vous a été envoyé par email.', isSucces: true })
                setStateAuth({ isLoading: false, error: null })
            }

        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateAuth)
        }
    }

    const signUpUser = async (emailField: field, nameField: field, phoneField: field) => {
        if (!emailField.isValid || !nameField.isValid || !phoneField) {
            addToast({ toast: 'Veuillez remplir correctement tous les formulaires.', isSucces: false })
            return
        }
        try {
            setStateAuth({ isLoading: true, error: null })
            const { data: dataEmail, error: errorEmail } = await supabase
                .from('clients')
                .select('email')
                .eq('email', emailField.value)
            if (errorEmail) {
                handleErrorSupabase(errorEmail, addToast, setStateAuth)
                return
            }
            if (dataEmail.length > 0) {
                addToast({ toast: 'Vous avez déja un compte avec cet email.', isSucces: false })
                setStateAuth({ isLoading: false, error: null })
                return
            }
            const { error: errorClient } = await supabase
                .from('clients')
                .insert([{
                    email: emailField.value, name: nameField.value, phone: phoneField.value
                }])
            if (errorClient) {
                handleErrorSupabase(errorClient, addToast, setStateAuth)
                return
            }
            const { error: errorAuth } = await supabase.auth.signInWithOtp({
                email: emailField.value
            })
            if (errorAuth) {
                handleErrorSupabase(errorAuth, addToast, setStateAuth)
            } else {
                addToast({ toast: "🔗Un lien de connexion vous a été envoyé par email.", isSucces: true })
                setStateAuth({ isLoading: false, error: null })
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateAuth)
        }
    }

    const logout = async () => {
        try {
            setStateAuth({ isLoading: true, error: null })
            const { error: errorLogout } = await supabase.auth.signOut()
            if (errorLogout) {
                handleErrorSupabase(errorLogout, addToast, setStateAuth)
            } else {
                setIsAuth(false)
                setStateAuth({ isLoading: false, error: null })
                setClientAuth(null)
                addToast({ toast: '🌟 Merci beaucoup pour votre visite ! À la prochaine !', isSucces: true })
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateAuth)
        }
    }
    return {
        stateAuth,
        isAuth,
        clientAuth,
        authentication,
        loginUser,
        signUpUser,
        logout
    }
}

export const AuthContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [stateAuth, setStateAuth] = useState<stateSupabase>({ isLoading: false, error: null })
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [clientAuth, setClientAuth] = useState<Client | null>(null)
    return (
        <AuthContext.Provider value={{ stateAuth, setStateAuth, isAuth, setIsAuth, clientAuth, setClientAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
