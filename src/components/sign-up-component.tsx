import React, { FunctionComponent, useEffect, useState } from "react";
import CustomInput from "./form/custom-input";
import CustomButton from "./custom-button";
import { NavLink } from "react-router-dom";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useNameValidation } from "../hooks/useNameValidation";
import { useAxiosCountry } from "../api/useAxiosCountry";
import CustomInputPhone from "./form/custom-input-phone";
import { UsePhoneValidation } from "../hooks/usePhoneValidation";
import { useSignUpUser } from "../supabase/users-supabase";

export const SignUpForm: FunctionComponent = () => {
    const { emailField, handleEmailField } = useEmailValidation()
    const { nameField, handleNameField } = useNameValidation()
    const { phoneField, handlePhoneField } = UsePhoneValidation()
    const { stateAxios, getCountry } = useAxiosCountry()
    useEffect(() => {
        getCountry()
    }, [])

    const [selectedCountry, setSelectedCountry] = useState({})
    const handleSelectedCountry = (country: object) => {
        setSelectedCountry(country)
    }

    const { stateSignUpUser, signUpUser } = useSignUpUser()
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        signUpUser(emailField, nameField, phoneField)
    }


    return (
        <>
            <form className="mt-8 mx-4" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold text-center text-secondary mb-6" >S'inscrire: </h1>
                <CustomInput
                    type="email"
                    placeholder="Email@example.com"
                    name='email'
                    onChange={handleEmailField}
                    field={emailField}
                />
                <CustomInput
                    type="text"
                    placeholder="Nom et prénom(s)"
                    name="name"
                    onChange={handleNameField}
                    field={nameField}
                />
                <CustomInputPhone
                    stateAxios={stateAxios}
                    handleSelectedCountry={handleSelectedCountry}
                    onChange={(e) => handlePhoneField(selectedCountry, e)}
                    field={phoneField}
                />
                <CustomButton isLoading={stateSignUpUser.isLoading} text="Valider" />
            </form>
            <div className="w-full mb-4 mt-4 flex flex-row items-center justify-center">
                <div className="w-1/3 h-[1px] bg-background" />
                <NavLink to='/' className='mx-2 text-sm hover:text-primary'>Se connecter</NavLink>
                <div className="w-1/3 h-[1px] bg-background" />
            </div>
        </>
    )
}

export const SignUpGuid: FunctionComponent = () => {
    return (
        <>
            <h1 className=" text-white text mb-1 uppercase ">créer un compte</h1>
            <p className="text-white text-sm">Veuillez compléter le formulaire, appuyer sur valider et nous vous envoyons un email pour se connecter.</p>
        </>
    )
}


