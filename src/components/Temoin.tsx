import { FunctionComponent } from "react";
import TemoinCard from "./card/Temoin-card";
import '../styles/components/_temoin.scss'
const Temoin: FunctionComponent = () => {

    return (
        <section className="bg-background py-14 px-14 flex flex-col items-end relative">
            <h1 className="text-3xl text-secondary text-right mb-1">Ce que nos clients disent ?</h1>
            <p className="w-1/3 text-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum veritatis consequuntur vero. </p>
            <div className="w-full flex justify-around">
                <TemoinCard />
                <TemoinCard />
            </div>
            <div className="style">
                <div className="w-56 h-8 bg-white rounded-full mb-2"></div>
                <div className="w-44 h-8 bg-primary rounded-full mb-2"></div>
                <div className="w-32 h-8 bg-secondary rounded-full"></div>
            </div>
        </section>
    )
}
export default Temoin