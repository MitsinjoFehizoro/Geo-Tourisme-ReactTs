import { forwardRef, useState } from "react";
import '../styles/components/_destination.scss';
import DestinationCard from "./card/destination-card";
import gesier from "../assets/images/Chute de la lylie et geyser/gesier.jpg"
import baobab from '../assets/images/Makay et allée des Baobabs/baobab.jpg';
import { AnimatePresence, motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";
import { variantsSlideDestination } from "../styles/animations/destination-variants";

const Destination = forwardRef((_, ref) => {
    const slides = [
        {
            title: 'Geo-tourisme',
            image: gesier
        },
        {
            title: 'Tourisme',
            image: baobab
        }
    ]

    const [selectedSlide, setSelectedSlide] = useState(slides[0])
    return (
        <motion.section
            ref={ref}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .4 }}
            transition={{ staggerChildren: .2 }}
            className="bg-background pb-10 pt-14">
            <motion.h1 variants={variantsStandard} className="text-secondary text-center text-3xl">Où allez-vous miantenant?</motion.h1>
            <motion.ul variants={variantsStandard} className="flex flex-row justify-center items-center h-10 mt-4">
                {
                    slides.map(slide =>
                        <li key={slide.title} onClick={() => setSelectedSlide(slide)} className={slide.title === selectedSlide.title ? 'selected' : ''} >
                            <p>{slide.title}</p>
                            <motion.p className="underline absolute bottom-0 left-0" layout />
                        </li>)
                }
            </motion.ul>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedSlide.title}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    transition={{ duration: 0.2 }}
                    variants={variantsSlideDestination}
                    className="h-full mt-4 grid grid-cols-3 place-items-center place-content-center">
                    <DestinationCard picture={selectedSlide.image} />
                    <DestinationCard picture={selectedSlide.image} />
                    <DestinationCard picture={selectedSlide.image} />
                </motion.div>

            </AnimatePresence>

        </motion.section>
    )
}
)
export default Destination