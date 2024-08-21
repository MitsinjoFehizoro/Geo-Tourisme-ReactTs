import { FunctionComponent } from "react"

type Props = {
    color : string
}

const Footer:FunctionComponent<Props> = ({color}) => {
    return (
        <footer className={`bg-${color} w-full pt-7 pb-5 flex flex-row items-center justify-around shadow`}>
            <p className="text-sm text-secondary"><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
        </footer>
    )
}
export default Footer