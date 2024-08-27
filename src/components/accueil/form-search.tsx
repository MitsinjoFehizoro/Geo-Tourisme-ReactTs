import React, { FunctionComponent, useEffect } from "react";
import { useGetDestinations } from "../../supabase/destinations-supabase";
import DropDownDestination from "./drop-down-destination";
import DropDownMonths from "./drop-down-months";
import CustomButton from "../custom-button";


type Props = {
    color1: string,
    color2: string,
    isResponsive: boolean,
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}
const FormSearch: FunctionComponent<Props> = ({ color1, color2, isResponsive, onSubmit }) => {
    const { stateGetDestination, destinations, getDestinations } = useGetDestinations()
    useEffect(() => {
        getDestinations()
    }, [])

    return (
        <form className={`bg-${color2} ${isResponsive ? 'w-full md:w-96' : 'w-80 max-h-60 mb-14'}  px-4 py-8 rounded h-auto  mb-4`} onSubmit={onSubmit}>
            <DropDownDestination destinations={destinations} stateSupabase={stateGetDestination} color1={color1} color2={color2} />
            <DropDownMonths stateSupabase={stateGetDestination} color1={color1} color2={color2} />
            <CustomButton text='Rechercher' isLoading={false} />
        </form>
    )
}
export default FormSearch