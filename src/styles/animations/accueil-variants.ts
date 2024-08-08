import { Variants } from "framer-motion"

export const variantsDestination: Variants = {
    hidden: { opacity: 0, scale: 0, height: 0, transition: { when: 'afterChildren', staggerChildren: .05 } },
    visible: { opacity: 1, scale: 1, height: 'auto', transition: { when: 'beforeChildren', staggerChildren: .05 } }
}
export const variantsDestinationChild: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
}

export const variantsCountry: Variants = {
    hidden: { opacity: 0, scale: 0, height: 0, transition: { when: 'afterChildren', staggerChildren: .05 } },
    visible: { opacity: 1, scale: 1, height: 'auto', transition: { when: 'beforeChildren', staggerChildren: .05 } }
}