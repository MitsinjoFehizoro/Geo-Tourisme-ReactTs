import {  forwardRef, useEffect, useRef, useState } from "react";
import '../styles/components/_tourisme.scss';
import tsingy from '../assets/images/Bemaraha/tsingy.jpg';
import baobab from '../assets/images/Makay et allée des Baobabs/baobab.jpg';
import vato from '../assets/images/Bemaraha/vato.jpg';
import { motion } from 'framer-motion';
import { variants_rond, variants_rond_creux, variantsImage_1, variantsImage_2, variantsImage_3, variantsParentSlide, variantsSlide } from "../styles/animations/tourisme-variants";

const Tourisme = forwardRef((_, ref) => {
    const indiceStyle = ['w-3 h-3 rounded-full bg-primary mx-1', 'w-8 h-2 rounded-full bg-white mx-1'];
    const slideTourisme = [
        {
            title: 'TOURISME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse blanditiis distinctio repellat, voluptas odio laboriosam magnam in sapiente consequuntur reiciendis architecto porro est, nam incidunt culpa. Voluptatibus, omnis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa perferendis totam vel suscipit voluptatibus possimus facilis! Eaque nihil nisi sapiente debitis!'
        },
        {
            title: 'GEO-TOURISME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse blanditiis distinctio repellat, voluptas odio laboriosam magnam in sapiente consequuntur reiciendis architecto porro est, nam incidunt culpa. Voluptatibus, omnis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa perferendis totam vel suscipit voluptatibus possimus facilis! Eaque nihil nisi sapiente debitis, quae est possimus! Tempora ipsa earum commodi repellendus perspiciatis!'
        },
    ];

    const porteRef = useRef<HTMLDivElement>(null);
    const [widthPorte, setWidthPorte] = useState<number>(0);

    const handleWidthPorte = () => {
        if (porteRef.current) {
            setWidthPorte(porteRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        handleWidthPorte();
        window.addEventListener('resize', handleWidthPorte);
        return () => window.removeEventListener('resize', handleWidthPorte);
    }, []);

    const [showPrevSlide, setShowPrevSlide] = useState<boolean>(true);
    const handleSlide = () => {
        setShowPrevSlide(prevState => !prevState);
    };

    return (
        <section ref={ref} className="flex flex-row justify-around px-5 pt-14 pb-20">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8, once: true }} className="w-5/12">
                <div className="flex flex-row">
                    <motion.div variants={variants_rond} className="w-24 h-24 bg-secondary rounded-full"></motion.div>
                    <div className="h-full flex justify-center pl-2">
                        <motion.img variants={variantsImage_1} src={vato} alt="Vato" className="w-96 h-96 rounded-full" />
                    </div>
                </div>
                <div className="relative">
                    <motion.img variants={variantsImage_2} src={baobab} alt="Baobab" className="w-52 h-52 rounded-full absolute left-0 bottom-0 border-8 border-background" />
                    <motion.img variants={variantsImage_3} src={tsingy} alt="Tsingy" className="tsingy w-32 h-32 rounded-full absolute right-4 border-4 border-background" />
                    <motion.div variants={variants_rond_creux} className="pneu w-12 h-12 absolute bottom-24 right-0"></motion.div>
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.5, once: true }}
                variants={variantsParentSlide}
                className="w-6/12 slide flex flex-row justify-center items-center"
            >
                <i className="fa fa-angle-left text-xl text-primary px-3 py-1 rounded-full hover:bg-white cursor-pointer" onClick={handleSlide}></i>
                <div className="w-full h-full relative overflow-hidden" ref={porteRef}>
                    <motion.div
                        variants={variantsSlide}
                        initial="prev"
                        animate={showPrevSlide ? 'prev' : 'next'}
                        transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
                        className="absolute top-0 h-full flex flex-row items-center"
                    >
                        {slideTourisme.map((slide, index) => (
                            <div
                                key={index}
                                className="px-2"
                                style={{ width: widthPorte }}
                            >
                                <h1 className="text-3xl text-primary">{slide.title}</h1>
                                <p className="text-black">{slide.description}</p>
                            </div>
                        ))}
                    </motion.div>
                    <div className="absolute bottom-12 w-full flex flex-row justify-center items-center mt-4">
                        <p className={showPrevSlide ? indiceStyle[0] : indiceStyle[1]}></p>
                        <p className={!showPrevSlide ? indiceStyle[0] : indiceStyle[1]}></p>
                    </div>
                </div>
                <i className="fa fa-angle-right z-50 text-xl text-primary px-3 py-1 rounded-full hover:bg-white cursor-pointer" onClick={handleSlide}></i>
            </motion.div>
        </section>
    );
});

Tourisme.displayName = 'Tourisme';

export default Tourisme;
