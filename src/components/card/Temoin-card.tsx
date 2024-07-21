import { FunctionComponent } from "react";
import profil from '../../assets/images/Bemaraha/tetezana.jpg';

const TemoinCard: FunctionComponent = () => {

    return (
        <div className="w-96 flex flex-col items-center">
            <img src={profil} className="w-32 h-32 rounded-full" alt="" />
            <p className="text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio, provident iste commodi doloribus porro, atque assumenda reprehenderit consequuntur nemo eum ad ab fugiat mollitia nisi, fugit sunt ut impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-secondary font-extrabold">ANDRY AUGUST</p>
        </div>
    )
}
export default TemoinCard