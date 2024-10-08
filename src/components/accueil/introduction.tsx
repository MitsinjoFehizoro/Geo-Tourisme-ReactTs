import { FunctionComponent } from "react"
import { useInformation } from "../../hooks/useInformation"

const Introduction: FunctionComponent = () => {
    
    const { stateGetInformation, information } = useInformation()

    return (
        <div className="flex flex-col justify-center w-full  md:w-6/12 lg:w-5/12 h-full lg:mb-0 mb-8 mx-1">
            {
                stateGetInformation.isLoading ? (
                    <>
                        <h1 className="w-full h-5 mb-4 bg-background animate-pulse md:mt-12" />
                        <h1 className="w-1/2 h-5 md:h-0 bg-background animate-pulse" />
                        <p className="w-full h-6 md:h-0" />
                        {Array.from({ length: 4 }).map((_, index) => (
                            <p key={index} className="w-full bg-background h-2 mb-4" />
                        ))}
                         {Array.from({ length: 4 }).map((_, index) => (
                            <p key={index} className="w-full bg-background h-2 md:h-0 mb-4" />
                        ))}
                    </>
                ) : (
                    information && (
                        <>
                            <h1 className="uppercase text-2xl text-left text-primary">{information.title}</h1>
                            <p className="pt-2 text-background">{information.description}</p>
                        </>
                    )
                )
            }
        </div>
    )
}
export default Introduction