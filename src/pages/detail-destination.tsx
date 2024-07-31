import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/pages/_detail-destination.scss'
import { useGetDestinationById } from "../supabase/destinations-supabase";
import { useHeightNav } from "../hooks/useHeightNav";
import { destination } from "../tools/type";


const DetailDestination: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>()
    const { heightNav } = useHeightNav()
    const { stateGetDestination, getDestination, destination } = useGetDestinationById()
    useEffect(() => {
        if (id) {
            getDestination(id)
        }
    }, [])
    return (
        <section style={{ marginTop: heightNav }}>
            <div className="fotsy flex flex-col justify-center">
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <p className="points text-3xl" key={i}>. . . . . . . . . . . . . .</p>
                    ))
                }
            </div>
            <div className="galeries flex flex-row items-center justify-center" >
                <img src={destination?.galeries[0]} alt="" />
                <div className="monContaint h-full flex flex-col justify-center py-10">
                    <div className="flex flex-row justify-end my-4">
                        <DetailCard title={destination?.title} description={destination?.description} />
                        <div className="w-4"/>
                        <DetailCard title="histoire" description={destination?.description} />
                    </div>
                    <div className="flex flex-row justify-end">
                        <DetailCard title="description" description={destination?.description} />
                        <div className="w-4"/>
                        <DetailCard title="histoire" description={destination?.description} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DetailDestination

type Props = {
    title: string,
    description: string 
}
const DetailCard: FunctionComponent<Props> = ({ title, description }) => {
    return (
        <div className="w-80 h-56 bg-white py-8 px-8">
            <p className="text-secondary text-xl mb-2 uppercase">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}