import { FunctionComponent, PropsWithChildren, RefObject, createContext, useContext, useRef, useState } from "react"

type link = {
    title: string,
    refDestination: RefObject<HTMLDivElement> | null,
}
type links = { [key: string]: link }

interface linkContext {
    links: links,
    linkActif: link | null,
    setLinkActif: (link: link) => void,
    keyActif: string,
    setKeyActif: (s: string) => void
}

const LinkContext = createContext<linkContext>({
    links: {},
    linkActif: null,
    setLinkActif: () => { },
    keyActif: '',
    setKeyActif: () => { }
})

export const useLink = () => {
    const { links, linkActif, setLinkActif, keyActif, setKeyActif } = useContext(LinkContext)
    const toggleLinkActif = (key: string) => {
        setLinkActif(links[key])
    }
    const toggleScrollActif = (key: string) => {
        links[key].refDestination?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    const toggleKeyActif = (key: string) => {
        setKeyActif(key)
    }

    return {
        links,
        linkActif,
        toggleLinkActif,
        toggleScrollActif,
        keyActif,
        toggleKeyActif
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
            'reservation': { title: 'Réservation', refDestination: null },
        }
    )
    const [linkActif, setLinkActif] = useState<link>(links['accueil'])
    const [keyActif, setKeyActif] = useState<string>('')
    return (
        <LinkContext.Provider value={{ links, linkActif, setLinkActif, keyActif, setKeyActif }}>
            {children}
        </LinkContext.Provider>
    )
}
