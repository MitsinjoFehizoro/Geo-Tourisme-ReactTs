import { FunctionComponent } from "react";
import { useEmailValidation } from "../hooks/useEmailValidation";
import CustomButton from "./custom-button";
import { NavLink } from "react-router-dom";
import CustomInput from "./form/custom-input";

const LoginForm: FunctionComponent = () => {
    const { emailField, setEmailField } = useEmailValidation()
    return (
        <>
            <form className="mt-8 mx-4">
                <h1 className="text-xl font-bold text-center text-secondary mb-6" >Se connecter : </h1>
                <CustomInput
                    type="email"
                    placeholder="Email@example.com"
                    name='email'
                    onChange={() => { }}
                    field={emailField}
                />
                <CustomButton isLoading={} text="Connexion" />
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