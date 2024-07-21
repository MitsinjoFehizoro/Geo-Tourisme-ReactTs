import { FunctionComponent } from "react";
import '../styles/components/_why-us.scss'
import soleil from '../assets/images/Isalo/soleil.jpg'
import GarantiCard from "./card/garanti-card";
const WhyUs: FunctionComponent = () => {
    return (
        <section className="why relative overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/90"></div>
            <img src={soleil} className="w-full h-auto" alt="" />
            <div className="absolute top-0 left-0 w-full h-full pt-14 px-14">
                <h1 className="text-right text-white text-3xl">Pourquoi vous devez nous choisir ?</h1>
                <div className="h-full grid grid-cols-3 place-items-center place-content-center">
                    <GarantiCard />
                    <GarantiCard />
                    <GarantiCard />
                </div>
            </div>
        </section>
    )
}
export default WhyUs