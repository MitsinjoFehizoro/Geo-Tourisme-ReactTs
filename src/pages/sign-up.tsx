import { FunctionComponent } from "react";
import BaseConnexion from "../components/base-connexion";
import { SignUpForm, SignUpGuid } from "../components/sign-up-component";

const SignUp: FunctionComponent = () => {
    return (
        <BaseConnexion formConnexion={<SignUpForm />} guidConnexion={<SignUpGuid />} />
    )
}

export default SignUp