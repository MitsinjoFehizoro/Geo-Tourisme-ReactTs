import { FunctionComponent, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { variantsDestination, variantsDestinationChild } from "../../styles/animations/accueil-variants";
import { destination, organisation } from "../../tools/type";
import { formatDateMoyen } from "../../tools/format-date";
import DetailProgamCard from "./detail-program-card";
import '../../styles/components/card/_program-card.scss'
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation";


type Props = {
    destination: destination
}
const ProgramCard: FunctionComponent<Props> = ({ destination }) => {
    const [stateDateDispo, setDateDispo] = useState<boolean>(false)
    const handleStateDateDispo = (organisation: organisation) => {
        setDateDispo(prevState => !prevState)
        handleOrganisationChoice(organisation)
    }
    const { organisationChoice, handleOrganisationChoice } = useChoiceOrganisation()
    useEffect(() => {
        handleOrganisationChoice(destination.organisations[0])
    }, [])

    const refScroll = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ container: refScroll })
    return (
        <div className="w-96 flex flex-col">
            <div className="shadow-sm flex flex-col justify-center border-l-8 border-primary py-4 mb-2">
                <h1 className="text-secondary text-xl font-bold uppercase px-4">Où allons-nous le : </h1>
                <div className="relative">
                    <div className="flex flex-row items-center justify-between px-4 cursor-pointer" onClick={() => setDateDispo(prevState => !prevState)}>
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
            <div className="relative py-4 pl-2 bg-background overflow-hidden">
                <svg className="absolute top-6 left-4 z-10" id='progress' width="90" height="90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-background/80" />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>
                <div className="overflow-auto bg-background pr-2" style={{ height: '90vh' }} ref={refScroll}>
                    {
                        organisationChoice?.programs.map(program =>
                            <DetailProgamCard program={program} key={program.id} />
                        )
                    }
                </div>

            </div>
        </div>

    )
}
export default ProgramCard

