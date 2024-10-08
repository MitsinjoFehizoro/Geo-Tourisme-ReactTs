import { FunctionComponent } from "react";
import { i_contact } from "../../styles/base/tailwind";
import { motion } from 'framer-motion'
import { variantsInfoCard } from "../../styles/animations/contact-variants";

const InfoCard: FunctionComponent = () => {

    return (
        <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .5 }}
            variants={variantsInfoCard}
            className="w-full lg:w-6/12 h-auto lg:h-full p-6 md:p-8 bg-white rounded mb-8 lg:mb-0">
            <h1 className="text-2xl lg:text-3xl text-primary">Information de contact</h1>
            <div className="mt-2 lg:mt-4">
                <p className="text-sm">Vous pouvez nous trouver à :</p>
                <p>Bloc 13/Porte 444, Cur Vontovorona, Antananarivo 104</p>
            </div>
            <div className="mt-2 lg:mt-4">
                <p className="text-sm">Heure d'ouverture : </p>
                <p>Lundi - Vendredi : 09h00 - 16h00 / Samedi : 09h00 - 11h00</p>
            </div>
            <div className="mt-2 lg:mt-4">
                <p className="text-sm">Téléphone : </p>
                <p>034 95 290 29 / 038 10 230 44</p>
            </div>
            <div className="mt-2 lg:mt-4">
                <p className="text-sm">Email : </p>
                <p>mitsinjofehizoro@gmail.com</p>
            </div>
            <div className="mt-4 w-64 flex flex-row justify-between">
                <i className={`fa-brands fa-linkedin-in ${i_contact}`}></i>
                <i className={`fa-brands fa-facebook-f ${i_contact}`}></i>
                <i className={`fa-brands fa-twitter ${i_contact}`}></i>
                <i className={`fa-brands fa-instagram ${i_contact}`}></i>
                <i className={`fa fa-envelope ${i_contact}`}></i>
            </div>
        </motion.div>
    )
}

export default InfoCard