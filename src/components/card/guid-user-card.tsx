import { FunctionComponent } from "react"

type Props = {
    title: string,
    description: string
}
const GuidUserCard: FunctionComponent<Props> = ({ title, description }) => {
    return (
        <>
            <h1 className=" text-white text mb-1 uppercase ">{title}</h1>
            <p className="text-white text-sm">{description}</p>
        </>
    )
}

export default GuidUserCard