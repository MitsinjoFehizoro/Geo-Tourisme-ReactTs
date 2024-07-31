import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/pages/_detail-destination.scss'
import { useGetDestinationById } from "../supabase/destinations-supabase";

const DetailDestination: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>()
    const { stateGetDestination, getDestination } = useGetDestinationById()
    useEffect(() => {
        getDestination(id)
    }, [])
    return (
        <section>
            <div className="fotsy flex flex-col justify-center">
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <p className="points text-2xl" key={i}>............................</p>
                    ))
                }
            </div>
            <div className="porteur flex flex-row items-center">
                <img src="" alt="" />
            </div>
        </section>
    )
}
export default DetailDestination