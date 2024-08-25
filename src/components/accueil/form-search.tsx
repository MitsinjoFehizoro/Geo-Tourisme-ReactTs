import React, { FunctionComponent, useEffect } from "react";
import { useGetDestinations } from "../../supabase/destinations-supabase";
import DropDownDestination from "./drop-down-destination";
import DropDownMonths from "./drop-down-months";
import { useDateSearch } from "../../hooks/useDateSearch";
import { useChoiceDestination } from "../../hooks/useChoiceDestination";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import CustomButton from "../custom-button";


type Props = {
    color1: string,
    color2: string
}
const FormSearch: FunctionComponent<Props> = ({ color1, color2 }) => {
    const { stateGetDestination, destinations, getDestinations } = useGetDestinations()
    useEffect(() => {
        getDestinations()
    }, [])
    const { destinationChoice } = useChoiceDestination()
    const { selectedDateSearch } = useDateSearch()
    const { addToast } = useToast()
    const navigate = useNavigate()
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (destinationChoice && selectedDateSearch) {
            navigate('/search')
        } else {
            addToast({ toast: '📍 Merci de préciser la destination et la date de votre choix.', isSucces: false })
        }
    }
    return (
        <form className={`bg-${color2} w-full md:w-80 px-4 py-8 rounded`} onSubmit={onSubmit}>
            <DropDownDestination destinations={destinations} stateSupabase={stateGetDestination} color1={color1} color2={color2} />
            <DropDownMonths stateSupabase={stateGetDestination} color1={color1} color2={color2} />
            <CustomButton text='Rechercher' isLoading={false} />
        </form>
    )
}
export default FormSearch