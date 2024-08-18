import { FunctionComponent } from "react";
import { useLink } from "../../hooks/useLink";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const CenterNav: FunctionComponent = () => {
    const { isAuth } = useAuth()
    const { links, linkActif, toggleLinkActif, toggleScrollActif, toggleKeyActif } = useLink()
    const handleClickLink = (key: string) => {
        toggleLinkActif(key), toggleScrollActif(key), toggleKeyActif(key)
    }
    return (
        <nav className="centerNav hidden lg:flex flex-row justify-evenly mt-[.3em]">
            {
                Object.entries(links).map(([key, link], index) =>
                    link == links['reservation'] ? (
                        isAuth ? (
                            <NavLink
                                key={index}
                                to='/reservations'
                                className={`${link == linkActif ? 'actif' : ''} navLink md:text-sm lg:text-base`}
                                onClick={() => handleClickLink(key)}
                            >{link.title}</NavLink>
                        ) : (undefined)
                    ) : (
                        <NavLink
                            key={index}
                            to='/'
                            className={`${link == linkActif ? 'actif' : ''} navLink md:text-sm lg:text-base`}
                            onClick={() => handleClickLink(key)}
                        >{link.title}</NavLink>
                    )
                )
            }
        </nav>
    )
}
export default CenterNav