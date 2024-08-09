import React, { FunctionComponent } from "react";
import { useEmailValidation } from "../hooks/useEmailValidation";
import CustomButton from "./custom-button";
import { NavLink } from "react-router-dom";
import CustomInput from "./form/custom-input";
import { useLoginUser } from "../supabase/users-supabase";

const LoginForm: FunctionComponent = () => {
    const { emailField, handleEmailField } = useEmailValidation()
    const { stateLoginUser, loginUser } = useLoginUser()
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(emailField)
    }
    return (
        <>
            <form className="mt-8 mx-4" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold text-center text-secondary mb-6" >Se connecter : </h1>
                <CustomInput
                    type="email"
                    placeholder="Email@example.com"
                    name='email'
                    onChange={handleEmailField}
                    field={emailField}
                />
                <div className="mt-[-8px]">
                    <CustomButton isLoading={stateLoginUser.isLoading} text="Connexion" />
                </div>

            </form>
            <div className="w-full mb-4 mt-4 flex flex-row items-center justify-center">
                <div className="w-1/3 h-[1px] bg-background" />
                <NavLink to='/' className='mx-2 text-sm hover:text-primary'>Créer un compte</NavLink>
                <div className="w-1/3 h-[1px] bg-background" />
            </div>
        </>
    )
}
export default LoginForm