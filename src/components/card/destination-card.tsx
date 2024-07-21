import { FunctionComponent } from "react";
import '../../styles/components/card/_destination-card.scss'
type Props = {
    picture: string
}

const DestinationCard: FunctionComponent<Props> = ({ picture }) => {

    return (
        <div className="flex justify-center items-center flex-col w-80 mb-14">
            <div className="relative w-full h-80 flex justify-center">
                <img src={picture} alt="" className="w-full h-full" />
                <div className="destination_title w-52  bg-secondary py-2">
                    <p className="text-center text-white text-xl pb-1">GESIER</p>
                    <p className="text-center text-background text-sm">A partir de 500.000 Ariary</p>
                </div>
            </div>
            <p className="truncature text-center pt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta sint dolore modi dolor sequi. Voluptas libero quos at molestias nihil, laboriosam animi facere iusto
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod consequatur assumenda numquam. Molestiae aperiam saepe dolorum facilis voluptates soluta tenetur rem. Tempora, iure suscipit voluptatem quasi non deserunt labore recusandae!
            </p>
            <p className="w-36 mt-6 pb-2 border-b-2 border-black text-sm text-center">VOIR PLUS DE DETAIL</p>
        </div>
    )
}
export default DestinationCard