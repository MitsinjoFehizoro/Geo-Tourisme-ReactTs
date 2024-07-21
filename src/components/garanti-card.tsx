import { FunctionComponent } from "react";
import '../styles/components/_garanti-card.scss'

const GarantiCard: FunctionComponent = () => {

    return (
        <div className="w-60 mb-10 flex flex-col items-center">
            <h2 className="w-44 pb-2 mb-2 inline text-center text-white border-b-2 border-background/50">AMBUANCE ASSURE</h2>
            <p className="truncature text-background/80 text-center text-sm mt-2 mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam totam sint cum officiis molestiae, nobis consequatur aliquam, possimus sapiente rerum pariatur veniam earum accusantium eveniet repellendus quibusdam odio quas minima.
            </p>
            <p className="w-44 text-center text-xs text-background pb-1 pt-2  border-2 border-background rounded-full ">
                VOIR PLUS DE DETAIL
            </p>
        </div>
    )
}

export default GarantiCard