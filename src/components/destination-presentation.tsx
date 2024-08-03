import { FunctionComponent, useState } from "react"
import { useHeightNav } from "../hooks/useHeightNav"
import { destination, stateSupabase } from "../tools/type"
import '../styles/components/_destination-presentation.scss'
import DetailDestinationCard from "./card/detail-destination-card"
import LoadingDetailDestinationCard from "./loading/loading-detail-destination-card"
import OrganistaionDestinationCard from "./card/organisation-destination-card"
import { i_slide } from "../styles/base/tailwind"
import { AnimatePresence } from "framer-motion"

type Props = {
    destination: destination | undefined
    stateGetDestination: stateSupabase
}
const DestinationPresentation: FunctionComponent<Props> = ({ destination, stateGetDestination }) => {
    const { heightNav } = useHeightNav()
    return (
        <section style={{ marginTop: heightNav }}>
            <div className="fotsy flex flex-col justify-center">
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <p className="points text-3xl" key={i}>. . . . . . . . . . . . . .</p>
                    ))
                }
            </div>
            <div className="galeries flex flex-row items-center justify-center" >
                {
                    stateGetDestination.isLoading && (
                        <>
                            <div className="slide animate-pulse bg-transparent" />
                            <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <LoadingDetailDestinationCard key={index} />
                                    ))
                                }
                            </div>
                        </>
                    )
                }
                {
                    destination && (
                        <>
                            <SlideGaleries galeries={destination.galeries} />
                            <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                                <DetailDestinationCard title={destination.title} description={destination.description} />
                                {
                                    destination.history && (
                                        <DetailDestinationCard title="Histoire" description={destination.history} />
                                    )
                                }
                                <DetailDestinationCard title='localisation' description={destination.localisation} />
                                <OrganistaionDestinationCard organisations={destination.organisations} />
                                {
                                    !destination.history && (
                                        <div className="simple opacity-0" />
                                    )
                                }
                            </div>
                        </>
                    )
                }
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
        <div className="slide overflow-hidden">
            <AnimatePresence>
                {
                    galeries.map((src, index) =>
                        selectedIndex === index && (
                            <img src={src} className="w-full h-full" alt="" key={index} />
                        )
                    )
                }
            </AnimatePresence>
            <div className="absolute top-0 left-0 w-full h-full px-10 flex flex-row justify-between items-center">
                <i className={`fa fa-angle-left bg-white/50 ${i_slide}`} onClick={handlePrevSlide}></i>
                <i className={`fa fa-angle-right bg-white/50 ${i_slide}`} onClick={handleNextSlide}></i>
            </div>
        </div>
    )
}

