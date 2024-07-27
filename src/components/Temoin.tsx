import { FunctionComponent } from "react";
import TemoinCard from "./card/Temoin-card";
import '../styles/components/_temoin.scss'
import { motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";

const Temoin: FunctionComponent = () => {

    return (
        <motion.section
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .8 }}
            transition={{ staggerChildren: .2 }}
            className="bg-background py-14 px-14 flex flex-col items-end relative">
            <motion.h1 variants={variantsStandard} className="text-3xl text-secondary text-right mb-1">Ce que nos clients disent ?</motion.h1>
            <motion.p variants={variantsStandard} className="w-1/3 text-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum veritatis consequuntur vero. </motion.p>
            <motion.div variants={variantsStandard} className="w-full flex justify-around">
                <TemoinCard />
                <TemoinCard />
            </motion.div>
            <div className="style">
                <div className="w-56 h-8 bg-white rounded-full mb-2"></div>
                <div className="w-44 h-8 bg-primary rounded-full mb-2"></div>
                <div className="w-32 h-8 bg-secondary rounded-full"></div>
            </div>
        </motion.section>
    )
}
export default Temoin