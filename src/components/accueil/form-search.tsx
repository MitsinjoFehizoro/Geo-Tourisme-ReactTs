import { FunctionComponent, useEffect } from "react";
import CustomButton from "../custom-button";
import { useGetDestinations } from "../../supabase/destinations-supabase";
import DropDown from "./drop-down-destination";

const FormSearch: FunctionComponent = () => {
    const { stateGetDestination, destinations, getDestinations } = useGetDestinations()
    useEffect(() => {
        getDestinations()
    }, [])
    return (
        <form className="w-10/12 lg:w-96 p-4 bg-background rounded">
            <DropDown  destinations={destinations} stateSupabase={stateGetDestination} />
            <CustomButton text="Rechercher" />
        </form>
    )
}
export default FormSearch