import { FunctionComponent, useState } from "react"
import { Destination } from "../../models/destination"
import { stateSupabase } from "../../tools/type"
import { useHeightNav } from "../../hooks/useHeightNav"
import { AnimatePresence } from "framer-motion"
import { i_slide } from "../../styles/base/tailwind"
import '../../styles/components/_destination-presentation.scss'

import DescriptionCard from "./description-card"

type Props = {
    destination: Destination | undefined
    stateGetDestination: stateSupabase
}
const DestinationPresentation: FunctionComponent<Props> = ({ destination, stateGetDestination }) => {
    const { heightNav } = useHeightNav()
    return (
        <section className="w-full bg-background pb-28" style={{ paddingTop: 1.5 * heightNav }}>
            <div className="flex justify-around items-end">
                <div>
                    <h1 className="text-2xl  text-primary mb-12">Présentation de la destination</h1>
                    <div className="w-96 h-96 relative bg-white rounded-lg">
                        {
                            stateGetDestination.isLoading ? (
                                <div className="w-full h-full absolute top-4 left-4 bg-secondary/20 animate-pulse" />
                            ) : (
                                destination && (
                                    <SlideGaleries galeries={destination.galeries} />
                                )
                            )

                        }
                    </div>
                </div>
                <div className="">
                    <DescriptionCard destination={destination} stateSupabase={stateGetDestination} />
                </div>

            </div>
        </section>
    )
}

export default DestinationPresentation

type PropsGaleries = {
    galeries: string[]
}
const SlideGaleries: FunctionComponent<PropsGaleries> = ({ galeries }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const handlePrevSlide = () => {
        setSelectedIndex(prevIndex => Math.abs((prevIndex - 1) % galeries.length))
    }
    const handleNextSlide = () => {
        setSelectedIndex(prevIndex => (prevIndex + 1) % galeries.length)
    }
    return (
        <div className="w-full h-full absolute top-4 left-4 overflow-hidden">
            <AnimatePresence>
                {
                    galeries.map((src, index) =>
                        selectedIndex === index && (
                            <img src={src} className="w-full h-full bg-secondary/20 rounded-xl" alt="" key={index} />
                        )
                    )
                }
            </AnimatePresence>
            <div className="absolute top-0 left-0 w-full h-full px-2 flex flex-row justify-between items-center">
                <i className={`fa fa-angle-left bg-white/50 ${i_slide}`} onClick={handlePrevSlide}></i>
                <i className={`fa fa-angle-right bg-white/50 ${i_slide}`} onClick={handleNextSlide}></i>
            </div>
        </div>
    )
}

