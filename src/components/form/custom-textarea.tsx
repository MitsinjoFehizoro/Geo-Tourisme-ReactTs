import { FunctionComponent } from "react";

const CustomTextarea: FunctionComponent = () => {

    return (
        <textarea className="border-none outline-none bg-background rounded w-full h-36 px-4 py-2 my-2" defaultValue="Votre message ..." />
    )
}
export default CustomTextarea