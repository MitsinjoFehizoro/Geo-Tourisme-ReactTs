import { FunctionComponent } from "react";
import tsingy from '../assets/images/Bemaraha/tsingy.jpg'
import ContactCard from "./card/contact-card";
import InfoCard from "./card/info-card";
const Contact: FunctionComponent = () => {

    return (
        <section className="relative">
            <div className="w-full h-60 "></div>
            <div className="w-full h-96 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/70"></div>
                <img src={tsingy} className="w-full h-auto" alt="" />
            </div>
            <div className="absolute top-14 w-full h-96 flex flex-row justify-between px-14">
                <InfoCard />
                <ContactCard />
            </div>
        </section>

    )
}
export default Contact