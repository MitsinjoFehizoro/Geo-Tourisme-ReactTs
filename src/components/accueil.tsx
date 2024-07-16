import { FunctionComponent } from "react";
import tetezana from '../assets/images/Bemaraha/tetezana.jpg'
import '../styles/components/_accueil.scss'
import { i_accueil } from "../styles/base/tailwind";
import CustomButton from "./custom-button";

type Props = {
    heightNavigationBar: number
}
const Accueil: FunctionComponent<Props> = ({ heightNavigationBar }) => {
    return (
        <section className="porteur" >
            <div className="fond"></div>
            <img src={tetezana} className="w-full h-auto" alt="" />

            <div className="detail h-full flex flex-row justify-evenly " style={{ paddingTop: heightNavigationBar + 'px' }}>
                <div className="flex flex-col justify-center  w-1/3">
                    <h1 className="uppercase text-2xl text-left text-primary">dream big, travel far <br /> and explore more</h1>
                    <p className="pt-2 text-background">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quidem nisi eaque sed culpa alias facere ad, deserunt officiis magni exercitationem esse ipsam sapiente earum reiciendis reprehenderit quae necessitatibus quam?</p>
                </div>
                <div className="flex justify-center items-center  w-1/3">
                    <form className="w-80 px-5 py-5 rounded-md">
                        <div className="div">
                            <div className="w-full py-2 px-4">
                                <i className="fa fa-location-dot text-sm mr-2"></i>
                                <span>Où allez-vous?</span>
                            </div>
                        </div>
                        <input className="div input" type="date" name="" id="" />
                        <div className="div flex flex-row justify-between items-center px-4">
                            <i className={`fa fa-minus ${i_accueil}`}></i>
                            <span className="w-full py-2 text-center">participants</span>
                            <i className={`fa fa-add ${i_accueil}`}></i>
                        </div>
                        <CustomButton text="Planifier" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Accueil