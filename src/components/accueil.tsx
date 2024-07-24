import { FunctionComponent, useEffect, useState } from "react";
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
        console.log(indexImageVisible);
        return () => clearInterval(changeInterval)
    }, [images.length, indexImageVisible])

    return (

        <section className="porteur" >
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

            <div className="detail h-full flex flex-row justify-evenly " style={{ paddingTop: heightNavigationBar + 'px' }}>
                <Introduction />
                <Formulaire />
            </div>

        </section>
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
    return (
        <div className="flex justify-center items-center  w-1/3">
            <form className="w-80 px-5 py-5 rounded-md">
                <div className="div">
                    <div className="w-full py-2 px-4">
                        <i className="fa fa-location-dot text-sm mr-2"></i>
                        <span>Où allez-vous?</span>
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