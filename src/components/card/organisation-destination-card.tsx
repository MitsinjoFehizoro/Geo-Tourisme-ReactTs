import { FunctionComponent, useState } from "react"
import { motion } from 'framer-motion'
import { formatDateLong, formatDateSimple } from "../../tools/format-date"
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation"
import { Organisation } from "../../models/organisation"
import ContainerDestinationCard from "./container-destination-card"
type Props = {
    organisations: Organisation[]
}
const OrganistaionDestinationCard: FunctionComponent<Props> = ({ organisations }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    const { handleOrganisationChoice } = useChoiceOrganisation()
    return (
        <ContainerDestinationCard title="data disponible" simpleMode={simpleMode} setSimpleMode={setSimpleMode} >
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
        </ContainerDestinationCard>
    )

}

export default OrganistaionDestinationCard