import { FunctionComponent, RefObject, useEffect, useRef, useState } from "react";
import '../styles/components/_navigation-bar.scss';
import logo from '../assets/logo/logo-color.png';
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLink } from "../hooks/useLink";

type Props = {
    onHeightChange: (h: number) => void,
    refs: { [key: string]: RefObject<HTMLDivElement> }
}

const NavigationBar: FunctionComponent<Props> = ({ onHeightChange, refs }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current)
            onHeightChange(ref.current.offsetHeight)
    }, [onHeightChange])
    const { scrollYProgress } = useScroll()
    const animateScaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.01
    })

    // const links = [
    //     {
    //         name: 'Accueil',
    //         destination: refs.accueil
    //     },
    //     {
    //         name: 'Geo/Tourisme',
    //         destination: refs.tourisme
    //     },
    //     {
    //         name: 'Destination',
    //         destination: refs.destination
    //     },
    //     {
    //         name: 'À propos',
    //         destination: refs.apropos
    //     },
    //     {
    //         name: 'Contact',
    //         destination: refs.contact
    //     },
    // ]

    const { links, linkActif, toggleLinkActif, toggleScrollActif } = useLink()

    return (
        <section>
            <header className="flex flex-row justify-around" ref={ref}>
                <motion.div className="progress" style={{ scaleX: animateScaleX }}></motion.div>
                <img src={logo} className="w-48 h-auto" alt="" />
                <nav className="flex flex-row justify-evenly w-1/3 ">
                    {
                        links.map(link =>
                            <a
                                key={link}
                                className={link === linkActif ? 'navLink actif' : 'navLink'}
                                onClick={() => {toggleLinkActif(link), toggleScrollActif(refs.tourisme)}}
                            >{link}</a>
                        )
                    }
                </nav>
                <div className="flex items-center">
                    <NavLink to='/' className="login px-6 py-2">se connecter</NavLink>
                </div>
            </header >
        </section >


    )
}

export default NavigationBar