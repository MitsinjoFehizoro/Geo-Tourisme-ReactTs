import React, { FunctionComponent, useEffect, useState } from "react";
import { field, stateAxios } from "../../tools/type";
import { motion } from "framer-motion";
import { variantsCountry, variantsDestinationChild } from "../../styles/animations/accueil-variants";

type Props = {
    stateAxios: stateAxios,
    handleSelectedCountry: (country: object) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    field: field
}
const CustomInputPhone: FunctionComponent<Props> = ({ stateAxios, handleSelectedCountry, field, onChange }) => {
    const [stateCountry, setStateCountry] = useState<boolean>(false)
    const [selectedCountry, setSelectedCountry] = useState({})

    const [allCountry, setAllCountry] = useState([])
    const hanldeAllCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllCountry(stateAxios.data.filter(country => ((country as { name: { common: string } }).name.common.toLowerCase().includes(e.target.value.toLowerCase()))))
    }

    useEffect(() => {
        setAllCountry(stateAxios.data)
        const country = stateAxios.data.filter(country => ((country as { name: { common: string } }).name.common === 'Madagascar'))
        if (country.length > 0) setSelectedCountry(country[0])
    }, [stateAxios])

    useEffect(() => {
        handleSelectedCountry(selectedCountry)
    }, [selectedCountry])

    return (
        <div className="relative flex flex-row pb-2">
            <div className="w-2/5 px-4 py-2 mr-2 text-sm bg-background rounded flex flex-row items-center justify-center">
                {
                    stateAxios.isLoading && (
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    )
                }
                {
                    stateAxios.data && (
                        <div
                            className="w-full flex flex-row items-center justify-between cursor-pointer"
                            onClick={() => setStateCountry(!stateCountry)}>
                            <p className="flex flex-row items-center justify-between text-xs">
                                <span className="mr-1" >{(selectedCountry as { flag: string }).flag}</span>
                                <span>{(selectedCountry as { cioc: string }).cioc}</span>
                            </p>
                            {
                                stateCountry === true ? (
                                    <i className="fa fa-caret-down"></i>
                                ) : (
                                    <i className="fa fa-caret-up"></i>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div className="w-3/5 flex flex-row relative">
                <span
                    className="border-none outline-none text-sm bg-background rounded-s pl-4 py-2"
                >
                    {(selectedCountry as { idd?: { root: string } }).idd?.root}
                    {(selectedCountry as { idd?: { suffixes: string[] } }).idd?.suffixes?.[0]}
                </span>
                <input
                    type="text"
                    name="phone"
                    placeholder=" xx xxx xx"
                    value={field.value}
                    onChange={onChange}
                    className="border-none outline-none text-sm bg-background rounded w-full pr-4 py-2"
                />
                {
                    field.errorMessage !== '' && (
                        <p className="px-1 pt-[1px] text-xs text-red-500 absolute bottom-[-16px]">{field.errorMessage}</p>
                    )
                }
            </div>
            {
                stateAxios.data && (
                    <div className="absolute w-full h-0 bottom-0 z-10">
                        <motion.div
                            variants={variantsCountry}
                            animate={stateCountry ? 'visible' : 'hidden'}
                            className="relative bg-white border-[2px] rounded pb-4"
                        >
                            <input
                                className="w-full border-b-2 border-background outline-none bg-white text-sm px-4 pb-1 pt-2"
                                type="text"
                                onChange={hanldeAllCountry}
                                placeholder="Recherche..."
                            />
                            <div className="h-40 px-4 overflow-y-auto overflow-x-hidden">
                                {
                                    allCountry.map((country, index) => (
                                        <motion.div
                                            key={index}
                                            variants={variantsDestinationChild}
                                            animate={stateCountry ? 'visible' : 'hidden'}
                                            className="flex flex-row py-1 items-center justify-center cursor-pointer"
                                            onClick={() => { setSelectedCountry(country), setStateCountry(!stateCountry) }}
                                        >
                                            <span>{(country as { flag: string }).flag}</span>
                                            <p className="text-sm w-full px-2">{((country as { name: object }).name as { common: string }).common}</p>
                                            <span className="text-sm">
                                                {(country as { idd: { root: string } }).idd.root}
                                                {(country as { idd: { suffixes: string[] } }).idd.suffixes?.[0]}
                                            </span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </motion.div>
                    </div>
                )
            }

        </div>
    )
}
export default CustomInputPhone