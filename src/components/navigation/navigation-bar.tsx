import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../../styles/components/navigation/_navigation-bar.scss';
import logo from '../../assets/logo/logo-color.png';
import { motion, useScroll, useSpring } from 'framer-motion'
import { useHeightNav } from "../../hooks/useHeightNav";
import CenterNav from "./center-nav";
import ConnexionLink from "./connexion-link";
import ProfilNav from "./profil-nav";
import LeftNav from "./left-nav";

const NavigationBar: FunctionComponent = () => {
    const refHeader = useRef<HTMLDivElement>(null)
    const { handleHeight } = useHeightNav()
    const changeHeight = () => {
        if (refHeader.current)
            handleHeight(refHeader.current.offsetHeight)
    }
    useEffect(() => {
        changeHeight()
        window.addEventListener('resize', changeHeight)
        return () => {
            window.removeEventListener('resize', changeHeight)
        }
    }, [])

    const { scrollYProgress } = useScroll()
    const animateScaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.01
    })

    const [isOpen, setIsOpen] = useState(false)


    return (
        <header className="fixed top-0 left-0 z-20 bg-white pt-[4px] w-full flex flex-row justify-between lg:justify-around shadow px-4 md:px-8" ref={refHeader}>
            <motion.div className="fixed top-0 left-0 w-full h-[4px] bg-primary origin-left" style={{ scaleX: animateScaleX }}></motion.div>
            <img src={logo} className="w-40 lg:w-48 h-auto" alt="" />
            <CenterNav />
            <ConnexionLink />
            <ProfilNav />
            <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex items-center cursor-pointer">
                {
                    isOpen ? (
                        <i className="fa fa-xmark text-primary text-lg"></i>
                    ) : (
                        <i className="fa fa-bars text-primary "></i>
                    )
                }
            </div>
            <LeftNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </header >


    )
}

export default NavigationBar