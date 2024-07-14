import { FunctionComponent } from "react";

type Props = {
    text: string
}
const CustomButton: FunctionComponent<Props> = ({ text }) => {

    return (
        <button
            className="w-full p-2 bg-primary text-white rounded-md mt-4"
        >{text}</button>
    )
}
export default CustomButton