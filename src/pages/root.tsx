import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Root: FunctionComponent = () => {
    const { authentication, clientAuth } = useAuth()
    console.log(clientAuth);
    useEffect(() => {
        authentication()
    }, [])
    return (
        <>
            <Outlet />
        </>
    )

}

export default Root