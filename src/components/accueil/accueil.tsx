import { FunctionComponent, useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import { useLink } from "../../hooks/useLink";
import PictureSlide from "./picture-slide";
import Introduction from "./introduction";
import FormSearch from "./form-search";
import { useHeightNav } from "../../hooks/useHeightNav";
import {useDateSearch } from "../../hooks/useDateSearch";
import { useChoiceDestination } from "../../hooks/useChoiceDestination";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

const Accueil: FunctionComponent = () => {
    const [scrollY, setScrollY] = useState<number>(0)
    const handleScrollY = () => {
        setScrollY(window.scrollY)
    }

    const [heightSection, setHeightSection] = useState<number>(0)
    const handleHeightSection = () => {
        if (links['accueil'].refDestination?.current)
            setHeightSection(links['accueil'].refDestination.current.offsetHeight)
    }

    const refDiv = useRef<HTMLDivElement>(null)
    const [heightDiv, setHeightDiv] = useState(0)
    const handleHeightDiv = () => {
        if (refDiv.current)
            setHeightDiv(refDiv.current.offsetHeight)
    }

    useEffect(() => {
        handleHeightSection()
        handleHeightDiv()
        handleScrollY()
        window.addEventListener('resize', handleHeightSection)
        window.addEventListener('resize', handleHeightDiv)
        window.addEventListener('scroll', handleScrollY)
        return () => {
            window.removeEventListener('resize', handleHeightSection)
            window.removeEventListener('scroll', handleScrollY)
            window.removeEventListener('scroll', handleHeightDiv)
        }
    }, [])

    const { heightNav } = useHeightNav()
    const [topDiv, setTopDiv] = useState(0)
    useEffect(() => {
        setTopDiv((heightSection - scrollY - heightNav - heightDiv / 2) / 2)
    }, [heightSection, scrollY, heightDiv, heightNav])

    const { links, toggleLinkActif } = useLink()

    const { destinationChoice } = useChoiceDestination()
    const { selectedDateSearch } = useDateSearch()
    const { addToast } = useToast()
    const navigate = useNavigate()
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (destinationChoice && selectedDateSearch) {
            navigate('/search')
            toggleLinkActif('destination')
        } else {
            addToast({ toast: '📍 Merci de préciser la destination et la date de votre choix.', isSucces: false })
        }
    }
    return (
        <motion.section
            viewport={{ amount: .8 }}
            onViewportEnter={() => toggleLinkActif('accueil')}
            ref={links['accueil'].refDestination}
            className="relative w-full flex items-center py-72"
            style={{ minHeight: heightDiv }}
        >
            <PictureSlide />
            <div ref={refDiv} className="px-6 sm:px-8 lg:px-0 absolute w-full flex flex-wrap items-center justify-around pb-44 md:pb-0" style={{ top: topDiv, transition: 'top .5s ease-out' }}>
                <Introduction />
                <FormSearch color1="white" color2="background" isResponsive={true} onSubmit={onSubmit} />
            </div>
        </motion.section>
    )
}




export default Accueil