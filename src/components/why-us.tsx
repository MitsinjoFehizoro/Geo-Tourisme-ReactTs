import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/components/_why-us.scss'
import soleil from '../assets/images/Isalo/soleil.jpg'
import GarantiCard from "./card/garanti-card";
import { motion } from 'framer-motion'
import { useLink } from "../hooks/useLink";
import { variantsStandard } from "../styles/animations/standard-variants";

const WhyUs: FunctionComponent = () => {
    const { links, toggleLinkActif } = useLink()
    const refDiv = useRef<HTMLDivElement>(null)
    const [heightDiv, setHeightDiv] = useState(0)
    const handleHeightDiv = () => {
        if (refDiv.current)
            setHeightDiv(refDiv.current.offsetHeight)
    }
    useEffect(() => {
        handleHeightDiv()
        window.addEventListener('resize', handleHeightDiv)
        return () => window.removeEventListener('resize', handleHeightDiv)
    }, [heightDiv])
    return (
        <motion.section
            ref={links['apropos'].refDestination}
            onViewportEnter={() => toggleLinkActif('apropos')}
            className="relative overflow-hidden "
            style={{ height: heightDiv }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/90" />
            <img src={soleil} className="w-full  h-full lg:h-auto" alt="" />
            <motion.div
                ref={refDiv}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: .4 }}
                transition={{ staggerChildren: .2 }}
                className="absolute top-0 left-0 w-full py-14  px-8 md:px-14">
                <motion.h1 variants={variantsStandard} className="text-right text-white  mb-8 md:mb-16 text-2xl lg:text-3xl">Pourquoi vous devez nous choisir ?</motion.h1>
                <motion.div variants={variantsStandard} className="flex flex-wrap justify-between w-full">
                    <GarantiCard />
                    <GarantiCard />
                    <GarantiCard />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
export default WhyUs