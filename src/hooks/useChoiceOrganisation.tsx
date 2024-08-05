import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import { organisation } from "../tools/type"

interface organisationChoiceContext {
    organisationChoice: organisation | null,
    setOrganisationChoice: (o: organisation) => void
}

const OrganisationChoiceContext = createContext<organisationChoiceContext>({
    organisationChoice: null,
    setOrganisationChoice: () => { },
})

export const useChoiceOrganisation = () => {
    const { organisationChoice, setOrganisationChoice } = useContext(OrganisationChoiceContext)
    const handleOrganisationChoice = (organisation: organisation) => {
        setOrganisationChoice(organisation)
    }
    return {
        organisationChoice,
        handleOrganisationChoice
    }
}

export const OrganisationChoiceContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [organisationChoice, setOrganisationChoice] = useState<organisation | null>(null)
    return (
        <OrganisationChoiceContext.Provider value={{ organisationChoice, setOrganisationChoice }}>
            {children}
        </OrganisationChoiceContext.Provider>
    )
}