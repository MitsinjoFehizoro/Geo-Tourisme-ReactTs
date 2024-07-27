import { FunctionComponent } from "react";
import { p_destination } from "../styles/base/tailwind";
import DestinationCard from "./card/destination-card";
import gesier from "../assets/images/Chute de la lylie et geyser/gesier.jpg"
import { motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";
const Destination: FunctionComponent = () => {

    return (
        <motion.section
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once : true, amount: .4 }}
            transition={{ staggerChildren: .2 }}
            className="bg-background pb-10 pt-14">
            <motion.h1 variants={variantsStandard} className="text-secondary text-center text-3xl">Où allez-vous miantenant?</motion.h1>
            <motion.div variants={variantsStandard} className="flex flex-row justify-center items-center h-10 mt-4">
                <p className={`${p_destination} border-primary text-primary`}>Geo tourisme</p>
                <p className="w-14"></p>
                <p className={`${p_destination} border-background`}>Tourisme</p>
            </motion.div>
            <div  className="h-full mt-4 grid grid-cols-3 place-items-center place-content-center">
                <DestinationCard picture={gesier} />
                <DestinationCard picture={gesier} />
                <DestinationCard picture={gesier} />
            </div>
        </motion.section>
    )
}
export default Destination