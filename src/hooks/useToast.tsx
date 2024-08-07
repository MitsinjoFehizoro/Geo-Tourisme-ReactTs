import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import Toast from "../components/toast"

interface toast {
    toast: string,
    isSucces: boolean
}
interface toastContext {
    toasts: toast[],
    setToasts: (toasts: toast[]) => void
}

const ToastContext = createContext<toastContext>({
    toasts: [],
    setToasts: () => { }
})

export const useToast = () => {
    const { toasts, setToasts } = useContext(ToastContext)
    const addToast = (toast: toast) => {
        setToasts([...toasts, toast])
    }
    useEffect(() => {
        const removeToast = setTimeout(() => {
            setToasts([]);
        }, 5000);
        return () => {
            clearTimeout(removeToast);
        };
    }, [toasts]);

    return {
        toasts,
        addToast
    }
}

export const ToastContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [toasts, setToasts] = useState<toast[]>([])
    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>
            <Toast />
            {children}
        </ToastContext.Provider>
    )
}