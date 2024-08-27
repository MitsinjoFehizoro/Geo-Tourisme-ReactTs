import { FunctionComponent } from "react";

const LoadingGarantiCard: FunctionComponent = () => {
    return (
        <div className="w-80 mb-14 flex flex-col items-center animate-pulse">
            <h2 className="w-48 h-5 bg-background pb-2 mb-6" />
            <p className=" w-5/6 h-2 bg-background mt-4" />
            <p className=" w-full h-2 bg-background mt-4" />
            <p className=" w-4/6 h-2 bg-background mt-4" />
            <p className=" w-5/6 h-2 bg-background mt-4" />
            <p className="w-44 mt-6 flex justify-center pb-2 pt-3  border-2 border-background rounded-full ">
                <p className="w-2/3 bg-background h-2" />
            </p>
        </div>
    )
}
export default LoadingGarantiCard
