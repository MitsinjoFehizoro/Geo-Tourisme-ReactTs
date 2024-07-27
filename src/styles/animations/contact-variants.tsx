import { Variants, easeOut } from "framer-motion"

export const variantsInfoCard: Variants = {
    offscreen: { opacity: 0, x: '-50%', y: '-30%' },
    onscreen: {
        opacity: 1, y: 0, x: 0,
        transition: {
            ease: easeOut,
            duration: .5,
        }
    }
}

export const variantsContactCard: Variants = {
    offscreen: { opacity: 0, x: '50%', y: '-30%' },
    onscreen: {
        opacity: 1, y: 0, x: 0,
        transition: {
            ease: easeOut,
            duration: .5,
        }
    }
}