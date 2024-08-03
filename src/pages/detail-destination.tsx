import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDestinationById } from "../supabase/destinations-supabase";
import DestinationPresentation from "../components/destination-presentation";


const DetailDestination: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>()

    const { stateGetDestination, getDestination, destination } = useGetDestinationById()
    useEffect(() => {
        if (id) {
            getDestination(id)
        }
    }, [])
    return (
        <>
            <DestinationPresentation stateGetDestination={stateGetDestination} destination={destination} />
        </>
    )
}
export default DetailDestination

