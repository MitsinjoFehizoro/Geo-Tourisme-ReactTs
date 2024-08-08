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
            className="w-full h-[100vh] bg-background flex justify-center items-center">
            <div className="w-9/12 h-full flex flex-row  ">
                <div className="w-1/2 h-full flex items-center">
                    <div className="w-96">
                        <StandardCard>
                            <NavLink to='/' className=' absolute top-6 left-8'><i className="fa fa-arrow-left text-primary text-sm hover:text-secondary cursor-pointer"></i></NavLink>
                            {formConnexion}
                        </StandardCard>
                    </div>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="relative w-5/6 h-5/6 px-8 py-10 bg-primary/70 rounded-3xl">
                        <div className="w-2/3">
                            <p className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#FFE35F]">
                                <i className="fa fa-lightbulb text-white"></i>
                            </p>
                            {guidConnexion}
                        </div>
                        <img src={inscription} className="w-96 absolute bottom-0 right-[-80px]" />
                        <div className="w-[80px] h-[80px] shadow absolute bottom-24 left-[-40px] flex items-center justify-center rounded-full bg-white">
                            <img src={electricite} className="w-8" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BaseConnexion