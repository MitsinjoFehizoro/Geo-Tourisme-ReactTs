import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
    simpleMode: boolean,
    setSimpleMode: (b: boolean) => void,
    title: string
}
const ContainerDestinationCard: FunctionComponent<PropsWithChildren<Props>> = ({ children, simpleMode, setSimpleMode, title }) => {

    return (
        <motion.div
            layout
            onClick={simpleMode ? () => setSimpleMode(!simpleMode) : undefined}
            transition={{ type: 'spring', bounce: 0.4, duration: .5 }}
            className={`${simpleMode ? 'simple' : 'modal z-50'} cursor-pointer`}
        >
            <div className="flex flex-row justify-between text-xl mb-2 uppercase">
                <p className="text-primary">{title}</p>
                <i className={`fa-solid fa-circle-xmark hover:text-red-500 cursor-pointer ${simpleMode ? 'hidden' : 'block'}`} onClick={() => { setSimpleMode(true) }}></i>
            </div>
            {children}
        </motion.div >
    )
}
export default ContainerDestinationCard