import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/pages/_detail-destination.scss'
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
    useEffect(() => {
        console.log(destination?.organisations);
    })
    return (
        <>
            {
                stateGetDestination.isLoading && (
                    <div className="mt-96">loading</div>
                )
            }
            {
                stateGetDestination.error && (
                    <div>error</div>
                )
            }
            {
                destination && (
                    <DestinationPresentation stateGetDestination={stateGetDestination} destination={destination} />
                )
            }
        </>
    )
}
export default DetailDestination

