import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"

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
    const removeToast = (toast: toast) => {
        setToasts(toasts.filter(t => t == toast))
    }
    useEffect(() => {
        const autoRemoveToast = setTimeout(() => {
            setToasts([]);
        }, 5000);
        return () => {
            clearTimeout(autoRemoveToast);
        };
    }, [toasts]);

    return {
        toasts,
        addToast,
        removeToast
    }
}

export const ToastContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [toasts, setToasts] = useState<toast[]>([])
    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>

            {children}
        </ToastContext.Provider>
    )
}