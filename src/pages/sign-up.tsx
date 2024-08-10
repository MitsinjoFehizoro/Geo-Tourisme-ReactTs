import { FunctionComponent } from "react";
import BaseConnexion from "../components/base-connexion";
import SignUpForm from "../components/sign-up-form";
import GuidUserCard from "../components/card/guid-user-card";

const SignUp: FunctionComponent = () => {
    
    const title = 'créer un compte'
    const description = 'Veuillez compléter le formulaire, appuyer sur valider et nous vous envoyons un email pour se connecter.'
    return (
        <BaseConnexion formConnexion={<SignUpForm />} guidConnexion={<GuidUserCard title={title} description={description} />} />
    )
}

export default SignUp