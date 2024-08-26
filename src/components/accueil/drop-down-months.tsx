import { FunctionComponent, useState } from "react";
import { dateSearch, stateSupabase } from "../../tools/type";
import { AnimatePresence, motion } from "framer-motion";
import { variantsDestination, variantsDestinationChild, variantsParents } from "../../styles/animations/accueil-variants";
import LoadingSpin from "../loading/loading-spin";
import { useDateSearch } from "../../hooks/useDateSearch";

type Props = {
    stateSupabase: stateSupabase
    color1: string
    color2: string
}


const DropDownMonths: FunctionComponent<Props> = ({ stateSupabase, color1, color2 }) => {
    const { dateSearchs, selectedDateSearch, toggleDateSearch } = useDateSearch()
    const [isDown, setIsDown] = useState<boolean>(false)
    const handleClick = (dateSearch: dateSearch) => {
        setIsDown(!isDown)
        toggleDateSearch(dateSearch)
    }
    return (
        <div className="relative w-full mb-4">
            <div
                className={`bg-${color1} flex flex-row justify-between items-center w-full h-10 px-4 mb-2 rounded-md cursor-pointer`}
                onClick={() => setIsDown(!isDown)}
            >
                {
                    selectedDateSearch ? (
                        <p className="text-sm">{selectedDateSearch.month} - {selectedDateSearch.year}</p>
                    ) : (
                        <p className="text-sm">Quand partez-vous ?</p>
                    )
                }

                {
                    isDown ? (
                        <i className="fa fa-caret-down text-sm mr-2"></i>
                    ) : (
                        <i className="fa fa-caret-up text-sm mr-2"></i>
                    )
                }
            </div>
            <AnimatePresence initial={false}>
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
                                <motion.div
                                    className={`bg-${color1} rounded-md w-full`}
                                    variants={variantsDestination}
                                    animate={isDown ? 'visible' : 'hidden'}
                                >
                                    {
                                        dateSearchs.map((dateSearch, index) => (
                                            <motion.p
                                                key={index}
                                                className={`bg-${color2} flex items-center px-4 w-full h-9 rounded mb-1 text-sm cursor-pointer`}
                                                variants={variantsDestinationChild}
                                                onClick={() => handleClick(dateSearch)}
                                            >
                                                {dateSearch.month} - {dateSearch.year}
                                            </motion.p>
                                        ))
                                    }
                                </motion.div>
                            )
                        }
                    </div>
                </motion.div>
            </AnimatePresence>
        </div >
    )
}

export default DropDownMonths