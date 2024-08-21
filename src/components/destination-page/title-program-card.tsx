import { FunctionComponent, useEffect, useState } from "react";
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation";
import { formatDateMoyen } from "../../tools/format-date";
import { variantsDestination, variantsDestinationChild } from "../../styles/animations/accueil-variants";
import { motion } from "framer-motion";
import { Organisation } from "../../models/organisation";
import { Destination } from "../../models/destination";

type Props = {
    title: string
    destination: Destination
}
const TitleProgramCard: FunctionComponent<Props> = ({ title, destination }) => {
    const [stateDateDispo, setDateDispo] = useState<boolean>(false)
    const handleStateDateDispo = (organisation: Organisation) => {
        setDateDispo(prevState => !prevState)
        handleOrganisationChoice(organisation)
    }
    const { organisationChoice, handleOrganisationChoice } = useChoiceOrganisation()
    useEffect(() => {
        handleOrganisationChoice(destination.organisations[0])
    }, [])
    return (
        <div className="shadow-sm flex flex-col justify-center border-l-4 border-primary py-4 mb-2">
            <h1 className="text-secondary uppercase px-4">{title}</h1>
            <div className="relative">
                <div className="flex flex-row items-center justify-between px-4 cursor-pointer text-sm mt-1" onClick={() => setDateDispo(prevState => !prevState)}>
                    {
                        organisationChoice && (
                            <p><span>{formatDateMoyen(organisationChoice.start)}</span>&nbsp;-&nbsp;<span>{formatDateMoyen(organisationChoice.end)}</span></p>
                        )
                    }
                    {
                        stateDateDispo ? (
                            <i className="fa fa-caret-down text-sm mr-2"></i>
                        ) : (
                            <i className="fa fa-caret-up text-sm mr-2"></i>
                        )
                    }
                </div>
                <div className="absolute z-20 w-full h-0">
                    <motion.div
                        variants={variantsDestination}
                        animate={stateDateDispo ? 'visible' : 'hidden'}
                        className="bg-white rounded-md py-4 px-2 mr-2 shadow-2xl"
                    >
                        {
                            destination.organisations.map((organisation: Organisation) => (
                                <motion.p
                                    key={organisation.id}
                                    className="flex flex-row items-center justify-center px-4 w-full h-9 bg-background/50 rounded mb-1 cursor-pointer text-sm"
                                    variants={variantsDestinationChild}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => handleStateDateDispo(organisation)}
                                >
                                    <span>{formatDateMoyen(organisation.start)}</span>&nbsp;-&nbsp;
                                    <span>{formatDateMoyen(organisation.end)}</span>
                                </motion.p>
                            )
                            )
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TitleProgramCard