import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { stateSupabase } from "../tools/type"
import { supabase } from "../supabase/supabase-client"
import { Client } from "../models/client"
import { useToast } from "./useToast"
import { handleErrorSupabase } from "../tools/handle-error"


interface authContext {
    stateAuth: stateSupabase
    setStateAuth: (s: stateSupabase) => void
    isAuth: boolean,
    setIsAuth: (b: boolean) => void
    clientAuth: Client | null
    setClientAuth: (c: Client) => void
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
    const authentication = async () => {
        try {
            setStateAuth({ isLoading: true, error: null })
            const { data: dataUser, error: errorGetUser } = await supabase.auth.getUser()
            if (errorGetUser) {
                console.log(errorGetUser)
                setIsAuth(false)
                return
            }
            if (dataUser) {
                const { data: client, error: errorClient } = await supabase
                    .from('clients')
                    .select('*')
                    .eq('email', (dataUser as { email?: string }).email)
                if (errorClient) {
                    console.log(errorGetUser)
                    setIsAuth(false)
                    return
                }
                if (client instanceof Client) {
                    setIsAuth(true)
                    setClientAuth(client)
                    addToast({ toast: `👋 Bonjour ${client.name[0]}, passez un bon moment sur notre site.`, isSucces: true })
                } else {
                    console.log('errorrrr');
                }
            }
        } catch (error) {
            if (error instanceof Error)
                handleErrorSupabase(error, addToast, setStateAuth)
        }
    }
    useEffect(() => {
        authentication()
    }, [])
    return {
        stateAuth,
        isAuth,
        // loginUser,
        // signUpUser,
        // logoutUser
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
