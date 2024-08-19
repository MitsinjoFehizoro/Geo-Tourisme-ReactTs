import { FunctionComponent } from "react";
import CustomInput from "../form/custom-input";
import CustomTextarea from "../form/custom-textarea";
import CustomButton from "../custom-button";
import { motion } from 'framer-motion'
import { variantsContactCard } from "../../styles/animations/contact-variants";

const ContactCard: FunctionComponent = () => {
    return (
        <motion.form
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .5 }}
            variants={variantsContactCard}
            className="w-5/12 h-full p-8 bg-white rounded">
            <h1 className="text-3xl text-primary">Contactez-nous</h1>
            <div className="flex flex-row py-2">
                <p className="w-1/2"><CustomInput type="text" placeholder="Votre nom" /></p>
                <span className="w-4"></span>
                <p className="w-1/2"><CustomInput type="email" placeholder="Votre@email.com" /></p>
            </div>
            <CustomTextarea />
            <CustomButton text="Envoyer" />
        </motion.form>
    )
}
export default ContactCard