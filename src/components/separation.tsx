import { FunctionComponent } from "react";
import { motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";

const Separation: FunctionComponent = () => {

    return (
        <motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: .8 }} className="motion relative bg-background px-8 lg:px-36 flex items-center">
            <motion.div variants={variantsStandard} className="motion w-full h-1  rounded-full bg-white" ></motion.div>
        </motion.section>
    )
}
export default Separation