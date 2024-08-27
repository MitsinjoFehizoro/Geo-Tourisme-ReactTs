import { FunctionComponent } from "react"

const LoadingTemoinCard: FunctionComponent = () => {

    return (
        <div className="w-96 flex flex-col items-center animate-pulse">
            <div className="w-32 h-32 bg-white rounded-full" />
            <p className=" w-full h-2 bg-white mt-4" />
            <p className=" w-5/6 h-2 bg-white mt-4" />
            <p className=" w-11/12 h-2 bg-white mt-4" />
            <p className=" w-full h-2 bg-white mt-4" />
            <h2 className="w-48 h-5 bg-white pb-2 mt-6" />
        </div>
    )
}
export default LoadingTemoinCard