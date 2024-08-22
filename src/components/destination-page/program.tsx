import { FunctionComponent, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '../../styles/components/_program.scss'
import { useChoiceOrganisation } from "../../hooks/useChoiceOrganisation";
import { Destination } from "../../models/destination";
import TitleProgramCard from "./title-program-card";
import DetailProgamCard from "./detail-program-card";


type Props = {
    destination: Destination,
}
const Program: FunctionComponent<Props> = ({ destination }) => {
    const { organisationChoice } = useChoiceOrganisation()
    const refScroll = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ container: refScroll })

    return (
        <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 flex flex-col">
            <TitleProgramCard title="Où allons-nous le :" destination={destination} />
            <div className="relative p-4 rounded-md shadow">
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
                <div className="overflow-auto rounded h-[90vh]" ref={refScroll}>
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

