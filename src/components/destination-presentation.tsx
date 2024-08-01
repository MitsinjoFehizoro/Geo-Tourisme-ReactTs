import { FunctionComponent, useState } from "react"
import { useHeightNav } from "../hooks/useHeightNav"
import { destination, stateSupabase } from "../tools/type"
import { AnimatePresence, Variants, motion } from "framer-motion"

type Props = {
    destination: destination
    stateGetDestination: stateSupabase
}
const DestinationPresentation: FunctionComponent<Props> = ({ destination, stateGetDestination }) => {
    const { heightNav } = useHeightNav()
    return (
        <section style={{ marginTop: heightNav }}>
            <div className="fotsy flex flex-col justify-center">
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <p className="points text-3xl" key={i}>. . . . . . . . . . . . . .</p>
                    ))
                }
            </div>
            <div className="galeries flex flex-row items-center justify-center" >
                <img src={destination?.galeries[0]} alt="" />
                <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                    <DetailCard title={destination?.title} description={destination?.description} />
                    {
                        destination.history && (
                            <DetailCard title="Histoire" description={destination.history} />
                        )
                    }
                    <DetailCard title='localisation' description={destination.localisation} />
                    <DetailCard title='date disponible' description={destination?.description} />
                </div>
            </div>
        </section>
    )
}

export default DestinationPresentation


type PropsDetailCard = {
    title: string,
    description: string
}
const DetailCard: FunctionComponent<PropsDetailCard> = ({ title, description }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <motion.div
            layout
            onClick={() => { setSimpleMode(!simpleMode) }}
            transition={{ type: 'spring', bounce: 0.4, duration: .5 }}
            className={simpleMode ? 'simple cursor-pointer' : 'modal cursor-pointer'}
        >
            <p className="text-primary text-xl mb-2 uppercase">{title}</p>
            <p className="description">{description}</p>
        </motion.div>
    )
}