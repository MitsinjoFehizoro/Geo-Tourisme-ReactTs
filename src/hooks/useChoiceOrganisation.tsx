import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import { Organisation } from "../models/organisation"


interface organisationChoiceContext {
    organisationChoice: Organisation | null
    setOrganisationChoice: (o: Organisation) => void
}

const OrganisationChoiceContext = createContext<organisationChoiceContext>({
    organisationChoice: null,
    setOrganisationChoice: () => { },
})

export const useChoiceOrganisation = () => {
    const { organisationChoice, setOrganisationChoice } = useContext(OrganisationChoiceContext)
    const handleOrganisationChoice = (organisation: Organisation) => {
        setOrganisationChoice(organisation)
    }
    return {
        organisationChoice,
        handleOrganisationChoice
    }
}

export const OrganisationChoiceContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [organisationChoice, setOrganisationChoice] = useState<Organisation | null>(null)
    return (
        <OrganisationChoiceContext.Provider value={{ organisationChoice, setOrganisationChoice }}>
            {children}
        </OrganisationChoiceContext.Provider>
    )
}