import { FunctionComponent, useEffect, useRef } from "react";
import '../styles/components/_navigation-bar.scss';
import logo from '../assets/logo/logo-color.png';
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLink } from "../hooks/useLink";
import { useHeightNav } from "../hooks/useHeightNav";

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

    const { links, linkActif, toggleLinkActif, toggleScrollActif } = useLink()
    return (
        <header className="flex flex-row justify-around" ref={refHeader}>
            <motion.div className="progress" style={{ scaleX: animateScaleX }}></motion.div>
            <img src={logo} className="w-48 h-auto" alt="" />
            <nav className="flex flex-row justify-evenly w-1/3 ">
                {
                    Object.entries(links).map(([key, link]) =>
                        <a
                            key={key}
                            className={link == linkActif ? 'navLink actif' : 'navLink'}
                            onClick={() => { toggleLinkActif(key), toggleScrollActif(key) }}
                        >{link.title}</a>
                    )
                }
            </nav>
            <div className="flex items-center">
                <NavLink to='/login' className='text-sm rounded-md px-4 py-2  transition ease-in duration-200 hover:bg-secondary hover:text-background mr-1'>Se connecter</NavLink>
                <NavLink to='/signup' className="text-sm text-background rounded-md bg-primary px-6 py-2 transition ease-in duration-200 hover:bg-secondary">S'inscrire</NavLink>
            </div>
        </header >


    )
}

export default NavigationBar