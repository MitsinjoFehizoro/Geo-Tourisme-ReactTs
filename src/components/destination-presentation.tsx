import { FunctionComponent, useState } from "react"
import { useHeightNav } from "../hooks/useHeightNav"
import { destination, organisation, stateSupabase } from "../tools/type"
import { motion } from "framer-motion"
import '../styles/components/_destination-presentation.scss'
import { formatDateLong, formatDateSimple } from "../tools/format-date"

type Props = {
    destination: destination | undefined
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
                {
                    destination && (
                        <img src={destination.galeries[0]} alt="" />
                    )
                }
                {
                    stateGetDestination.isLoading && (
                        <div className="img animate-pulse bg-white/50" />
                    )
                }

                <div className="monContaint relative grid grid-cols-2 place-items-center place-content-center gap-4">
                    <DetailCard title={destination?.title} description={destination?.description} />
                    {
                        destination.history && (
                            <DetailCard title="Histoire" description={destination.history} />
                        )
                    }
                    <DetailCard title='localisation' description={destination.localisation} />
                    <OrganistaionCard organisations={destination.organisations} />
                    {
                        !destination.history && (
                            <div className="simple opacity-0" />
                        )
                    }
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
            <div className="flex flex-row justify-between text-xl mb-2 uppercase">
                <p className="text-primary">{title}</p>
                <i className={`fa-solid fa-circle-xmark hover:text-red-500 ${simpleMode ? 'hidden' : 'block'}`} onClick={() => { setSimpleMode(!simpleMode) }}></i>
            </div>
            <p className="description">{description}</p>
        </motion.div>
    )
}
type PropsOrganisationCard = {
    organisations: organisation[]
}
const OrganistaionCard: FunctionComponent<PropsOrganisationCard> = ({ organisations }) => {
    const [simpleMode, setSimpleMode] = useState(true)
    return (
        <motion.div
            layout
            onClick={() => { setSimpleMode(!simpleMode) }}
            transition={{ type: 'spring', bounce: 0.4, duration: .5 }}
            className={simpleMode ? 'simple cursor-pointer ' : 'modal cursor-pointer'}
        >
            <div className="flex flex-row justify-between text-xl mb-2 uppercase">
                <p className="text-primary">date disponible</p>
                <i className={`fa-solid fa-circle-xmark hover:text-red-500 ${simpleMode ? 'hidden' : 'block'}`} onClick={() => { setSimpleMode(!simpleMode) }}></i>
            </div>            <div className="organisations">
                {
                    organisations.map(organisation => (
                        <div key={organisation.id} className="h-10 mb-2 flex flex-row items-center justify-center bg-background rounded">
                            <span>{simpleMode ? formatDateSimple(organisation.start) : formatDateLong(organisation.start)}</span>&nbsp;-&nbsp;
                            <span>{simpleMode ? formatDateSimple(organisation.end) : formatDateLong(organisation.end)}</span>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )

}