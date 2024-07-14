import { FunctionComponent, useEffect, useRef } from "react";
import '../styles/components/_navigation-bar.scss';
import logo from '../assets/logo/logo-color.png';
import { NavLink } from "react-router-dom";

type Props = {
    onHeightChange: (h: number) => void
}

const NavigationBar: FunctionComponent<Props> = ({ onHeightChange }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current)
            onHeightChange(ref.current.offsetHeight)
    })

    return (
        <header className="flex flex-row justify-around" ref={ref}>
            <img src={logo} className="w-48 h-auto" alt="" />
            <nav className="flex flex-row justify-evenly w-1/3 ">
                <NavLink className="navLink" to='/'>Accueil</NavLink>
                <NavLink className="navLink" to='/'>Tourisme</NavLink>
                <NavLink className="navLink" to='/'>Geo-tourisme</NavLink>
                <NavLink className="navLink" to='/'>À propos</NavLink>
                <NavLink className="navLink" to='/'>Contact</NavLink>
            </nav>
            <div className="flex items-center">
                <NavLink to='/' className="login px-6 py-2">se connecter</NavLink>
            </div>
        </header >

    )
}

export default NavigationBar