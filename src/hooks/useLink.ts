import { RefObject, createContext, useContext, useState } from "react"


interface LinkContextType {
    links: Array<string>
}

const links = [
    'accueil', 'tourisme', 'destination', 'apropos', 'contact'
]

const LinkContext = createContext<LinkContextType>(
    {
        links: links
    }
)

export const useLink = () => {
    const { links } = useContext(LinkContext)
    const [linkActif, setLinkActif] = useState(links[0])
    const toggleLinkActif = (link: string) => {
        setLinkActif(link)
    }
    const toggleScrollActif = (ref: RefObject<HTMLDivElement>) => {
        console.log(ref.current);
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
        links,
        linkActif,
        toggleLinkActif,
        toggleScrollActif
    }
}