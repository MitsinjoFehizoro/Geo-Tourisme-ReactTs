import { FunctionComponent } from "react";
import '../../styles/components/card/_destination-card.scss'
import { motion } from 'framer-motion'
import { variantsStandard } from "../../styles/animations/standard-variants";

const LoadingDestinationCard: FunctionComponent = () => {
    return (
        <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .5 }}
            transition={{ staggerChildren: .2 }}
            className="containt animate-pulse flex justify-center items-center flex-col w-80 mb-14"
        >
            < motion.div variants={variantsStandard} className="w-full h-80 bg-white" />
            <motion.div variants={variantsStandard} className="mt-12 w-full flex flex-col items-center">
                <p className="bg-white rounded-md mb-2 w-4/6 h-2" />
                <p className="bg-white rounded-md mb-2 w-5/6 h-2" />
                <p className="bg-white rounded-md mb-2 w-4/6 h-2" />
                <p className="bg-white rounded-md mb-2 w-3/6 h-2" />
            </motion.div>
            <motion.div variants={variantsStandard} className="bg-white rounded-md w-4/5 h-2 mt-6" />
        </motion.div>
    )
}
export default LoadingDestinationCard