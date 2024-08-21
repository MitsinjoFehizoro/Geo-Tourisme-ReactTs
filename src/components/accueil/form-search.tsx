import { FunctionComponent, useEffect } from "react";
import CustomButton from "../custom-button";
import { useGetDestinations } from "../../supabase/destinations-supabase";
import DropDownDestination from "./drop-down-destination";
import DropDownMonths from "./drop-down-months";

const FormSearch: FunctionComponent = () => {
    const { stateGetDestination, destinations, getDestinations } = useGetDestinations()
    useEffect(() => {
        getDestinations()
    }, [])
    return (
        <form className="w-10/12 lg:w-72 px-4 py-8 bg-background rounded">
            <DropDownDestination destinations={destinations} stateSupabase={stateGetDestination} />
            <DropDownMonths stateSupabase={stateGetDestination} />
            <CustomButton text="Rechercher" />
        </form>
    )
}
export default FormSearch