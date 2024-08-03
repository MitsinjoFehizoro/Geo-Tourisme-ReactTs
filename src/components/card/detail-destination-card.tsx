import { FunctionComponent, useState } from "react"
import { motion } from "framer-motion"

type Props = {
    title: string,
    description: string
}
const DetailDestinationCard: FunctionComponent<Props> = ({ title, description }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <motion.div
            layout
            onClick={() => { setSimpleMode(!simpleMode) }}
            transition={{ type: 'spring', bounce: 0.4, duration: .5 }}
            className={`${simpleMode ? 'simple' : 'modal'}`}
        >
            <div className="flex flex-row justify-between text-xl mb-2 uppercase">
                <p className="text-primary">{title}</p>
                <i className={`fa-solid fa-circle-xmark hover:text-red-500 cursor-pointer ${simpleMode ? 'hidden' : 'block'}`} onClick={() => { setSimpleMode(!simpleMode) }}></i>
            </div>
            <p className="description">{description}</p>
        </motion.div>
    )
}
export default DetailDestinationCard