
const LoadingDateDispo = () => {
    return (
        <div className="relative w-80 h-96 py-14 pr-14 mb-8 animate-pulse">
            <div className={`bg-secondary/50 w-full h-full`}></div>
            <div className="h-full absolute top-0 right-0 flex flex-col justify-between">
                <div className="flex justify-between">
                    <LoadingDateCard />
                    <p className="px-1" />
                    <LoadingDateCard />
                </div>
                <div className="w-full h-full mt-2 bg-white shadow-xl text-center flex flex-col justify-around items-center py-8 px-8">
                    <div className="relative w-full pt-4 pb-2 bg-white shadow rounded-sm text-sm flex justify-center">
                        <div className="w-full absolute top-[-10px]">
                            <span className={`bg-secondary/50 text-xs text-white px-6 py-[2px] uppercase rounded-sm `}>local</span>
                        </div>
                        <p className="w-2/3 h-3 bg-background" />
                    </div>
                    <div className="relative w-full pt-4 pb-2 bg-white shadow rounded-sm text-sm flex justify-center">
                        <div className="w-full absolute top-[-10px]">
                            <span className={`bg-secondary/50 text-xs text-white px-6 py-[2px] uppercase rounded-sm `}>étranger</span>
                        </div>
                        <p className="w-2/3 h-3 bg-background " />
                    </div>
                    <div className={`bg-secondary/50 pt-3 pb-2 w-full text-xs uppercase text-white rounded hover:scale-105 transition flex justify-center`} >
                        <p className="w-2/3 h-3 bg-background" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoadingDateDispo

const LoadingDateCard = () => {
    return (
        <div className="w-32 h-28 bg-white flex flex-col justify-center items-center shadow-xl px-4">
            <p className={`bg-secondary/50 w-8 h-8 rounded-full flex items-center justify-center`}>
                <i className="fa-regular fa-calendar text-white text-sm"></i>
            </p>
            <p className="w-full h-3 bg-background mt-4 animate-pulse" />
        </div>
    )
}