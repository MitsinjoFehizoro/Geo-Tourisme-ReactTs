import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { stateSupabase } from "../tools/type"
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
                }
                return
            }

            const { data: dataSession, error: errorSession } = await supabase.auth.getSession()
            if (errorSession) {
                handleErrorSupabase(errorSession, addToast, setStateAuth)
                setIsAuth(false)
                setClientAuth(null)
                return
            }
            if (dataSession.session === null) {
                setIsAuth(false)
                setClientAuth(null)
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
                return
            }
            if (client && client.length > 0) {
                setIsAuth(true)
                setClientAuth(client[0])
                addToast({ toast: `👋 Bonjour ${client[0].name.split(' ').at(-1)}, passez un bon moment sur notre site.`, isSucces: true })
            } else {
                console.error("erreur type client[0]")
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
        authentication
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
