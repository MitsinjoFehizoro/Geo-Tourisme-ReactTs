import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/components/_navigation-bar.scss';
import logo from '../assets/logo/logo-color.png';
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLink } from "../hooks/useLink";
import { useHeightNav } from "../hooks/useHeightNav";
import { useAuth } from "../hooks/useAuth";

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

    const { isAuth,stateAuth ,clientAuth, logout } = useAuth()
    const [stateProfil, setStateProfil] = useState(false)
    const { heightNav } = useHeightNav()
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
            {
                !isAuth && (
                    <div className="flex items-center">
                        <NavLink to='/login' className='text-sm rounded-md px-4 py-2  transition ease-in duration-200 hover:bg-secondary hover:text-background mr-1'>Se connecter</NavLink>
                        <NavLink to='/signup' className="text-sm text-background rounded-md bg-primary px-6 py-2 transition ease-in duration-200 hover:bg-secondary">S'inscrire</NavLink>
                    </div>
                )
            }
            {
                isAuth && clientAuth && (
                    <div className="flex items-center relative" onMouseEnter={() => setStateProfil(true)} onMouseLeave={() => setStateProfil(false)}>
                        <div className="z-10 py-1 px-4 flex flex-row items-center cursor-pointer">
                            <p className="w-9 h-9 text-sm flex items-center justify-center bg-secondary border-2 border-primary rounded-full text-background capitalize">{clientAuth.name.split(' ').at(-1)?.substring(0, 2)}</p>
                            <p className="max-w-24 mx-2 text-sm text-ellipsis overflow-hidden capitalize">{clientAuth.name.split(' ').at(-1)}</p>
                            {
                                stateProfil ? (
                                    <i className="w-2 text-xs fa fa-caret-down mr-1"></i>
                                ) : (
                                    <i className="w-2 text-xs fa fa-caret-right mr-1"></i>
                                )
                            }
                        </div>
                        <div className={`${stateProfil ? 'block' : 'hidden'} absolute bg-background rounded-b p-4`} style={{ top: heightNav - 5 }}>
                            <NavLink to='' className="flex flex-row items-center mb-1 py-2 px-4 rounded bg-white border-2 border-white hover:shadow transition ease-in duration-100">
                                <i className="fa-regular fa-address-card text-lg"></i>
                                <span className='px-2 text-sm'>Mon Profil</span>
                            </NavLink>
                            <p className="w-48 flex flex-row items-center py-2 px-4 rounded-md bg-white cursor-pointer border-2 border-white hover:shadow transition ease-in duration-100">
                                <i className="fa fa-right-from-bracket text-lg"></i>
                                <span className='px-2 text-sm'>Se deconnecter</span>
                            </p>
                        </div>
                    </div>

                )
            }

        </header >


    )
}

export default NavigationBar