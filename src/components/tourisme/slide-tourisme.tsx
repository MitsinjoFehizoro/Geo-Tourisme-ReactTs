import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { variantsParentSlide, variantsSlide } from "../../styles/animations/tourisme-variants";
import { i_slide, p_indiceSlideActive, p_indiceSlideInactive } from "../../styles/base/tailwind";
import { useInformation } from "../../hooks/useInformation";


const SlideTourisme: FunctionComponent = () => {
    const { stateGetInformation, information } = useInformation()
    const [slideTourisme, setSlideTourisme] = useState<{ title: string, description: string }[]>([])
    useEffect(() => {
        if (information) {
            setSlideTourisme([{ title: 'TOURISME', description: information.tourisme }, { title: 'GEO-TOURISME', description: information.geo_tourisme }])
        }
    }, [information])

    const [showPrevSlide, setShowPrevSlide] = useState<boolean>(true);
    const refDiv = useRef<HTMLDivElement>(null);
    const refHeight = useRef<HTMLDivElement>(null)
    const [widthDiv, setWidthDiv] = useState(0);
    const [heightDiv, setHeightDiv] = useState(0)
    const handleResize = () => {
        if (refDiv.current) {
            setWidthDiv(refDiv.current.offsetWidth);
        }
        if (refHeight.current) {
            setHeightDiv(refHeight.current.offsetHeight)
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [heightDiv, widthDiv]);

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5, once: true }}
            variants={variantsParentSlide}
            className="w-full md:w-10/12 lg:w-6/12 flex flex-row justify-center items-center mt-10 lg:mt-0"
            style={{ height: heightDiv }}
        >
            <i className={`${i_slide} fa fa-angle-left`} onClick={() => setShowPrevSlide(!showPrevSlide)}></i>
            <div className="relative w-full h-full flex items-center overflow-hidden" ref={refDiv}>
                <motion.div
                    ref={refHeight}
                    variants={variantsSlide}
                    animate={showPrevSlide ? 'next' : 'prev'}
                    transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
                    className="absolute flex flex-row pb-8"
                    style={{ width: widthDiv * 2 }}>
                    {
                        stateGetInformation.isLoading ? (
                            <div className="w-1/2 px-2">
                                <h1 className="w-56 h-5 mb-4 bg-white animate-pulse" />
                                {
                                    Array.from({ length: 7 }).map((_, index) => (
                                        <p key={index} className="w-full bg-white animate-pulse h-2 mb-3" />
                                    ))}
                            </div>
                        ) : (
                            slideTourisme.length > 0 && (
                                slideTourisme.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="w-1/2 px-2"
                                    >
                                        <h1 className="text-2xl lg:text-3xl text-primary mb-2">{(slide as { title: string }).title}</h1>
                                        <p>{(slide as { description: string }).description}</p>
                                    </div>
                                ))
                            )
                        )
                    }
                </motion.div>
                <div className="slide absolute bottom-0 w-full flex flex-row justify-center items-center mt-4">
                    <p className={showPrevSlide ? p_indiceSlideActive : p_indiceSlideInactive} />
                    <p className={!showPrevSlide ? p_indiceSlideActive : p_indiceSlideInactive} />
                </div>
            </div>
            <i className={`${i_slide} fa fa-angle-right`} onClick={() => setShowPrevSlide(!showPrevSlide)}></i>
        </motion.div>
    )
}
export default SlideTourisme