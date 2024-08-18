import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { variantsImage_1, variantsImage_2, variantsImage_3, variantsRond, variantsRondPrimary } from "../../styles/animations/tourisme-variants";
import tsingy from '../../assets/images/Bemaraha/tsingy.jpg';
import baobab from '../../assets/images/Makay et allée des Baobabs/baobab.jpg';
import vato from '../../assets/images/Bemaraha/vato.jpg';

const StyleImage: FunctionComponent = () => {
    return (
        <motion.div
            initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8, once: true }}
            className="relative w-full md:w-10/12 lg:w-5/12 flex lg:justify-center"
        >
            <motion.div variants={variantsRond} className="w-0 h-0 md:w-[16vw] md:h-[16vw] lg:w-[7vw] lg:h-[7vw] bg-secondary rounded-full"></motion.div>
            <motion.img variants={variantsImage_1} src={vato} className="w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] lg:w-[27vw] lg:h-[27vw] rounded-full" />
            <motion.img variants={variantsImage_2} src={baobab} className="w-[35vw] h-[35vw] md:w-[25vw] md:h-[25vw] lg:w-[16vw] lg:h-[16vw] rounded-full absolute left-[-4vw] md:left-10 lg:left-0 bottom-0 border-4 md:border-8 border-background" />
            <motion.img variants={variantsImage_3} src={tsingy} className="bottom-0 md:bottom-[-2em] w-[20vw] h-[20vw] lg:w-[9vw] lg:h-[9vw] rounded-full absolute right-0 md:right-4 border-4 border-background" />
            <motion.div variants={variantsRondPrimary} className="w-0 h-0 md:w-14 md:h-14 lg:w-12 lg:h-12 absolute bottom-16 right-[-8vw] lg:right-[-2vw] border-0 md:border-8 border-primary rounded-full"></motion.div>
        </motion.div >
    )
}
export default StyleImage