import { FunctionComponent } from "react";

type Props = {
    type: string,
    placeholder: string
}
const CustomInput: FunctionComponent<Props> = ({ type, placeholder }) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border-none outline-none bg-background rounded w-full px-4 py-2 mb-3"
            name="" id="" />
    )
}

export default CustomInput