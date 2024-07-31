import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"

interface heightNavContext {
    heightNav: number,
    setHeightNav: (n: number) => void
}
const HeightNavContext = createContext<heightNavContext>({
    heightNav: 0,
    setHeightNav: () => { }
})

export const useHeightNav = () => {
    const { heightNav, setHeightNav } = useContext(HeightNavContext)
    const handleHeight = (h: number) => {
        setHeightNav(h)
    }
    return { heightNav, handleHeight }
}

export const HeightNavContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [heightNav, setHeightNav] = useState<number>(0)
    return (
        <HeightNavContext.Provider value={{ heightNav, setHeightNav }}>
            {children}
        </HeightNavContext.Provider>
    )

}