import { FunctionComponent, PropsWithChildren } from "react";

const StandardCard: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative w-full bg-white rounded-md shadow p-4 mb-4">
            {children}
        </div>
    )
}
export default StandardCard