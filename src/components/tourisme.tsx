import { FunctionComponent, useState } from "react";
import '../styles/components/_tourisme.scss'
import tsingy from '../assets/images/Bemaraha/tsingy.jpg';
import baobab from '../assets/images/Makay et allée des Baobabs/baobab.jpg';
import vato from '../assets/images/Bemaraha/vato.jpg';
import { AnimatePresence, motion } from 'framer-motion'
import { variants_rond, variants_rond_creux, variants_slide, variantsImage_1, variantsImage_2, variantsImage_3 } from "../styles/animations/tourisme-variants";

const Tourisme: FunctionComponent = () => {
    const slideTourisme = [
        {
            title: 'TOURISME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse blanditiis distinctio repellat, voluptas odio laboriosam magnam in sapiente consequuntur reiciendis architecto porro est, nam incidunt culpa. Voluptatibus, omnis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa perferendis totam vel suscipit voluptatibus possimus facilis! Eaque nihil nisi sapiente debitis!'
        },
        {
            title: 'GEO-TOURISME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse blanditiis distinctio repellat, voluptas odio laboriosam magnam in sapiente consequuntur reiciendis architecto porro est, nam incidunt culpa. Voluptatibus, omnis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa perferendis totam vel suscipit voluptatibus possimus facilis! Eaque nihil nisi sapiente debitis, quae est possimus! Tempora ipsa earum commodi repellendus perspiciatis!'
        },
    ]
    // const [stateSlide, setStateSlide]  = useState<number>(0)

    return (
        <section className="flex flex-row justify-around px-5 pt-14 pb-20">
            <motion.div initial='offscreen' whileInView='onscreen' viewport={{ amount: .8, once: true }} className="image">
                <div className="flex flex-row">
                    <motion.div variants={variants_rond} className="w-24 h-24 bg-secondary rounded-full"></motion.div>
                    <div className="h-full flex justify-center pl-2">
                        <motion.img variants={variantsImage_1} src={vato} alt="" className="w-96 h-96 rounded-full" />
                    </div>
                </div>
                <div className="relative">
                    <motion.img variants={variantsImage_2} src={baobab} alt="" className="w-52 h-52 rounded-full absolute left-0 bottom-0 border-8 border-background " />
                    <motion.img variants={variantsImage_3} src={tsingy} alt="" className="tsingy w-32 h-32 rounded-full absolute border-4 border-background " />
                    <motion.div variants={variants_rond_creux} className="pneu w-12 h-12"></motion.div>
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView='onscreen'
                viewport={{ amount: 0.5, once: true }}
                variants={variants_slide}
                className="slide flex flex-col justify-center"
            >
                <div className="mx-4">
                    <h1 className="text-3xl text-primary">TOURISME</h1>
                    <p className="text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, unde cum! Dicta, voluptate! Magni doloribus perferendis autem officiis velit. Sint itaque minima nobis autem perspiciatis obcaecati dolore consequatur repellat architecto!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus esse, ea, voluptas dignissimos fugit temporibus voluptate aliquid natus neque asperiores maxime. Velit sit a laudantium quisquam deleniti eligendi dicta illo!
                    </p>
                </div>

            </motion.div>
        </section>
    )
}
export default Tourisme