import { FunctionComponent, useState } from "react"
import { motion } from 'framer-motion'
import { formatDateLong, formatDateSimple } from "../../tools/format-date"
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation"
import { Organisation } from "../../models/organisation"
type Props = {
    organisations: Organisation[]
}
const OrganistaionDestinationCard: FunctionComponent<Props> = ({ organisations }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    const { handleOrganisationChoice } = useChoiceOrganisation()
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
                        <motion.div
                            whileHover={simpleMode ? {} : { scale: 1.05 }} key={organisation.id}
                            className="h-10 mb-2 flex flex-row items-center justify-center bg-background rounded cursor-pointer text-sm"
                            onClick={simpleMode ? () => { } : () => handleOrganisationChoice(organisation)}
                        >
                            <span>{simpleMode ? formatDateSimple(organisation.start) : formatDateLong(organisation.start)}</span>&nbsp;-&nbsp;
                            <span>{simpleMode ? formatDateSimple(organisation.end) : formatDateLong(organisation.end)}</span>
                        </motion.div>
                    ))
                }
            </div >
        </motion.div >
    )

}

export default OrganistaionDestinationCard