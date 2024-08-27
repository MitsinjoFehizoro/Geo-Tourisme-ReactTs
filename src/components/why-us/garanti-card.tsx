import { FunctionComponent } from "react";
import '../../styles/components/card/_garanti-card.scss'

type Props = {
    title: string,
    description: string
}
const GarantiCard: FunctionComponent<Props> = ({ title, description }) => {

    return (
        <div className="w-80 mb-14 flex flex-col items-center">
            <h2 className="w-48 pb-2 mb-2 inline text-center text-white border-b-2 border-background/80 uppercase">{title}</h2>
            <p className="truncature w-full text-white text-center mt-2 mb-6">{description}</p>
            <p className="w-44 text-center text-xs text-background pb-1 pt-2  border-2 border-background rounded-full ">
                VOIR PLUS DE DETAIL
            </p>
        </div>
    )
}

export default GarantiCard