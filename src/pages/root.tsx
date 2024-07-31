import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation-bar";

const Root: FunctionComponent = () => {
return (
    <>
        <NavigationBar />
        <Outlet />
    </>
)

}

export default Root