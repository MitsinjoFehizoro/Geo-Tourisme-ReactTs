import { FunctionComponent } from "react";

type Props = {
    field : field
}
const CustomTextarea: FunctionComponent = () => {

    return (
        <textarea
            className="border-none outline-none bg-background text-sm rounded w-full h-36 px-4 py-2 mb-2"
            placeholder="Votre message ..."
        
        />
    )
}
export default CustomTextarea