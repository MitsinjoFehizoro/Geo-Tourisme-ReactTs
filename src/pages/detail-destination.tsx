import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDestinationById } from "../supabase/destinations-supabase";
import DestinationPresentation from "../components/destination-presentation";
import ProgramDestination from "../components/program-destination";

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
            {
                destination && (
                    <ProgramDestination destination={destination} />
                )
            }
            <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around text-background bg-background">
                <p className="text-sm text-secondary"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </>
    )
}
export default DetailDestination

