import { FunctionComponent } from "react";
import { useLink } from "../../hooks/useLink";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LeftNav: FunctionComponent = () => {
    const { isAuth, clientAuth } = useAuth()
    const { links, linkActif, toggleLinkActif, toggleScrollActif, toggleKeyActif } = useLink()
    return (
        <nav className="absolute top-0 left-0 w-48 h-[95vh] p-4 m-2 rounded bg-secondary/95">
            {
                isAuth && (
                    <div className="flex flex-row items-center cursor-pointer pb-4 border-b-[1px] border-background/50">
                        <p className="w-10 h-10 text-sm flex items-center justify-center bg-secondary border-2 border-primary rounded-full text-white capitalize">{clientAuth?.name.split(' ').at(-1)?.substring(0, 2)}</p>
                        <p className="mx-2 text-sm text-ellipsis overflow-hidden capitalize text-white">{clientAuth?.name.split(' ').at(-1)}</p>
                    </div>
                )
            }

            <div className="flex flex-col pt-4 pb-2 border-b-[1px] border-background/50">
                {
                    Object.entries(links).map(([key, link]) =>
                        <NavLink
                            to='/'
                            key={key}
                            className='py-2 mb-2 w-full rounded text-center text-sm text-background bg-white/20 border-l-2 border-white'
                        >
                            {link.title}
                        </NavLink>
                    )
                }
            </div>
            {
                isAuth ? (
                    <div className="flex flex-col mt-4">
                        <NavLink to='/signup' className="mb-2 text-sm text-background rounded bg-primary text-center w-full  py-[7px]">Se déconnecter</NavLink>
                    </div>
                ) : (
                    <div className="flex flex-col mt-4">
                        <NavLink to='/signup' className="mb-2 text-sm text-secondary rounded bg-background text-center w-full  py-[7px]">S'inscrire</NavLink>
                        <NavLink to='/signup' className="mb-2 text-sm text-background rounded bg-primary text-center w-full  py-[7px]">Se connecter</NavLink>
                    </div>
                )
            }


        </nav>
    )
}
export default LeftNav