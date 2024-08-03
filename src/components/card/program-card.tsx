import { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variantsDestination, variantsDestinationChild } from "../../styles/animations/accueil-variants";
import { destination, organisation } from "../../tools/type";
import { formatDateMoyen } from "../../tools/format-date";
import DetailProgamCard from "./detail-program-card";


type Props = {
    destination: destination
}
const ProgramCard: FunctionComponent<Props> = ({ destination }) => {
    const [selectedOrganisation, setSelectedOrganisation] = useState<organisation>(destination.organisations[0])
    const [stateDateDispo, setDateDispo] = useState<boolean>(false)
    const handleStateDateDispo = (organisation?: organisation) => {
        setDateDispo(prevState => !prevState)
        if (organisation)
            setSelectedOrganisation(organisation)
    }
    useEffect(() => {
        console.log(selectedOrganisation);
    }, [destination])
    return (
        <div className="w-96  flex flex-col">
            <div className="shadow-sm flex flex-col justify-center border-l-8 border-primary py-4 mb-2">
                <h1 className="text-secondary text-xl font-bold uppercase px-4">Où allons-nous le : </h1>
                <div className="relative">
                    <div className="flex flex-row items-center justify-between px-4 cursor-pointer" onClick={() => handleStateDateDispo()}>
                        <p><span>{formatDateMoyen(selectedOrganisation.start)}</span>&nbsp;-&nbsp;<span>{formatDateMoyen(selectedOrganisation.end)}</span></p>
                        {
                            stateDateDispo ? (
                                <i className="fa fa-caret-down text-sm mr-2"></i>
                            ) : (
                                <i className="fa fa-caret-up text-sm mr-2"></i>
                            )
                        }
                    </div>
                    <div className="absolute w-full h-0 shadow">
                        <motion.div
                            variants={variantsDestination}
                            animate={stateDateDispo ? 'visible' : 'hidden'}
                            className="bg-white rounded-md py-4 px-2 mr-2"
                        >
                            {
                                destination.organisations.map(organisation => (
                                    <motion.p
                                        key={organisation.id}
                                        className="flex flex-row items-center justify-center px-4 w-full h-9 bg-background/50 rounded mb-1 cursor-pointer"
                                        variants={variantsDestinationChild}
                                        whileHover={{ scale: 1.08 }}
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
            <div className="py-4 pl-2 bg-background overflow-hidden">
                <div className="overflow-auto bg-background pr-2" style={{ height: '90vh' }}>
                    {
                        selectedOrganisation.programs.map(program =>
                            <DetailProgamCard program={program} key={program.id} />
                        )
                    }
                </div>

            </div>
        </div>

    )
}
export default ProgramCard

