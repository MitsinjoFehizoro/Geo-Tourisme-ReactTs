import React, { FunctionComponent } from "react";
import CustomInput from "../form/custom-input";
import CustomTextarea from "../form/custom-textarea";
import CustomButton from "../custom-button";
import { motion } from 'framer-motion'
import { variantsContactCard } from "../../styles/animations/contact-variants";
import { useAuth } from "../../hooks/useAuth";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { useSuggesionValidation } from "../../hooks/useSuggestionValidation";
import { useCreateContact } from "../../supabase/contacts-supabase";

const ContactCard: FunctionComponent = () => {
    const { isAuth } = useAuth()
    const { emailField, handleEmailField } = useEmailValidation()
    const { suggestionField, handleSuggestionField, clearField } = useSuggesionValidation()
    const { stateCreateContact, createContact } = useCreateContact()
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        createContact(suggestionField, clearField, emailField)
    }
    return (
        <motion.form
            onSubmit={handleSubmit}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .5 }}
            variants={variantsContactCard}
            className="w-full lg:w-5/12 h-auto lg:h-full p-6 md:p-8 bg-white rounded">
            <h1 className="text-2xl lg:text-3xl text-primary mb-4">Contactez-nous</h1>
            {
                !isAuth && (
                    <CustomInput
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        onChange={handleEmailField}
                        field={emailField}
                    />
                )
            }
            <CustomTextarea
                field={suggestionField}
                onChange={handleSuggestionField}
                name="description"
                placeholder="Votre message ..."
            />
            <CustomButton text="Envoyer" isLoading={stateCreateContact.isLoading} />
        </motion.form>
    )
}
export default ContactCard