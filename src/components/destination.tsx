import { FunctionComponent, useEffect, useState } from "react";
import '../styles/components/_destination.scss';
import { AnimatePresence, motion } from 'framer-motion'
import { variantsStandard } from "../styles/animations/standard-variants";
import { variantsSlideDestination } from "../styles/animations/destination-variants";
import { useLink } from "../hooks/useLink";
import { useGetDestinations } from "../supabase/destinations-supabase";

const Destination: FunctionComponent = () => {
    const slides = ['Geo-tourisme', 'Tourisme']
    const [selectedSlide, setSelectedSlide] = useState(slides[0])

    const { links, toggleLinkActif } = useLink()

    const { stateGetDestination, tourismes, geo, getDestinations } = useGetDestinations()
    useEffect(() => {
        getDestinations()
    }, [])

    return (
        <motion.section
            ref={links['destination'].refDestination}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .4 }}
            transition={{ staggerChildren: .2 }}
            onViewportEnter={() => toggleLinkActif('destination')}
            className="bg-background pb-10 pt-14">
            <motion.h1 variants={variantsStandard} className="text-secondary text-center text-3xl">Où allez-vous miantenant?</motion.h1>
            <motion.ul variants={variantsStandard} className="flex flex-row justify-center items-center h-10 mt-4">
                {
                    slides.map(slide =>
                        <li key={slide} onClick={() => setSelectedSlide(slide)} className={slide === selectedSlide ? 'selected' : ''} >
                            <p>{slide}</p>
                            <motion.p className="underline absolute bottom-0 left-0" layout />
                        </li>)
                }
            </motion.ul>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedSlide}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    transition={{ duration: 0.2 }}
                    variants={variantsSlideDestination}
                    className="h-full mt-4 grid grid-cols-3 place-items-center place-content-center">
                        dgdffdgdf
                </motion.div>

            </AnimatePresence>

        </motion.section>
    )
}
export default Destination