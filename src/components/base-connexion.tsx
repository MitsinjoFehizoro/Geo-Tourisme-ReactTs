import { FunctionComponent, ReactNode } from "react";
import inscription from '../assets/images/background/inscription.png'
import electricite from '../assets/images/background/electricite.png'
import StandardCard from "./card/standard-card";
import { NavLink } from "react-router-dom";

type Props = {
    formConnexion: ReactNode,
    guidConnexion: ReactNode
}
const BaseConnexion: FunctionComponent<Props> = ({ formConnexion, guidConnexion }) => {
    return (
        <section
            className="w-full overflow-hidden min-h-[100vh] px-4 sm:px-8 lg:px-14 py-14 md:py-0 bg-background flex flex-col-reverse md:flex-row justify-evenly items-center">
            <div className="w-full md:w-5/12 lg:w-1/3">
                <StandardCard>
                    <NavLink to='/' className=' absolute top-6 left-8'><i className="fa fa-arrow-left text-primary text-sm hover:text-secondary cursor-pointer"></i></NavLink>
                    {formConnexion}
                </StandardCard>
            </div>
            <div className="hidden md:block md:w-5/12 lg:w-1/3 bg-primary/70 rounded-3xl">
                <div className="w-2/3 px-8 py-10">
                    <p className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#FFE35F]">
                        <i className="fa fa-lightbulb text-white"></i>
                    </p>
                    {guidConnexion}
                </div>
                <div className="w-full  flex justify-end ml-16  pr-[-400px]">
                    <img src={inscription} className="w-4/6 "/>
                </div>
                <div className="w-[80px] h-[80px] shadow absolute bottom-24 left-[-40px] flex items-center justify-center rounded-full bg-white">
                    <img src={electricite} className="w-8" alt="" />
                </div>
            </div>
        </section>
    )
}
export default BaseConnexion