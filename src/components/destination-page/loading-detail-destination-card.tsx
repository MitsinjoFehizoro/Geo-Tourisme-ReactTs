import { FunctionComponent } from "react";

const LoadingDetailDestinationCard: FunctionComponent = () => {
    return (
        <div className="simple animate-pulse">
            <p className="w-4/6 bg-background h-3 mb-6" />
            {
                Array.from({ length: 5 }).map((_, index) =>
                    <p className="w-full rounded-md mb-4 h-2 bg-background" key={index} />
                )
            }
        </div>
    )
}

export default LoadingDetailDestinationCard