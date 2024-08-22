import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react";
import { Destination } from "../models/destination";

interface destinationChoiceContext {
    destinationChoice: Destination | null
    setDestinationChoice: (d: Destination) => void
}

const DestinationChoiceContext = createContext<destinationChoiceContext>(
    {
        destinationChoice: null,
        setDestinationChoice: () => { }
    }
)

export const useChoiceDestination = () => {
    const { destinationChoice, setDestinationChoice } = useContext(DestinationChoiceContext)
    const handleDestinationChoice = (destination: Destination) => {
        setDestinationChoice(destination)
    }
    return {
        destinationChoice,
        handleDestinationChoice
    }
}

export const DestinationChoiceContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [destinationChoice, setDestinationChoice] = useState<Destination | null>(null)
    return (
        <DestinationChoiceContext.Provider value={{ destinationChoice, setDestinationChoice }}>
            {children}
        </DestinationChoiceContext.Provider>
    )
}