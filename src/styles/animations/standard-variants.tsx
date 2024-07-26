import { Variants } from 'framer-motion'

export const variantsStandard: Variants = {
    offscreen: { opacity: 0, y: 200 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: .4,
            duration: .8
        }
    }
}