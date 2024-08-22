import { FunctionComponent } from "react";
import profil from '../../assets/images/Bemaraha/tetezana.jpg';

const TemoinCard: FunctionComponent = () => {

    return (
        <div className="w-96 flex flex-col items-center">
            <img src={profil} className="w-32 h-32 rounded-full" alt="" />
            <p className="text-center my-4">
            Ce voyage a dépassé toutes mes attentes ! Chaque étape était une découverte fascinante, remplie de moments de pure magie et de défis palpitants. La qualité de l'accompagnement était exceptionnelle.
            </p>
            <p className="text-secondary font-extrabold mb-12 md:mb-0 uppercase">mitsinjo fehizoro</p>
        </div>
    )
}
export default TemoinCard