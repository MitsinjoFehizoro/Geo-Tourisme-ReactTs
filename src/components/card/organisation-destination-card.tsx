import { FunctionComponent, useState } from "react"
import { organisation } from "../../tools/type"
import { motion } from 'framer-motion'
import { formatDateLong, formatDateSimple } from "../../tools/format-date"
type Props = {
    organisations: organisation[]
}
const OrganistaionDestinationCard: FunctionComponent<Props> = ({ organisations }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <motion.div
            layout
            onClick={() => { setSimpleMode(!simpleMode) }}
            transition={{ type: 'spring', bounce: 0.4, duration: .5 }}
            className={simpleMode ? 'simple cursor-pointer ' : 'modal cursor-pointer'}
        >
            <div className="flex flex-row justify-between text-xl mb-2 uppercase">
                <p className="text-primary">date disponible</p>
                <i className={`fa-solid fa-circle-xmark hover:text-red-500 cursor-pointer ${simpleMode ? 'hidden' : 'block'}`} onClick={() => { setSimpleMode(!simpleMode) }}></i>
            </div>
            <div className="organisations">
                {
                    organisations.map(organisation => (
                        <div key={organisation.id} className="h-10 mb-2 flex flex-row items-center justify-center bg-background rounded">
                            <span>{simpleMode ? formatDateSimple(organisation.start) : formatDateLong(organisation.start)}</span>&nbsp;-&nbsp;
                            <span>{simpleMode ? formatDateSimple(organisation.end) : formatDateLong(organisation.end)}</span>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )

}

export default OrganistaionDestinationCard