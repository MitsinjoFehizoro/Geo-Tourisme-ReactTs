import { AnimatePresence } from "framer-motion"
import { FunctionComponent, useState } from "react"
import { i_slide } from "../../styles/base/tailwind"

type Props = {
    galeries: string[]
}
const SlideGaleries: FunctionComponent<Props> = ({ galeries }) => {
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
export default SlideGaleries