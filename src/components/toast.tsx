import { FunctionComponent } from "react";
import { useToast } from "../hooks/useToast";

const Toast: FunctionComponent = () => {
    const { toasts } = useToast()
    return (
        <ul className="absolute top-4 right-2 z-50 ">
            {
                toasts && toasts.map((toast, index) => (
                    <li
                        key={index}
                        className={`${toast.isSucces ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'} px-4 py-2 mb-2 rounded-md border-2 flex flex-row items-center justify-evenly cursor-text`}
                    >
                        <i className={`${toast.isSucces ? 'text-green-500' : ' text-red-500'} fa fa-circle-check`}></i>
                        <p className="ml-2 text-sm ">{toast.toast}</p>
                    </li >
                ))
            }
        </ul>
    )
}
export default Toast