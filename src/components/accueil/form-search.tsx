import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { variantsDestination, variantsDestinationChild } from "../../styles/animations/accueil-variants";
import { i_accueil } from "../../styles/base/tailwind";
import CustomButton from "../custom-button";

const FormSearch: FunctionComponent = () => {
    const [stateDestination, setStateDestination] = useState<boolean>(false)
    const handleStateDestination = () => {
        setStateDestination(prevState => !prevState)
    }
    const menus = ["Teste1", "Teste2", "Teste3", "Teste4"]
    return (
        <form className="w-10/12 lg:w-96 p-4 bg-background rounded">
            <div className="relative">
                <div
                    className="flex flex-row justify-between items-center w-full h-10 px-4 mb-2 bg-white rounded-md cursor-pointer"
                    onClick={handleStateDestination}
                >
                    <p>Où allez-vous?</p>
                    {
                        stateDestination ? (
                            <i className="fa fa-caret-down text-sm mr-2"></i>
                        ) : (
                            <i className="fa fa-caret-up text-sm mr-2"></i>
                        )
                    }
                </div>
                <div className="absolute w-full h-0">
                    <motion.div
                        className="bg-white rounded-md py-4 px-2"
                        variants={variantsDestination}
                        animate={stateDestination ? 'visible' : 'hidden'}
                    >
                        {
                            menus.map(menu => (
                                <motion.p
                                    key={menu}
                                    className="flex items-center px-4 w-full h-9 bg-background/50 rounded mb-1"
                                    variants={variantsDestinationChild}
                                >
                                    {menu}
                                </motion.p>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
            <input className="div input" type="date" name="" id="" />
            <div className="div flex flex-row justify-between items-center px-4">
                <i className={`fa fa-minus ${i_accueil}`}></i>
                <span className="w-full py-2 text-center">participants</span>
                <i className={`fa fa-add ${i_accueil}`}></i>
            </div>
            <CustomButton text="Planifier" />
        </form>
    )
}
export default FormSearch