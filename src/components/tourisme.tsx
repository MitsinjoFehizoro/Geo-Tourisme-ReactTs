import { FunctionComponent } from "react";
import '../styles/components/_tourisme.scss'
import tsingy from '../assets/images/Bemaraha/tsingy.jpg';
import baobab from '../assets/images/Makay et allée des Baobabs/baobab.jpg';
import vato from '../assets/images/Bemaraha/vato.jpg';

const Tourisme: FunctionComponent = () => {

    return (
        <section className="flex flex-row justify-around px-5 py-14">
            <div className="image ">
                <div className="flex flex-row">
                    <div className="w-24 h-24 bg-secondary rounded-full"></div>
                    <div className="h-full flex justify-center pl-2">
                        <img src={vato} alt="" className="w-96 h-96 rounded-full" />
                    </div>
                </div>
                <div className="relative">
                    <img src={baobab} alt="" className="w-52 h-52 rounded-full absolute left-0 bottom-0 border-8 border-background "/>
                    <img src={tsingy} alt="" className="tsingy w-32 h-32 rounded-full absolute border-4 border-background "/>
                    <div className="pneu w-12 h-12"></div>
                </div>
            </div>
            <div className="slide px-2 flex flex-col justify-center">
                <h1 className="text-3xl text-primary">TOURISME</h1>
                <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse blanditiis distinctio repellat, voluptas odio laboriosam magnam in sapiente consequuntur reiciendis architecto porro est, nam incidunt culpa. Voluptatibus, omnis voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis totam vel suscipit voluptatibus possimus facilis! Eaque nihil nisi sapiente debitis, quae est possimus! Tempora ipsa earum commodi repellendus perspiciatis!
                </p>
            </div>
        </section>
    )
}
export default Tourisme