import  { FunctionComponent } from "react";
import CustomInput from "./form/custom-input";
import CustomButton from "./custom-button";
import { NavLink } from "react-router-dom";
import { useEmailValidation } from "../hooks/useEmailValidation";

export const SignUpForm: FunctionComponent = () => {
    const { emailField, handleEmailField } = useEmailValidation()
    return (
        <>
            <form className="mt-8 mx-4">
                <h1 className="text-xl font-bold text-center text-secondary mb-6" >S'inscrire: </h1>
                <CustomInput
                    type="email"
                    placeholder="Email@example.com"
                    name='email'
                    value={emailField.value}
                    onChange={handleEmailField}
                    errorMessage={emailField.errorMessage}
                />
                {/* <CustomInput type="text" placeholder="Nom et prénom(s)" />
                <CustomInput type="text" placeholder="Contact" /> */}
                <CustomButton text="Valider" />
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


