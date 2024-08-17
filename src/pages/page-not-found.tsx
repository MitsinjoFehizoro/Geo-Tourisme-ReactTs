import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const PageNotFound: FunctionComponent = () => {
    return (
        <section className="w-full h-[100vh] flex items-center justify-center">
            <div className="flex flex-col items-center pb-20">
                <h1 className="text-[8em] text-secondary mb-[-25px]">Oups!</h1>
                <h1 className="text-xl text-secondary uppercase mb-2">404 - page non trouvée</h1>
                <p className="text-center">Désolé! La page que vous rechercher n'existe pas ou l'adresse <br /> est incorrecte. Essayer de revenir à l'accueil.</p>
                <NavLink to='/' className='px-8 py-2 my-4 text-white uppercase text-xs font-bold bg-primary rounded-full transition hover:bg-secondary ' >revenir a l'accueil</NavLink>
            </div>
        </section>
    )
}
export default PageNotFound