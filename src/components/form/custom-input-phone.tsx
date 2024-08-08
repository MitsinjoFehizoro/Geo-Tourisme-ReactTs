import { FunctionComponent } from "react";

const CustomInputPhone: FunctionComponent = () => {

    return (
        <div className="flex flex-row">
            <div className="px-4 py-2 mr-2 text-sm bg-background rounded flex flex-row items-center">
                <p className="mr-8">
                    MDG
                </p>
                <i className=" fa fa-caret-up"></i>
            </div>
            <div className="w-full">
                <input
                    type="text"
                    className="border-none outline-none text-sm bg-background rounded w-full px-4 py-2"
                />
            </div>
        </div>
    )
}
export default CustomInputPhone