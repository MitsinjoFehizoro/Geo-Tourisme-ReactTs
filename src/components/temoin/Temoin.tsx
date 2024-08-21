import { FunctionComponent } from "react";
import TemoinCard from "./Temoin-card";
import { motion } from 'framer-motion'
import { variantsStandard } from "../../styles/animations/standard-variants";

const Temoin: FunctionComponent = () => {

    return (
        <motion.section
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .4 }}
            transition={{ staggerChildren: .2 }}
            className="bg-background py-14  px-8 md:px-14 flex flex-col items-end relative">
            <motion.h1 variants={variantsStandard} className="text-2xl lg:text-3xl text-secondary text-center md:text-right mb-1 w-full">Ce que nos clients disent ?</motion.h1>
            <motion.p variants={variantsStandard} className="w-full md:w-2/3 lg:w-1/3  text-sm text-center md:text-right mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum veritatis consequuntur vero. </motion.p>
            <motion.div variants={variantsStandard} className="w-full flex flex-wrap justify-around">
                <TemoinCard />
                <TemoinCard />
            </motion.div>
            <div className="absolute top-[-2em] md:top-[-1em] lg:top-0 left-2 rotate-[-55deg] lg:rotate-[-50deg]">
                <div className="w-24 h-4 md:w-44 md:h-6 lg:w-56 lg:h-8 bg-white rounded-full mb-2"></div>
                <div className="w-16 h-4 md:w-36 md:h-6 lg:w-44 lg:h-8 bg-primary rounded-full mb-2"></div>
                <div className="w-12 h-4 md:w-28 md:h-6 lg:w-32 lg:h-8 bg-secondary rounded-full"></div>
            </div>
        </motion.section>
    )
}
export default Temoin