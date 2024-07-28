import { FunctionComponent } from "react";
import '../styles/components/_why-us.scss'
import soleil from '../assets/images/Isalo/soleil.jpg'
import GarantiCard from "./card/garanti-card";
import { motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";
import { useLink } from "../hooks/useLink";

const WhyUs: FunctionComponent = () => {
    const { links, toggleLinkActif } = useLink()
    return (
        <motion.section
            ref={links['apropos'].refDestination}
            onViewportEnter={() => toggleLinkActif('apropos')}
            className="why relative overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/90"></div>
            <img src={soleil} className="w-full h-auto" alt="" />
            <motion.div
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: .6 }}
                transition={{ staggerChildren: .2 }}
                className="absolute top-0 left-0 w-full h-full pt-14 px-14">
                <motion.h1 variants={variantsStandard} className="text-right text-white text-3xl">Pourquoi vous devez nous choisir ?</motion.h1>
                <motion.div variants={variantsStandard} className="h-full grid grid-cols-3 place-items-center place-content-center">
                    <GarantiCard />
                    <GarantiCard />
                    <GarantiCard />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
export default WhyUs