import { FunctionComponent, PropsWithChildren, RefObject, createContext, useContext, useRef, useState } from "react"

type link = {
    title: string,
    refDestination: RefObject<HTMLDivElement> | null,
}
type links = { [key: string]: link }

interface linkContext {
    links: links,
    linkActif: link | null,
    setLinkActif: (link: link) => void
}

const LinkContext = createContext<linkContext>({
    links: {},
    linkActif: null,
    setLinkActif: () => { }
})

export const useLink = () => {
    const { links, linkActif, setLinkActif } = useContext(LinkContext)
    const toggleLinkActif = (key: string) => {
        setLinkActif(links[key])
    }
    const toggleScrollActif = (key: string) => {
        links[key].refDestination?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return {
        links,
        linkActif,
        toggleLinkActif,
        toggleScrollActif
    }
}

export const LinkContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const refAccueil = useRef(null)
    const refTourisme = useRef(null)
    const refDestination = useRef(null)
    const refApropos = useRef(null)
    const refContact = useRef(null)

    const [links] = useState<links>(
        {
            'accueil': { title: 'Accueil', refDestination: refAccueil },
            'tourisme': { title: 'Tourisme', refDestination: refTourisme },
            'destination': { title: 'Destination', refDestination: refDestination },
            'apropos': { title: 'À propos', refDestination: refApropos },
            'contact': { title: 'Contact', refDestination: refContact },
        }
    )
    const [linkActif, setLinkActif] = useState<link>(links['accueil'])
    return (
        <LinkContext.Provider value={{ links, linkActif, setLinkActif }}>
            {children}
        </LinkContext.Provider>
    )
}
