import { FunctionComponent } from "react";
import { useLink } from "../../hooks/useLink";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const CenterNav: FunctionComponent = () => {
    const { isAuth } = useAuth()
    const { links, linkActif, toggleLinkActif, toggleScrollActif, toggleKeyActif } = useLink()

    return (
        <nav className="centerNav hidden md:flex flex-row justify-evenly mt-[.3em]">
            {
                Object.entries(links).map(([key, link]) =>
                    link == links['reservation'] ? (
                        isAuth ? (
                            <NavLink
                                to='/reservations'
                                className={`${link == linkActif ? 'actif' : ''} navLink md:text-sm lg:text-base`}
                                onClick={() => { toggleLinkActif(key), toggleScrollActif(key), toggleKeyActif(key) }}
                            >{link.title}</NavLink>
                        ) : (undefined)
                    ) : (
                        <NavLink
                            to='/'
                            key={key}
                            className={`${link == linkActif ? 'actif' : ''} navLink md:text-sm lg:text-base`}
                            onClick={() => { toggleLinkActif(key), toggleScrollActif(key), toggleKeyActif(key) }}
                        >{link.title}</NavLink>
                    )
                )
            }
        </nav>
    )
}
export default CenterNav