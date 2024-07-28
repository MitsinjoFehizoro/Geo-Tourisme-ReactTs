import { FunctionComponent, useEffect, useRef } from "react";
import '../styles/components/_navigation-bar.scss';
import logo from '../assets/logo/logo-color.png';
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLink } from "../hooks/useLink";

type Props = {
    onHeightChange: (h: number) => void
}

const NavigationBar: FunctionComponent<Props> = ({ onHeightChange }) => {
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

    const { links, linkActif, toggleLinkActif, toggleScrollActif } = useLink()

    return (
        <section>
            <header className="flex flex-row justify-around" ref={ref}>
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
                    <NavLink to='/' className="login px-6 py-2">se connecter</NavLink>
                </div>
            </header >
        </section >


    )
}

export default NavigationBar