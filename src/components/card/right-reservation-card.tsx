import { FunctionComponent, useState } from "react"
import { i_reservation } from "../../styles/base/tailwind"
import '../../styles/components/card/_right-reservation-card.scss'
const RightReservationCard: FunctionComponent = () => {
    const [nbLocaux, setNbLocaux] = useState<number>(0)
    const [nbStranger, setNbStranger] = useState<number>(0)
    return (
        <div className="w-3/6 p-12 bg-white shadow rounded">
            <div className="flex flex-row justify-between">
                <div className="pr-4">
                    <p className="text-sm">Nous allons à</p>
                    <h1 className="text-xl text-secondary capitalize">Andringitra Nord-est</h1>
                </div>
                <div className="text-right">
                    <p className="text-sm">Pendant 5 jours, le :</p>
                    <h1 className="text-sm text-secondary capitalize">
                        18 septembre 2024 - 28 septembre 2024
                    </h1>
                </div>
            </div>
            <Separation />
            <div>
                <h1 className="text-primary mb-2">Concernant notre destination</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum, fugit exercitationem temporibus optio nulla quae eum repudiandae, quidem qui magni rem praesentium similique, blanditiis vel! Quos officia repellat numquam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus earum maxime aliquid voluptates debitis, quia reprehenderit maiores consequuntur labore corporis saepe tempora neque aliquam voluptatibus cumque veniam. Reiciendis, dolores ex!
                </p>
            </div>
            <Separation />
            <table className="rightTable w-full text-left text-sm">
                <thead>
                    <tr>
                        <th className="text-primary text-base">Participants</th>
                        <th className="text-sm text-secondary">Montant / personne</th>
                        <th className="text-sm text-secondary">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                <i onClick={() => setNbLocaux(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                <p className="text-center mt-1 pb-1">{nbLocaux} locaux</p>
                                <i onClick={() => setNbLocaux(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                            </div>
                        </td>
                        <td>500 000 Ariary</td>
                        <td>1 000 000 Ariary</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                                <i onClick={() => setNbStranger(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
                                <p className="text-center mt-1 pb-1">{nbStranger} étrangers</p>
                                <i onClick={() => setNbStranger(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
                            </div>
                        </td>
                        <td>500 000 Ariary</td>
                        <td>1 000 000 Ariary</td>
                    </tr>
                </tbody>
            </table>
            <Separation />
            <div className="flex items-center justify-between">
                <h1 className="text-primary">Montant à payer</h1>
                <p className="text-secondary text-sm">1 800 000 Ariary</p>
            </div>
        </div>
    )
}

export default RightReservationCard

const Separation = () => {
    return (
        <div className="my-6 w-full h-[1px] bg-background" />
    )
}
{/* <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
    <i onClick={() => setNbStranger(prev => (prev > 0 ? prev - 1 : 0))} className={`fa fa-minus ${i_reservation}`}></i>
    <p className="text-sm mt-1">{nbStranger} participants etrangers</p>
    <i onClick={() => setNbStranger(prev => prev + 1)} className={`fa fa-plus ${i_reservation}`}></i>
</div> */}