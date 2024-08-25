import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import LoadingSpin from "../loading/loading-spin";
import { stateSupabase } from "../../tools/type";
import { Destination } from "../../models/destination";
import { variantsDestination, variantsDestinationChild, variantsParents } from "../../styles/animations/accueil-variants";
import { useChoiceDestination } from "../../hooks/useChoiceDestination";


type Props = {
    destinations: Destination[] | undefined,
    stateSupabase: stateSupabase,
    color1: string,
    color2: string
}
const DropDownDestination: FunctionComponent<Props> = ({ destinations, stateSupabase, color1, color2 }) => {
    const [isDown, setIsDown] = useState<boolean>(false)
    const { destinationChoice, handleDestinationChoice } = useChoiceDestination()
    const handleClick = (destination: Destination) => {
        setIsDown(!isDown)
        handleDestinationChoice(destination)
    }
    return (
        <div className="relative w-full mb-4">
            <div
                className={`bg-${color1} flex flex-row justify-between items-center w-full h-10 px-4 mb-2 rounded-md cursor-pointer`}
                onClick={() => setIsDown(!isDown)}
            >
                <p className="text-sm">
                    {
                        destinationChoice ? (
                            <span>{destinationChoice.title}</span>
                        ) : (
                            <span>Où allez-vous?</span>
                        )
                    }
                </p>
                {
                    isDown ? (
                        <i className="fa fa-caret-down text-sm mr-2"></i>
                    ) : (
                        <i className="fa fa-caret-up text-sm mr-2"></i>
                    )
                }
            </div>
            <motion.div
                variants={variantsParents}
                animate={isDown ? 'visible' : 'hidden'} className={`bg-${color1} absolute w-full h-48 rounded-md z-10 flex items-center origin-top`}>
                <div className="w-full h-40 px-4 overflow-auto ">
                    {
                        stateSupabase.isLoading ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <LoadingSpin />
                            </div>
                        ) : (
                            destinations && (
                                <motion.div
                                    className={`bg-${color1} rounded-md w-full`}
                                    variants={variantsDestination}
                                    animate={isDown ? 'visible' : 'hidden'}
                                >
                                    {
                                        destinations.map((destination, index) => (
                                            <motion.p
                                                key={index}
                                                className={`bg-${color2} flex items-center px-4 w-full h-9 rounded mb-1 text-sm cursor-pointer`}
                                                variants={variantsDestinationChild}
                                                onClick={() => handleClick(destination)}
                                            >
                                                {destination.title}
                                            </motion.p>
                                        ))
                                    }
                                </motion.div>
                            )
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}
export default DropDownDestination