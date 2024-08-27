import { FunctionComponent, useEffect } from "react"
import { useGetInformation } from "../../supabase/informations-supabase"

const Introduction: FunctionComponent = () => {
    const { stateGetInformation, information, getInformation } = useGetInformation()
    useEffect(() => {
        getInformation()
    }, [])
    return (
        <div className="flex flex-col justify-center w-full  md:w-6/12 lg:w-5/12 h-full lg:mb-0 mb-8">
            {
                stateGetInformation.isLoading ? (
                    <>
                        <h1 className="w-full h-5 mb-6 bg-background animate-pulse" />
                        {Array.from({ length: 7 }).map((_, index) => (
                            <p key={index} className="w-full bg-background h-2 mb-4" />
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