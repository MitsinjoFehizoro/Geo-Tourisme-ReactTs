import { FunctionComponent } from "react";
import { useLink } from "../../hooks/useLink";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "framer-motion";
import { variantsLeftNav, variantsLeftNavChild } from "../../styles/animations/left-nav-variants";

type Props = {
    isOpen: boolean,
    setIsOpen: (b: boolean) => void
}
const LeftNav: FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
    const { isAuth, clientAuth } = useAuth()
    const { links, linkActif, toggleLinkActif, toggleScrollActif, toggleKeyActif } = useLink()
    const handleClickLink = (key: string) => {
        toggleLinkActif(key), toggleScrollActif(key), toggleKeyActif(key), setIsOpen(false)
    }
    return (
        <motion.nav
            variants={variantsLeftNav}
            animate={isOpen ? 'open' : 'close'}
            className="block md:hidden absolute top-0 left-0 h-[95vh] p-4 m-2 rounded bg-secondary/95"
        >
            {
                isAuth && (
                    <motion.div variants={variantsLeftNavChild} className="flex flex-row items-center cursor-pointer pb-4 border-b-[1px] border-background/50">
                        <p className="w-10 h-10 text-sm flex items-center justify-center bg-secondary border-2 border-primary rounded-full text-white capitalize">{clientAuth?.name.split(' ').at(-1)?.substring(0, 2)}</p>
                        <p className="mx-2 text-sm text-ellipsis overflow-hidden capitalize text-white">{clientAuth?.name.split(' ').at(-1)}</p>
                    </motion.div>
                )
            }

            <div className="flex flex-col pt-4 pb-2 border-b-[1px] border-background/50">
                {
                    Object.entries(links).map(([key, link], index) =>
                        link == links['reservation'] ? (
                            <motion.div
                                key={index}
                                variants={variantsLeftNavChild}
                                className="w-full h-full"
                                onClick={() => handleClickLink(key)}
                            >
                                <NavLink
                                    to='/reservations'
                                    className={`${link === linkActif ? 'border-primary text-primary bg-white' : 'border-white text-background bg-white/20'} block py-2 mb-2 w-full h-full rounded text-center text-sm  border-l-2`}
                                >
                                    {link.title}
                                </NavLink>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={index}
                                variants={variantsLeftNavChild}
                                className="w-full h-full"
                                onClick={() => handleClickLink(key)}
                            >
                                <NavLink
                                    to='/'
                                    className={`${link === linkActif ? 'border-primary text-primary bg-white' : 'border-white text-background bg-white/20'} block py-2 mb-2 w-full h-full rounded text-center text-sm  border-l-2`}
                                >
                                    {link.title}
                                </NavLink>
                            </motion.div>
                        )

                    )
                }
            </div>
            {
                isAuth ? (
                    <motion.div variants={variantsLeftNavChild} className="flex flex-col mt-4">
                        <NavLink to='/signup' className="mb-2 text-sm text-background rounded bg-primary text-center w-full  py-[7px]">Se déconnecter</NavLink>
                    </motion.div>
                ) : (
                    <motion.div variants={variantsLeftNavChild} className="flex flex-col mt-4">
                        <NavLink to='/signup' className="mb-2 text-sm text-secondary rounded bg-background text-center w-full  py-[7px]">S'inscrire</NavLink>
                        <NavLink to='/signup' className="mb-2 text-sm text-background rounded bg-primary text-center w-full  py-[7px]">Se connecter</NavLink>
                    </motion.div>
                )
            }
        </motion.nav>
    )
}
export default LeftNav