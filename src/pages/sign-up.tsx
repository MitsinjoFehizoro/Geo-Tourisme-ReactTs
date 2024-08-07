import { FunctionComponent, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import inscription from '../assets/images/background/inscription.png'
import electricite from '../assets/images/background/electricite.png'
import StandardCard from "../components/card/standard-card";
import CustomInput from "../components/form/custom-input";
import CustomButton from "../components/custom-button";
import { NavLink } from "react-router-dom";

const SignUp: FunctionComponent = () => {

    const sendVerification = async () => {
        let { data, error } = await supabase.auth.signInWithOtp({
            email: 'fehizoroandriatsitohaina@gmail.com'
        })
        if (error) {
            console.error('Error sending verification code:', error);
        } else {
            console.log('Verification code sent!');
        }
    }

    const Logout = async () => {
        let { error } = await supabase.auth.signOut()
        if (error) {
            console.error('Error deconnexion:', error.message);
        } else {
            console.log('Deconnexion reussite !');
        }
    }
    const [user, setUser] = useState<any>()
    const User = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
    }
    useEffect(() => {
        User()
    }, [])
    return (
        <section className="w-full h-[100vh] bg-background flex justify-center items-center">
            <div className="w-9/12 h-full flex flex-row  ">
                <div className="w-1/2 h-full flex items-center">
                    <div className="w-96">
                        <StandardCard>
                            <form className="mt-8 mx-4">
                                <h1 className="text-xl font-bold text-center text-secondary mb-6" >S'inscrire: </h1>
                                <CustomInput type="email" placeholder="Email@example.com" />
                                <CustomInput type="text" placeholder="Nom et prénom(s)" />
                                <CustomInput type="text" placeholder="Contact" />
                                <CustomButton text="Valider" />
                            </form>
                            <NavLink to='/' className=' absolute top-6 left-8'><i className="fa fa-arrow-left text-primary text-sm hover:text-secondary cursor-pointer"></i></NavLink>
                            <div className="w-full mb-4 mt-4 flex flex-row items-center justify-center">
                                <div className="w-1/3 h-[1px] bg-background" />
                                <NavLink to='/' className='mx-2 text-sm hover:text-primary'>Se connecter</NavLink>
                                <div className="w-1/3 h-[1px] bg-background" />
                            </div>
                        </StandardCard>
                    </div>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="relative w-5/6 h-5/6 px-8 py-10 bg-primary/70 rounded-3xl">
                        <div className="w-2/3">
                            <p className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#FFE35F]">
                                <i className="fa fa-lightbulb text-white"></i>
                            </p>
                            <h1 className=" text-white text mb-1 uppercase ">créer un compte</h1>
                            <p className="text-white text-sm">Veuillez compléter le formulaire, appuyer sur valider et nous vous envoyons un email pour se connecter.</p>
                        </div>
                        <img src={inscription} className="w-96 absolute bottom-0 right-[-80px]" />
                        <div className="w-[80px] h-[80px] shadow absolute bottom-24 left-[-40px] flex items-center justify-center rounded-full bg-white">
                            <img src={electricite} className="w-8" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUp