import { FunctionComponent, useEffect, useRef, useState } from "react";
import tsingy from '../../assets/images/Bemaraha/tsingy.jpg'
import { useLink } from "../../hooks/useLink";
import { motion } from 'framer-motion'
import InfoCard from "./info-card";
import ContactCard from "./contact-card";

const Contact: FunctionComponent = () => {
    const { links, toggleLinkActif } = useLink()
    const refDiv = useRef<HTMLDivElement>(null)
    const [heightDiv, setHeightDiv] = useState(0)
    const handleHeightDiv = () => {
        if (refDiv.current)
            setHeightDiv(refDiv.current.offsetHeight)
    }
    useEffect(() => {
        handleHeightDiv()
        window.addEventListener('resize', handleHeightDiv)
        return () => window.removeEventListener('resize', handleHeightDiv)
    }, [heightDiv])
    return (
        <motion.section
            ref={links['contact'].refDestination}
            onViewportEnter={() => toggleLinkActif('contact')}
            className="relative w-full bg-background"
            style={{ height: heightDiv + 140 }}
        >

            <div ref={refDiv} className="absolute top-0 left-0 z-10 w-full lg:h-96 flex flex-col lg:flex-row justify-between px-4 md:px-8 ">
                <InfoCard />
                <ContactCard />
            </div>

            <div className="w-full h-[600px] lg:h-[400px] absolute bottom-0 left-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/70"></div>
                <img src={tsingy} className="w-full h-full md:h-auto" alt="" />
            </div>
            <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around text-background absolute bottom-0 bg-secondary/80">
                <p className="text-sm"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </motion.section>

    )
}
export default Contact