import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/components/_accueil.scss'
import { i_accueil } from "../styles/base/tailwind";
import CustomButton from "./custom-button";
import { AnimatePresence, Variants, motion } from 'framer-motion'
import tetezana from '../assets/images/Bemaraha/tetezana.jpg'
import tsingy from '../assets/images/Bemaraha/tsingy.jpg'
import chute from '../assets/images/Chute de la lylie et geyser/chute2.jpg'
import gesier from '../assets/images/Chute de la lylie et geyser/gesier2.jpg'
import { useLink } from "../hooks/useLink";
import { useHeightNav } from "../hooks/useHeightNav";
import { variantsDestination, variantsDestinationChild } from "../styles/animations/accueil-variants";

const Accueil: FunctionComponent = () => {
    const [scrollY, setScrollY] = useState<number>(0)
    const handleScrollY = () => {
        setScrollY(window.scrollY)
    }

    //Pour avoir l'hauteur de la section
    const porteurRef = useRef<HTMLDivElement>(null)
    const [heightSection, setHeightSection] = useState<number>(0)
    const handleHeightSection = () => {
        if (porteurRef.current)
            setHeightSection(porteurRef.current.offsetHeight)
    }

    //Pour avoir l'hauteur de la div
    const divRef = useRef<HTMLDivElement>(null)
    const [heightDiv, setHeightDiv] = useState<number>(0)
    const handleHeightDiv = () => {
        if (divRef.current)
            setHeightDiv(divRef.current.offsetHeight)
    }

    const handleResize = () => {
        handleHeightSection()
        handleHeightDiv()
    }

    //calcul topDiv
    const [topDiv, setTopDiv] = useState<number>(0)
    useEffect(() => {
        handleResize()
        handleScrollY()
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScrollY)
        return () => { //nettoyage quand le composant est démonté
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScrollY)
        }
    }, [])

    const { heightNav } = useHeightNav()
    useEffect(() => {
        setTopDiv((heightSection - heightDiv + heightNav + scrollY) / 2)
    }, [heightSection, heightDiv, scrollY, heightNav])

    const { links, toggleLinkActif } = useLink()

    return (
        <motion.section
            viewport={{ amount: .8 }}
            onViewportEnter={() => toggleLinkActif('accueil')}
            ref={links['accueil'].refDestination}
        >
            <div className="porteur" ref={porteurRef} >
                <SlideImage />
                <div className="animation flex flex-row justify-evenly absolute z-10 left-0" ref={divRef} style={{ top: topDiv + 'px' }} >
                    <Introduction />
                    <Formulaire />
                </div>
            </div>
        </motion.section>

    )
}

const SlideImage: FunctionComponent = () => {

    const images = [tetezana, chute, tsingy, gesier]
    const [indexImageVisible, setIndexImageVisible] = useState<number>(0)
    const variantsImage: Variants = {
        hidden: { opacity: 0.5 },
        visible: { opacity: 1 },
        exit: { opacity: 0.5 }
    }

    useEffect(() => {
        const changeInterval = setInterval(() => {
            setIndexImageVisible(prevIndex => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(changeInterval)
    }, [images.length, indexImageVisible])

    return (
        <div className="slide">
            <div className="fond"></div>
            <AnimatePresence>
                {
                    images.map((src, index) =>
                        index === indexImageVisible && (
                            <motion.img
                                key={index}
                                src={src}
                                className="w-full h-auto"
                                alt="Image en slide"
                                variants={variantsImage}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                            />
                        )
                    )
                }
            </AnimatePresence>
        </div>
    )
}
const Introduction: FunctionComponent = () => {
    return (
        <div className="flex flex-col justify-center  w-1/3">
            <h1 className="uppercase text-2xl text-left text-primary">dream big, travel far <br /> and explore more</h1>
            <p className="pt-2 text-background">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quidem nisi eaque sed culpa alias facere ad, deserunt officiis magni exercitationem esse ipsam sapiente earum reiciendis reprehenderit quae necessitatibus quam?</p>
        </div>
    )
}
const Formulaire: FunctionComponent = () => {
    const [stateDestination, setStateDestination] = useState<boolean>(false)
    const handleStateDestination = () => {
        setStateDestination(prevState => !prevState)
    }
    const menus = ["Teste1", "Teste2", "Teste3", "Teste4"]
    return (
        <div className="flex justify-center items-center  w-1/3">
            <form className="w-80 px-5 py-5 rounded-md">
                <div className="relative">
                    <div
                        className="flex flex-row justify-between items-center w-full h-10 px-4 mb-2 bg-white rounded-md cursor-pointer"
                        onClick={handleStateDestination}
                    >
                        <p>Où allez-vous?</p>
                        {
                            stateDestination ? (
                                <i className="fa fa-caret-down text-sm mr-2"></i>
                            ) : (
                                <i className="fa fa-caret-up text-sm mr-2"></i>
                            )
                        }
                    </div>
                    <div className="absolute w-full h-0">
                        <motion.div
                            className="bg-white rounded-md py-4 px-2"
                            variants={variantsDestination}
                            animate={stateDestination ? 'visible' : 'hidden'}
                        >
                            {
                                menus.map(menu => (
                                    <motion.p
                                        key={menu}
                                        className="flex items-center px-4 w-full h-9 bg-background/50 rounded mb-1"
                                        variants={variantsDestinationChild}
                                    >
                                        {menu}
                                    </motion.p>
                                ))
                            }
                        </motion.div>
                    </div>

                </div>
                <input className="div input" type="date" name="" id="" />
                <div className="div flex flex-row justify-between items-center px-4">
                    <i className={`fa fa-minus ${i_accueil}`}></i>
                    <span className="w-full py-2 text-center">participants</span>
                    <i className={`fa fa-add ${i_accueil}`}></i>
                </div>
                <CustomButton text="Planifier" />
            </form>
        </div>
    )
}
export default Accueil