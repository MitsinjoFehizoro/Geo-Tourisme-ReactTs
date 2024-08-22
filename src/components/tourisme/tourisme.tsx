import { FunctionComponent } from "react";
import '../../styles/components/_tourisme.scss';
import { motion } from 'framer-motion';
import { useLink } from "../../hooks/useLink";
import StyleImage from "./style-image";
import SlideTourisme from "./slide-tourisme";

const Tourisme: FunctionComponent = () => {
    const { links, toggleLinkActif } = useLink()

    return (
        <motion.section
            viewport={{ amount: .5 }}
            onViewportEnter={() => toggleLinkActif('tourisme')}
            ref={links['tourisme'].refDestination}
            className="relative bg-background flex flex-col lg:flex-row items-center justify-around px-4 pt-14 pb-12 lg:pb-16">
            {/* <StyleImage /> */}
            <SlideTourisme />
        </motion.section>
    );
}

export default Tourisme;
