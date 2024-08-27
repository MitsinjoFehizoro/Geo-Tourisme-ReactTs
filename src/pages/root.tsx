import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useInformation } from "../hooks/useInformation";

const Root: FunctionComponent = () => {
    const { authentication } = useAuth()
    useEffect(() => {
        authentication()
    }, [])

    const { getInformation } = useInformation()
    useEffect(() => {
        getInformation()
    }, [])

    return (
        <>
            <Outlet />
        </>
    )

}

export default Root