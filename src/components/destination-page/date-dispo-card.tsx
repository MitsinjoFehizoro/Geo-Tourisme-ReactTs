import { FunctionComponent } from "react";
import { Organisation } from "../../models/organisation";
import { formatDateMoyen } from "../../tools/format-date";
import { formatPrice } from "../../tools/format-price";
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation";

type Props = {
    organisation: Organisation,
    color: string,
    scrollOrganisation: () => void
}
const DateDispoCard: FunctionComponent<Props> = ({ organisation, color, scrollOrganisation }) => {

    const { handleOrganisationChoice } = useChoiceOrganisation()
    const handleClick = (organisaion: Organisation) => {
        handleOrganisationChoice(organisaion)
        scrollOrganisation()
    }
    return (
        <div className="relative w-80 h-96 py-14 pr-14 mb-8">
            <div className={`bg-${color}/50 w-full h-full`}></div>
            <div className="h-full absolute top-0 right-0 flex flex-col justify-between">
                <div className="flex justify-between">
                    <DateCard date={organisation?.start} color={color} />
                    <p className="px-1" />
                    <DateCard date={organisation?.end} color={color} />
                </div>
                <div className="w-full h-full mt-2 bg-white shadow-xl text-center flex flex-col justify-around items-center py-8 px-8">
                    <div className="relative w-full pt-4 pb-2 bg-white shadow rounded-sm text-sm flex justify-center">
                        <div className="w-full absolute top-[-10px]">
                            <span className={`bg-${color}/50 text-xs text-white px-6 py-[2px] uppercase rounded-sm `}>local</span>
                        </div>
                        <p>{formatPrice(organisation.local_price)}</p>
                    </div>
                    <div className="relative w-full pt-4 pb-2 bg-white shadow rounded-sm text-sm">
                        <div className="w-full absolute top-[-10px]">
                            <span className={`bg-${color}/50 text-xs text-white px-6 py-[2px] uppercase rounded-sm `}>étranger</span>
                        </div>
                        <p>{formatPrice(organisation.stranger_price)}</p>
                    </div>
                    <div onClick={() => handleClick(organisation)} className={`bg-${color}/50 pt-3 pb-2 w-full text-xs uppercase text-white rounded hover:scale-105 transition cursor-pointer`} >
                        plus de détail
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DateDispoCard

type PropsDateCard = {
    date: Date,
    color: string
}
const DateCard: FunctionComponent<PropsDateCard> = ({ date, color }) => {
    return (
        <div className="w-32 h-28 bg-white flex flex-col justify-center items-center shadow-xl px-4">
            <p className={`bg-${color}/50 w-8 h-8 rounded-full flex items-center justify-center`}>
                <i className="fa-regular fa-calendar text-white text-sm"></i>
            </p>
            <p className="text-xs mt-3 uppercase text-center  ">{formatDateMoyen(date)}</p>
        </div>
    )
}