import { FunctionComponent } from "react";
import tetezana from '../assets/images/Bemaraha/tetezana.jpg'
import '../styles/components/_accueil.scss'

const Accueil: FunctionComponent = () => {
    return (
        <>
            <div className="porteur">
                <div className="fond"></div>
                <img src={tetezana} className="w-full h-auto" alt="" />
            </div>
        </>
    )
}
export default Accueil