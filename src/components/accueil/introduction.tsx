import { FunctionComponent } from "react"

const Introduction: FunctionComponent = () => {
    return (
        <div className="flex flex-col justify-center  md:w-6/12 lg:w-5/12 h-full lg:mb-0 mb-8">
            <h1 className="uppercase text-2xl text-left text-primary">dream big, travel far and explore more</h1>
            <p className="pt-2 text-background">
                Madaterrats'Art est une entreprise offrant une gamme variée d'activités et de services y compris le géotourisme. Nous donnons une expérience unique grâce à la connaissance approfondie de la géologie de l’Île paradisiaque et qui permettra aux voyageurs de découvrir les merveilles de ce pays fascinant.
            </p>
        </div>
    )
}
export default Introduction