import { FunctionComponent } from "react";
import BaseConnexion from "../components/base-connexion";
import LoginForm from "../components/login-form";
import GuidUserCard from "../components/card/guid-user-card";

const LoginPage: FunctionComponent = () => {
    const title = 'Se connecter'
    const description = 'Veuillez entrer votre adresse email, appuyer sur connexion et nous vous envoyons un email pous se connecter.'
    return (
        <BaseConnexion formConnexion={<LoginForm />} guidConnexion={<GuidUserCard title={title} description={description} />} />
    )
}
export default LoginPage