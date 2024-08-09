import { FunctionComponent } from "react";

type Props = {
    text: string,
    isLoading: boolean
}
const CustomButton: FunctionComponent<Props> = ({ text, isLoading }) => {

    return (
        <button
            className={`${isLoading ? 'bg-primary/50 cursor-wait' : 'bg-primary cursor-pointer'} relative w-full p-2 text-white rounded-md mt-4`}
        >
            {!isLoading ? text : 'Veuillez patienter...'}
            {
                isLoading && (
                    <div className="absolute top-[-4px] right-[-4px]">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                    </div>
                )
            }
        </button>
    )
}
export default CustomButton