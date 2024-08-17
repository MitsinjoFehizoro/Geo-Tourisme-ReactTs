import { FunctionComponent, useState } from "react";
import { useHeightNav } from "../../hooks/useHeightNav";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import LoadingSpin from "../loading/loading-spin";

const ProfilNav: FunctionComponent = () => {
    const { isAuth, stateAuth, clientAuth, logout } = useAuth()
    const [stateProfil, setStateProfil] = useState(false)
    const { heightNav } = useHeightNav()
    return (
        <>
            {
                isAuth && (
                    <div className="hidden md:flex items-center" onClick={() => setStateProfil(!stateProfil)} >
                        <div className="z-10 py-1 px-4 flex flex-row items-center cursor-pointer">
                            <p className="w-9 h-9 text-sm flex items-center justify-center bg-secondary border-2 border-primary rounded-full text-background capitalize">{clientAuth?.name.split(' ').at(-1)?.substring(0, 2)}</p>
                            <div className="flex items-center">
                                <p className="max-w-24 mx-2 text-sm text-ellipsis overflow-hidden capitalize">{clientAuth?.name.split(' ').at(-1)}</p>
                                {
                                    stateProfil ? (
                                        <i className="w-2 text-xs fa fa-caret-down mr-1"></i>
                                    ) : (
                                        <i className="w-2 text-xs fa fa-caret-right mr-1"></i>
                                    )
                                }
                            </div>
                        </div>
                        <div className={`${stateProfil ? 'block' : 'hidden'} absolute right-0 bg-background shadow p-4`} style={{ top: heightNav - 5 }}>
                            <NavLink to='' className="flex flex-row items-center mb-1 py-1 px-4 rounded bg-white border-2 border-white hover:shadow transition ease-in duration-100">
                                <i className="fa-regular fa-address-card text-lg"></i>
                                <span className='px-2 text-sm'>Mon Profil</span>
                            </NavLink>
                            <p
                                onClick={logout}
                                className="w-48 flex flex-row items-center py-1 px-4 rounded-md bg-white cursor-pointer border-2 border-white hover:shadow transition ease-in duration-100"
                            >
                                {
                                    stateAuth.isLoading ? (
                                        <div className="w-full flex justify-center py-1">
                                            <LoadingSpin />
                                        </div>
                                    ) : (
                                        <>
                                            <i className="fa fa-right-from-bracket text-lg"></i>
                                            <span className='px-2 text-sm'>Se déconnecter</span>
                                        </>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default ProfilNav