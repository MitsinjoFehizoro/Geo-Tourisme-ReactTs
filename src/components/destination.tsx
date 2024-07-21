import { FunctionComponent } from "react";
import { p_destination } from "../styles/base/tailwind";
import DestinationCard from "./card/destination-card";
import gesier from "../assets/images/Chute de la lylie et geyser/gesier.jpg"

const Destination: FunctionComponent = () => {

    return (    
        <section className="bg-background pb-10 pt-14">
            <h1 className="text-secondary text-center text-3xl">Où allez-vous miantenant?</h1>
            <div className="flex flex-row justify-center items-center h-10 mt-4">
                <p className={`${p_destination} border-primary text-primary`}>Geo tourisme</p>
                <p className="w-14"></p>
                <p className={`${p_destination} border-background`}>Tourisme</p>
            </div>
            <div className="h-full mt-4 grid grid-cols-3 place-items-center place-content-center">
                <DestinationCard picture={gesier}/>
                <DestinationCard picture={gesier}/>
                <DestinationCard picture={gesier}/>
            </div>
        </section>
    )
}
export default Destination