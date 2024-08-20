import { FunctionComponent, useState } from "react"
import ContainerDestinationCard from "./container-destination-card"

type Props = {
    title: string,
    description: string
}
const DetailDestinationCard: FunctionComponent<Props> = ({ title, description }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <ContainerDestinationCard title={title} simpleMode={simpleMode} setSimpleMode={setSimpleMode} >
            <p className="description">{description}</p>
        </ContainerDestinationCard>
    )
}
export default DetailDestinationCard