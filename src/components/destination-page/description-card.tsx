import { FunctionComponent } from "react";
import { Destination } from "../../models/destination";
import { stateSupabase } from "../../tools/type";

type Props = {
    destination: Destination | null
    stateSupabase: stateSupabase
}
const DescriptionCard: FunctionComponent<Props> = ({ destination, stateSupabase }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-20 h-20 border-[1px] border-secondary/50 p-1 rounded-full">
                <p className="w-full h-full flex items-center justify-center bg-secondary/50 rounded-full">
                    <i className="fa-solid fa-wand-magic-sparkles text-white"></i>
                </p>
            </div>
            <p className="w-[2px] mt-4 h-4 bg-secondary/50" />
            <div className="relative w-full h-20 p-2 pr-4 border-[1px] border-b-0 border-secondary/10 rounded-lg flex">
                <div className="w-full h-full bg-secondary/50 rounded-lg flex items-center justify-center text-white px-4">
                    {
                        stateSupabase.isLoading ? (
                            <p className="w-full h-3 bg-white animate-pulse" />
                        ) : (
                            destination && (
                                <p>{destination.title}</p>
                            )
                        )
                    }
                </div>
                <div className="w-2 h-14 absolute bottom-[-1px] right-[-2px] bg-background" />
            </div>
            <div className="relative w-full h-52 border-[1px] border-secondary/10 rounded-lg">
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                    {
                        stateSupabase.isLoading ? (
                            Array.from({ length: 8 }).map((_, index) =>
                                <p className="w-full h-2 mb-4 bg bg-white animate-pulse " key={index} />
                            )
                        ) : (
                            destination && (
                                <p className="description">{destination.description}</p>
                            )
                        )
                    }
                </div>
                <div className="w-2 h-14 absolute top-[-1px] left-[-2px] bg-background" />
            </div>
        </div>
    )
}
export default DescriptionCard