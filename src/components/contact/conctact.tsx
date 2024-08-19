import { FunctionComponent } from "react";
import tsingy from '../../assets/images/Bemaraha/tsingy.jpg'
import { useLink } from "../../hooks/useLink";
import { motion } from 'framer-motion'
import InfoCard from "./info-card";

const Contact: FunctionComponent = () => {

    const { links, toggleLinkActif } = useLink()
    return (
        <motion.section
            ref={links['contact'].refDestination}
            onViewportEnter={() => toggleLinkActif('contact')}
            className="relative w-full">
            <div className="w-full h-60 bg-red-500"></div>
            <div className="w-full h-80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/70"></div>
                <img src={tsingy} className="w-full h-auto" alt="" />
            </div>
            <div className="absolute top-0 w-full flex flex-col lg:flex-row justify-between px-4 md:px-8 ">
                <InfoCard />
                {/* <InfoCard /> */}
                {/* <ContactCard /> */}
            </div>
            <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around text-background absolute bottom-0 bg-secondary/80">
                <p className="text-sm"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </motion.section>

    )
}
export default Contact