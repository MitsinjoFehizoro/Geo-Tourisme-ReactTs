import { FunctionComponent, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '../styles/components/_program.scss'
import { useChoiceOrganisation } from "../hooks/useChoiceOrganisation";
import TitleProgramCard from "./card/title-program-card";
import { destination } from "../tools/type";
import DetailProgamCard from "./card/detail-program-card";


type Props = {
    destination: destination
}
const Program : FunctionComponent<Props> = ({ destination }) => {
    const { organisationChoice } = useChoiceOrganisation()
    const refScroll = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ container: refScroll })
    return (
        <div className="w-96 flex flex-col">
            <TitleProgramCard title="Où allons-nous le :" destination={destination} />
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
export default Program

