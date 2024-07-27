import { FunctionComponent } from "react";
import '../../styles/components/card/_destination-card.scss'
import { motion } from 'framer-motion'
import { variantsStandard } from "../../styles/animations/standard-variants";
type Props = {
    picture: string
}

const DestinationCard: FunctionComponent<Props> = ({ picture }) => {

    return (
        <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once : true, amount: .8 }}
            transition={{ staggerChildren: .2 }}
            className="flex justify-center items-center flex-col w-80 mb-14"
            >
            <div  className="relative w-full h-80 flex justify-center">
                <motion.img variants={variantsStandard} src={picture} alt="" className="w-full h-full" />
                <motion.div variants={variantsStandard} className="destination_title w-52  bg-secondary py-2">
                    <p className="text-center text-white text-xl pb-1">GESIER</p>
                    <p className="text-center text-background text-sm">A partir de 500.000 Ariary</p>
                </motion.div>
            </div>
            <motion.p variants={variantsStandard} className="truncature text-center pt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta sint dolore modi dolor sequi. Voluptas libero quos at molestias nihil, laboriosam animi facere iusto
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod consequatur assumenda numquam. Molestiae aperiam saepe dolorum facilis voluptates soluta tenetur rem. Tempora, iure suscipit voluptatem quasi non deserunt labore recusandae!
            </motion.p>
            <motion.p variants={variantsStandard} className="w-36 mt-6 pb-2 border-b-2 border-black text-sm text-center">VOIR PLUS DE DETAIL</motion.p>
        </motion.div>
    )
}
export default DestinationCard