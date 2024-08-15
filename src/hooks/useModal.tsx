import {  FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"

interface modalContext {
    isShowModal: boolean,
    setIsShowModal: (b: boolean) => void
}

const ModalContext = createContext<modalContext>(
    {
        isShowModal: false,
        setIsShowModal: () => { }
    }
)

export const useModal = () => {
    const { isShowModal, setIsShowModal } = useContext(ModalContext)
    const toogleStateShowModal = () => {
        setIsShowModal(!isShowModal)
    }
    return {
        isShowModal,
        toogleStateShowModal
    }
}

export const ModalContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={{ isShowModal, setIsShowModal }}>{children}</ModalContext.Provider>
    )
}