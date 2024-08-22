import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import Toast from "../components/toast"
import { toast } from "../tools/type"


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
        setTimeout(() => {
            setToasts([]);
        }, 5000);
    }
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