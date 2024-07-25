import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/components/_accueil.scss'
import { i_accueil } from "../styles/base/tailwind";
import CustomButton from "./custom-button";
import { AnimatePresence, Variants, motion } from 'framer-motion'
import tetezana from '../assets/images/Bemaraha/tetezana.jpg'
import tsingy from '../assets/images/Bemaraha/tsingy.jpg'
import chute from '../assets/images/Chute de la lylie et geyser/chute2.jpg'
import gesier from '../assets/images/Chute de la lylie et geyser/gesier2.jpg'

type Props = {
    heightNavigationBar: number
}
const Accueil: FunctionComponent<Props> = ({ heightNavigationBar }) => {
    //Pour avoir la partie scrollée
    const [scrollY, setScrollY] = useState<number>(0)
    const handleScrollY = () => {
        setScrollY(window.scrollY)
    }

    //Pour avoir l'hauteur de la section
    const sectionRef = useRef<HTMLDivElement>(null)
    const [heightSection, setHeightSection] = useState<number>(0)
    const handleHeightSection = () => {
        if (sectionRef.current)
            setHeightSection(sectionRef.current.offsetHeight)
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

    //fonction calcul topDiv
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

    useEffect(() => {
        setTopDiv((heightSection - heightDiv + heightNavigationBar + scrollY) / 2)
    }, [heightSection, heightDiv, scrollY, heightNavigationBar])

    return (
        <section className="porteur" ref={sectionRef} >
            <SlideImage />
            <div className="animation flex flex-row justify-evenly absolute z-10 left-0" ref={divRef} style={{ top: topDiv + 'px' }} >
                <Introduction />
                <Formulaire />
            </div>
        </section>
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
                                className="motion w-full h-auto"
                                alt="Image en slide"
                                variants={variantsImage}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                transition={{ duration: .5, ease: 'easeInOut' }}
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
    const variantsDestination: Variants = {
        hidden: { opacity: 0, scale: 0, height: 0, transition: { when: 'afterChildren', staggerChildren: .05 } },
        visible: { opacity: 1, scale: 1, height: 'auto', transition: { when: 'beforeChildren', staggerChildren: .05 } }
    }
    const variantsDestinationChild: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    }
    const handleStateDestination = () => {
        setStateDestination(prevState => !prevState)
    }
    const menus = ["Teste", "Teste", "Teste", "Teste"]
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
                            className="motion bg-white rounded-md py-4 px-2"
                            variants={variantsDestination}
                            animate={stateDestination ? 'visible' : 'hidden'}
                        >
                            {
                                menus.map(menu => (
                                    <motion.p
                                        className="motion flex items-center px-4 w-full h-9 bg-background/50 rounded mb-1"
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