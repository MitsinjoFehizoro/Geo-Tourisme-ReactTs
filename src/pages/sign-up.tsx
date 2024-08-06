import { FunctionComponent, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";

const SignUp: FunctionComponent = () => {

    const sendVerification = async () => {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: 'mitsinjofehizoro@gmail.com'
        })
        if (error) {
            console.error('Error sending verification code:', error.message);
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
    useEffect(()=>{
        User()
    }, [])
    return (
        <section className=" w-full h-96 flex justify-center items-center">
            {
                user && (
                    <div>{user.email}</div>
                )
            }
            <p
                onClick={sendVerification}
                className="w-36 flex justify-center items-center bg-primary rounded text-white cursor-pointer">Teste</p>

            <p
                onClick={Logout}
                className="w-36 flex justify-center items-center bg-primary rounded text-white cursor-pointer">Logout</p>
        </section>
    )
}
export default SignUp