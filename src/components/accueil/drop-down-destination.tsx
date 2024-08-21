import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import LoadingSpin from "../loading/loading-spin";
import { stateSupabase } from "../../tools/type";
import { Destination } from "../../models/destination";
import { variantsDestination, variantsDestinationChild, variantsParents } from "../../styles/animations/accueil-variants";

type Props = {
    destinations: Destination[] | undefined
    stateSupabase: stateSupabase
}
const DropDownDestination: FunctionComponent<Props> = ({ destinations, stateSupabase }) => {
    const [isDown, setIsDown] = useState<boolean>(false)
    const handleClick = () => {
        setIsDown(!isDown)
    }
    return (
        <div className="relative w-full mb-4">
            <div
                className="flex flex-row justify-between items-center w-full h-10 px-4 mb-2 bg-white rounded-md cursor-pointer"
                onClick={() => setIsDown(!isDown)}
            >
                <p className="text-sm">Où allez-vous?</p>
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
                animate={isDown ? 'visible' : 'hidden'} className="bg-white absolute w-full h-48 rounded-md z-10 flex items-center origin-top">
                <div className="w-full h-40 px-4 overflow-auto ">
                    {
                        stateSupabase.isLoading ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <LoadingSpin />
                            </div>
                        ) : (
                            destinations && (
                                <motion.div
                                    className="bg-white rounded-md w-full "
                                    variants={variantsDestination}
                                    animate={isDown ? 'visible' : 'hidden'}
                                >
                                    {
                                        destinations.map((destination, index) => (
                                            <motion.p
                                                key={index}
                                                className="flex items-center px-4 w-full h-9 bg-background rounded mb-1 text-sm cursor-pointer"
                                                variants={variantsDestinationChild}
                                                onClick={() => handleClick()}
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