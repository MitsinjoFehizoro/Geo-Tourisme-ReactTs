import { Variants } from "framer-motion"

export const variantsSlideDestination: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
}