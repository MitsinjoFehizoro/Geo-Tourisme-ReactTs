import { FunctionComponent, useEffect, useState } from "react";
import '../../styles/components/_destination.scss';
import { AnimatePresence, motion } from 'framer-motion'
import { useLink } from "../../hooks/useLink";
import { useGetDestinations } from "../../supabase/destinations-supabase";
import DestinationCard from "./destination-card";
import LoadingDestinationCard from "./loading-destination-card";
import { variantsSlideDestination } from "../../styles/animations/destination-variants";
import { variantsStandard } from "../../styles/animations/standard-variants";

const Destination: FunctionComponent = () => {

    const { links, toggleLinkActif } = useLink()

    const { stateGetDestination, tourismes, geo, getDestinations } = useGetDestinations()
    const [selectedSlide, setSelectedSlide] = useState({
        title: "Geo-tourisme",
        destinations: geo
    })
    const slides = [
        {
            title: "Geo-tourisme",
            destinations: geo
        },
        {
            title: "Tourisme",
            destinations: tourismes
        }
    ]
    useEffect(() => {
        getDestinations()
    }, [])
    useEffect(() => {
        setSelectedSlide(slides[0])
    }, [stateGetDestination])

    return (
        <motion.section
            ref={links['destination'].refDestination}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .2 }}
            transition={{ staggerChildren: .2 }}
            onViewportEnter={() => toggleLinkActif('destination')}
            className="relative bg-background pt-8 pb-0 lg:pb-10 lg:pt-14">
            <motion.h1 variants={variantsStandard} className="text-secondary text-center text-2xl lg:text-3xl">Où allez-vous miantenant?</motion.h1>
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
                    className="w-full min-h-80 mt-4 px-2 md:px-8 flex flex-wrap justify-around overflow-hidden"
                >
                    {
                        stateGetDestination.isLoading && (
                            <>
                                <LoadingDestinationCard />
                                <LoadingDestinationCard />
                                <LoadingDestinationCard />
                            </>

                        )
                    }
                    {
                        selectedSlide.destinations && (
                            selectedSlide.destinations.map(destination =>
                                <DestinationCard destination={destination} key={destination.id} />
                            )
                        )
                    }

                </motion.div>
            </AnimatePresence>

        </motion.section>
    )
}
export default Destination