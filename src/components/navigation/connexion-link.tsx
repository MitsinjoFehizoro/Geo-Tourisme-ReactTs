import { FunctionComponent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const ConnexionLink: FunctionComponent = () => {
    const { isAuth } = useAuth()
    return (
        <>
            {
                !isAuth && (
                    <div className="hidden md:flex items-center">
                        <NavLink to='/login' className='text-sm rounded-md px-4 py-2  transition ease-in duration-200 hover:bg-secondary hover:text-background mr-1'>Se connecter</NavLink>
                        <NavLink to='/signup' className="text-sm text-background rounded-md bg-primary px-6 py-2 transition ease-in duration-200 hover:bg-secondary">S'inscrire</NavLink>
                    </div>
                )
            }
        </>
    )
}

export default ConnexionLink